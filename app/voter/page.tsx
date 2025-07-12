"use client";

import React, { useState } from "react";

const positions = [
  "President Student Council",
  "Vice President Student Council",
  "Secretary Student Council"
];

const VoterPage: React.FC = () => {
  const [tab, setTab] = useState<'register' | 'login'>('register');
  // Register form state
  const [regName, setRegName] = useState("");
  const [regTitle, setRegTitle] = useState(positions[0]);
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regImage, setRegImage] = useState<string | null>(null);
  const [regError, setRegError] = useState("");
  // Login form state
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [logError, setLogError] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setRegImage(ev.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName || !regTitle || !regEmail || !regPassword || !regImage) {
      setRegError("Please fill in all fields and upload an image.");
      return;
    }
    setRegError("");
    // Save candidate to localStorage
    const candidate = { name: regName, title: regTitle, img: regImage };
    const prev = JSON.parse(localStorage.getItem("candidates") || "[]");
    localStorage.setItem("candidates", JSON.stringify([...prev, candidate]));
    alert("Registered as a candidate!");
    setRegName(""); setRegTitle(positions[0]); setRegEmail(""); setRegPassword(""); setRegImage(null);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!logEmail || !logPassword) {
      setLogError("Please enter both email and password.");
      return;
    }
    setLogError("");
    alert("Logged in as a candidate!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#edeaff] via-[#f5f6fa] to-[#c7d2fe]">
      <div className="bg-white/90 p-10 rounded-3xl shadow-2xl border border-[#edeaff] w-full max-w-md flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center w-full">
          <div className="bg-[#3B3397] rounded-full p-3 mb-2 shadow-lg">
            <svg width="40" height="40" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="24" r="16" fill="#6C63FF" fillOpacity="0.3" />
              <rect x="16" y="40" width="32" height="16" rx="8" fill="#6C63FF" fillOpacity="0.2" />
            </svg>
          </div>
          <h1 className="text-2xl font-extrabold text-[#23235B] tracking-tight mb-2">Stand for Election</h1>
          <div className="flex w-full mb-2 mt-2">
            <button
              className={`flex-1 py-2 rounded-l-xl font-semibold transition text-sm ${tab === 'register' ? 'bg-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397] hover:bg-[#d1d5fa]'}`}
              onClick={() => setTab('register')}
            >
              Register as Candidate
            </button>
            <button
              className={`flex-1 py-2 rounded-r-xl font-semibold transition text-sm ${tab === 'login' ? 'bg-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397] hover:bg-[#d1d5fa]'}`}
              onClick={() => setTab('login')}
            >
              Candidate Login
            </button>
          </div>
        </div>
        {tab === 'register' ? (
          <form onSubmit={handleRegister} className="space-y-5 w-full">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={regName} onChange={e => setRegName(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Title (Position)</label>
              <select className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={regTitle} onChange={e => setRegTitle(e.target.value)} required>
                {positions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Image</label>
              <input type="file" accept="image/*" className="w-full" onChange={handleImageChange} required />
              {regImage && <img src={regImage} alt="Preview" className="w-20 h-20 rounded-full mt-2 object-cover mx-auto" />}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Email</label>
              <input type="email" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={regEmail} onChange={e => setRegEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Password</label>
              <input type="password" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={regPassword} onChange={e => setRegPassword(e.target.value)} required />
            </div>
            {regError && <div className="text-red-500 text-sm text-center">{regError}</div>}
            <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">Register as Candidate</button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5 w-full">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Email</label>
              <input type="email" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={logEmail} onChange={e => setLogEmail(e.target.value)} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Password</label>
              <input type="password" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={logPassword} onChange={e => setLogPassword(e.target.value)} required />
            </div>
            {logError && <div className="text-red-500 text-sm text-center">{logError}</div>}
            <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">Login as Candidate</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default VoterPage; 