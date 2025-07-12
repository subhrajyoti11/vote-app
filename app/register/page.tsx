"use client";

import React, { useState } from "react";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert("Registered!");
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
          <h1 className="text-3xl font-extrabold text-[#23235B] tracking-tight">Register</h1>
          <p className="text-gray-500 text-sm mt-1">Create your account to start voting.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Name</label>
            <input type="text" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Email</label>
            <input type="email" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Password</label>
            <input type="password" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">Register</button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-[#3B3397] font-semibold hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 