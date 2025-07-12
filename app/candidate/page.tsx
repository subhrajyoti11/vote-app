"use client";

import React, { useState } from "react";

const positions = [
  "President Student Council",
  "Vice President Student Council",
  "Secretary Student Council",
  // Add more positions as needed
];

const CandidatePage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    position: positions[0],
    loginEmail: "",
    loginPassword: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [candidateName, setCandidateName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration (store in localStorage or just set state)
    localStorage.setItem(
      `candidate_${form.email}`,
      JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
        position: form.position,
      })
    );
    alert("Registration successful! Please login.");
    setIsRegister(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const data = localStorage.getItem(`candidate_${form.loginEmail}`);
    if (data) {
      const candidate = JSON.parse(data);
      if (candidate.password === form.loginPassword) {
        setLoggedIn(true);
        setCandidateName(candidate.name);
        setSelectedPositions([candidate.position]);
      } else {
        alert("Incorrect password.");
      }
    } else {
      alert("Candidate not found. Please register.");
    }
  };

  const handlePositionChange = (pos: string) => {
    setSelectedPositions((prev) =>
      prev.includes(pos)
        ? prev.filter((p) => p !== pos)
        : [...prev, pos]
    );
  };

  const handleStand = () => {
    alert(
      `You are now standing for: ${selectedPositions.join(", ")}`
    );
    // Here you would update the backend or localStorage
  };

  if (loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#edeaff] via-[#f5f6fa] to-[#c7d2fe]">
        <div className="bg-white/90 p-10 rounded-3xl shadow-2xl border border-[#edeaff] w-full max-w-md flex flex-col items-center">
          <h1 className="text-2xl font-extrabold text-[#23235B] mb-4">Welcome, {candidateName}!</h1>
          <p className="mb-4 text-[#3B3397]">Select the positions you want to stand for:</p>
          <form className="space-y-4 w-full">
            {positions.map((pos) => (
              <label key={pos} className="flex items-center gap-2 text-[#3B3397] font-semibold">
                <input
                  type="checkbox"
                  checked={selectedPositions.includes(pos)}
                  onChange={() => handlePositionChange(pos)}
                />
                {pos}
              </label>
            ))}
          </form>
          <button
            className="mt-6 w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg"
            onClick={handleStand}
          >
            Stand for Election
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#edeaff] via-[#f5f6fa] to-[#c7d2fe]">
      <div className="bg-white/90 p-10 rounded-3xl shadow-2xl border border-[#edeaff] w-full max-w-md flex flex-col items-center">
        <div className="flex w-full mb-6">
          <button
            className={`flex-1 py-2 rounded-l-full font-semibold text-lg transition ${isRegister ? 'bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397]'}`}
            onClick={() => setIsRegister(true)}
            type="button"
          >
            Register
          </button>
          <button
            className={`flex-1 py-2 rounded-r-full font-semibold text-lg transition ${!isRegister ? 'bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397]'}`}
            onClick={() => setIsRegister(false)}
            type="button"
          >
            Login
          </button>
        </div>
        {isRegister ? (
          <form onSubmit={handleRegister} className="space-y-5 w-full">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Full Name</label>
              <input type="text" name="name" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={form.name} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Email</label>
              <input type="email" name="email" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={form.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Password</label>
              <input type="password" name="password" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={form.password} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Select Position</label>
              <select name="position" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={form.position} onChange={handleChange} required>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>{pos}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">Register as Candidate</button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5 w-full">
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Email</label>
              <input type="email" name="loginEmail" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={form.loginEmail} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-[#3B3397]">Password</label>
              <input type="password" name="loginPassword" className="w-full px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-[#f5f6fa]" value={form.loginPassword} onChange={handleChange} required />
            </div>
            <button type="submit" className="w-full py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">Login as Candidate</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CandidatePage; 