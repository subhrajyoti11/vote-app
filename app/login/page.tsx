"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [voterId, setVoterId] = useState("");
  const [voterPassword, setVoterPassword] = useState("");
  const [voterRemember, setVoterRemember] = useState(false);
  const [voterError, setVoterError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdmin) {
      if (!adminId || !password) {
        setError("Please enter both Admin ID No. and password.");
        return;
      }
      setError("");
      alert("Logged in as admin!");
    } else {
      if (!voterId || !voterPassword) {
        setVoterError("Please enter both Voter ID No. and password.");
        return;
      }
      setVoterError("");
      alert("Logged in as voter!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#edeaff] via-[#f5f6fa] to-[#c7d2fe]">
      <div className="bg-white/90 p-10 rounded-3xl shadow-2xl border border-[#edeaff] w-full max-w-md flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="bg-[#3B3397] rounded-full p-3 mb-2 shadow-lg">
            <svg width="40" height="40" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="24" r="16" fill="#6C63FF" fillOpacity="0.3" />
              <rect x="16" y="40" width="32" height="16" rx="8" fill="#6C63FF" fillOpacity="0.2" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold text-[#23235B] tracking-tight">Welcome Back!</h1>
          <p className="text-gray-500 text-sm mt-1 text-center">Welcome back to iVOTE's Online Voting System</p>
        </div>
        <div className="flex w-full mb-6">
          <button
            className={`flex-1 py-2 rounded-l-full font-semibold text-lg transition ${isAdmin ? 'bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397]'}`}
            onClick={() => setIsAdmin(true)}
            type="button"
          >
            Admin Login
          </button>
          <button
            className={`flex-1 py-2 rounded-r-full font-semibold text-lg transition ${!isAdmin ? 'bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397]'}`}
            onClick={() => setIsAdmin(false)}
            type="button"
          >
            Voter Login
          </button>
        </div>
        {isAdmin ? (
          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Admin ID No.</label>
              <input type="text" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={adminId} onChange={e => setAdminId(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Password</label>
              <input type="password" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-[#3B3397]">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="accent-[#3B3397]" />
                Remember Password
              </label>
              <Link href="#" className="text-[#3B3397] text-sm font-semibold hover:underline">Forgot Password?</Link>
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">LOGIN AS ADMIN</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Voter ID No.</label>
              <input type="text" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={voterId} onChange={e => setVoterId(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Password</label>
              <input type="password" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={voterPassword} onChange={e => setVoterPassword(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-[#3B3397]">
                <input type="checkbox" checked={voterRemember} onChange={e => setVoterRemember(e.target.checked)} className="accent-[#3B3397]" />
                Remember Password
              </label>
              <Link href="#" className="text-[#3B3397] text-sm font-semibold hover:underline">Forgot Password?</Link>
            </div>
            {voterError && <div className="text-red-500 text-sm text-center">{voterError}</div>}
            <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">LOGIN AS VOTER</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
