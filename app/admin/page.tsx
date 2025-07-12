"use client";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";
import { FaTachometerAlt, FaBook, FaCog, FaVoteYea, FaSignOutAlt, FaCalendarAlt, FaChartBar, FaUserCheck, FaInfoCircle, FaCheckCircle, FaBookOpen, FaIdBadge, FaUsers, FaCheckSquare, FaClipboardCheck, FaPaperPlane, FaRegSmile, FaLifeRing } from "react-icons/fa";

interface Candidate {
  name: string;
  img: string;
  title?: string; // Optional, only for voter candidates
}

interface Position {
  title: string;
  candidates: Candidate[];
}

const positions: Position[] = [
  {
    title: "President Student Council",
    candidates: [
      { name: "Felisa Monteverde", img: "https://randomuser.me/api/portraits/women/1.jpg" },
      { name: "Emma Ainsley Zamora", img: "https://randomuser.me/api/portraits/women/2.jpg" },
      { name: "Lorenzo Agustin", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    ],
  },
  {
    title: "Vice President Student Council",
    candidates: [
      { name: "Kasey Rachel Flores", img: "https://randomuser.me/api/portraits/women/3.jpg" },
      { name: "Carolina Labasan", img: "https://randomuser.me/api/portraits/women/4.jpg" },
      { name: "Meagan Canubig", img: "https://randomuser.me/api/portraits/women/5.jpg" },
    ],
  },
  {
    title: "Secretary Student Council",
    candidates: [
      { name: "Elie Oyulangan", img: "https://randomuser.me/api/portraits/men/2.jpg" },
      { name: "Claudio Lucio Tejada", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    ],
  },
];

type Votes = {
  [position: string]: string;
};

const Sidebar = ({ active, setActive }: { active: string; setActive: (s: string) => void }) => {
  const [profileImg, setProfileImg] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfileImg(ev.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <aside className="w-72 bg-white/60 backdrop-blur-lg shadow-2xl flex flex-col py-8 px-6 min-h-screen rounded-r-3xl border-r border-[#edeaff]/60" style={{boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.25)'}}>
      <div className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3B3397] flex items-center justify-center mb-2 overflow-hidden border-4 border-[#6C63FF] shadow-lg">
          {profileImg ? (
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <svg width="56" height="56" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="24" r="16" fill="#6C63FF" fillOpacity="0.3" />
              <rect x="16" y="40" width="32" height="16" rx="8" fill="#6C63FF" fillOpacity="0.2" />
            </svg>
          )}
        </div>
        <label className="text-xs text-[#3B3397] bg-[#edeaff] px-2 py-1 rounded cursor-pointer mb-2 hover:bg-[#6C63FF]/20 transition">
          Upload
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
        </label>
        <div className="font-bold text-[#23235B] text-lg">Juan Dela Cruz</div>
        <div className="text-xs text-gray-500 mb-2">President Student Council</div>
      </div>
      <nav className="flex flex-col gap-2 text-[#23235B] font-semibold">
        <button onClick={() => setActive("dashboard")} className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${active === "dashboard" ? "bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white shadow-lg scale-105" : "hover:bg-[#edeaff]/80"}`}><FaTachometerAlt /> Dashboard</button>
        <button onClick={() => setActive("settings")} className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${active === "settings" ? "bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white shadow-lg scale-105" : "hover:bg-[#edeaff]/80"}`}><FaCog /> Settings</button>
        <button onClick={() => setActive("voting")} className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200 ${active === "voting" ? "bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white shadow-lg scale-105" : "hover:bg-[#edeaff]/80"}`}><FaVoteYea /> Voting</button>
        <Link href="/" className="mt-auto flex items-center gap-3 text-[#3B3397] hover:underline px-4 py-2"><FaSignOutAlt /> Log out</Link>
      </nav>
    </aside>
  );
};

const Dashboard = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-[#edeaff] via-[#f5f6fa] to-[#c7d2fe] rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 60% 20%, #6C63FF22 0%, #edeaff00 70%)'}}></div>
    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <div>
        <div className="text-lg font-semibold text-gray-600 mb-1 flex items-center gap-2"><FaUserCheck className = "text-[#6C63FF]" /> Hello, <span className="text-[#3B3397]">Juan!</span></div>
        <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3B3397] mb-2 drop-shadow">Ongoing Elections</div>
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 flex items-center gap-4 w-[340px] shadow-lg">
          <span className="font-semibold text-[#3B3397] flex items-center gap-2"><FaVoteYea /> President Student Council</span>
          <button className="ml-4 px-4 py-1 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white text-sm font-semibold shadow hover:from-[#3B3397] hover:to-[#6C63FF] transition-all">Vote Now</button>
        </div>
      </div>
      {/* Calendar */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-4 w-72 flex flex-col items-center">
        <div className="font-semibold text-[#3B3397] mb-2 flex items-center gap-2"><FaCalendarAlt /> Calendar</div>
        <div className="text-gray-400 text-sm">[Calendar Widget]</div>
      </div>
    </div>
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Live Results */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 col-span-2">
        <div className="font-semibold text-[#3B3397] mb-2 flex items-center gap-2"><FaChartBar /> Live Results</div>
        <div className="mb-4 text-gray-600 text-sm">President Student Council</div>
        {/* Bar Chart */}
        <div className="h-32 flex items-end gap-8 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-20 bg-gradient-to-t from-[#6C63FF] to-[#edeaff] rounded-t shadow-md"></div>
            <span className="text-xs mt-1">Juan</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 bg-gradient-to-t from-[#edeaff] to-[#6C63FF] rounded-t shadow-md"></div>
            <span className="text-xs mt-1">Emma</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-28 bg-gradient-to-t from-[#3B3397] to-[#6C63FF] rounded-t shadow-md"></div>
            <span className="text-xs mt-1">Felix</span>
          </div>
        </div>
      </div>
      {/* Voting Process */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
        <div className="font-semibold text-[#3B3397] mb-2 flex items-center gap-2"><FaVoteYea /> Voting Process</div>
        <div className="w-24 h-24 rounded-full border-8 border-[#edeaff] flex items-center justify-center mb-2 bg-gradient-to-br from-[#6C63FF22] to-[#edeaff99] shadow-inner">
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3B3397] drop-shadow">70%</span>
        </div>
        <div className="text-gray-600 text-sm text-center">Total number of registered candidates</div>
      </div>
    </div>
    {/* Election Activities */}
    <div className="relative z-10 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6">
      <div className="font-semibold text-[#3B3397] mb-2 flex items-center gap-2"><FaBook /> Election Activities</div>
      <ul className="divide-y divide-gray-200">
        <li className="py-2 flex items-center justify-between">
          <span>President Student Council</span>
          <span className="text-xs bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white px-2 py-1 rounded-full shadow">Ongoing</span>
        </li>
        <li className="py-2 flex items-center justify-between">
          <span>Vice President Student Council</span>
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Pending</span>
        </li>
        <li className="py-2 flex items-center justify-between">
          <span>Secretary Student Council</span>
          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Pending</span>
        </li>
      </ul>
    </div>
  </div>
);

const VotersGuideline = () => (
  <div className="w-full min-h-screen relative flex items-center justify-center overflow-hidden">
    {/* Dynamic background with floating shapes */}
    <div className="absolute inset-0 z-0">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#6C63FF]/30 to-[#edeaff]/0 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-tr from-[#3B3397]/20 to-[#edeaff]/0 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-tl from-[#6C63FF]/20 to-[#edeaff]/0 rounded-full blur-2xl animate-pulse" />
    </div>
    <div className="relative z-10 max-w-2xl w-full">
      {/* Floating icon header */}
      <div className="flex items-center gap-3 mb-8 justify-center">
        <span className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6C63FF] to-[#3B3397] rounded-full shadow-2xl border-4 border-white/40 animate-float">
          <FaInfoCircle className="text-3xl text-white drop-shadow-lg" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-[#edeaff] to-[#6C63FF] rounded-full border-2 border-white shadow animate-ping" />
        </span>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3B3397] drop-shadow tracking-tight">VOTERS GUIDELINE</h1>
      </div>
      {/* Glassy animated card */}
      <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border-2 border-transparent bg-clip-padding relative animate-fade-in group transition-all duration-500 hover:shadow-[0_8px_40px_0_rgba(99,99,241,0.18)]">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#6C63FF]/40 via-[#edeaff]/10 to-[#3B3397]/30 blur-lg opacity-70 -z-10 animate-gradient-move" />
        <ol className="space-y-7">
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaBookOpen className="mt-1 text-[#6C63FF] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#3B3397]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">Start by reading these instructions carefully to ensure a smooth voting experience.</span>
          </li>
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaIdBadge className="mt-1 text-[#3B3397] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#6C63FF]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">Check your eligibility—only qualified voters can participate in this election.</span>
          </li>
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaUsers className="mt-1 text-[#6C63FF] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#3B3397]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">Take time to review all candidates and their platforms before making your choice.</span>
          </li>
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaCheckSquare className="mt-1 text-[#3B3397] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#6C63FF]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">Choose your favorite candidate for every available position.</span>
          </li>
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaClipboardCheck className="mt-1 text-[#6C63FF] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#3B3397]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">Double-check your selections to make sure everything is correct.</span>
          </li>
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaPaperPlane className="mt-1 text-[#3B3397] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#6C63FF]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">When you’re ready, click the <span className="font-bold text-[#3B3397]">"Submit Vote"</span> button to cast your ballot.</span>
          </li>
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaRegSmile className="mt-1 text-[#6C63FF] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#3B3397]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">Wait for the confirmation message—this means your vote has been counted!</span>
          </li>
          <li className="flex items-start gap-4 group-hover:scale-105 transition-transform duration-300">
            <FaLifeRing className="mt-1 text-[#3B3397] text-2xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:text-[#6C63FF]" />
            <span className="text-gray-800 text-lg font-semibold tracking-wide">Need help? Contact support if you run into any issues while voting.</span>
          </li>
        </ol>
      </div>
    </div>
    {/* Animations */}
    <style jsx>{`
      @keyframes gradient-move {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient-move {
        background-size: 200% 200%;
        animation: gradient-move 8s ease-in-out infinite;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1.2s cubic-bezier(0.22, 1, 0.36, 1);
      }
    `}</style>
  </div>
);

const Settings = () => (
  <div className="w-full">
    <div className="text-2xl font-bold text-[#23235B] mb-6">SETTINGS</div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div className="font-semibold text-[#3B3397] mb-2">Account</div>
        <ul className="space-y-3">
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">Edit Profile</button></li>
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">Change Password</button></li>
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">Language</button></li>
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">Notification</button></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-[#3B3397] mb-2">Links</div>
        <ul className="space-y-3">
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">About Us</button></li>
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">Terms of Service</button></li>
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">Privacy Policy</button></li>
          <li><button className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold w-full text-left">Contact Us</button></li>
        </ul>
      </div>
    </div>
  </div>
);

const Voting = () => {
  const [votes, setVotes] = useState<Votes>({});
  const [showVoters, setShowVoters] = useState(true);
  const [allPositions, setAllPositions] = useState<Position[]>(() => {
    const stored = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('candidates') || '[]') : [];
    const merged = positions.map(pos => ({
      ...pos,
      candidates: [
        ...pos.candidates,
        ...stored.filter((c: any) => c.title === pos.title)
      ]
    }));
    return merged;
  });
  const [addForm, setAddForm] = useState<{ [title: string]: boolean }>({});
  const [newCandidate, setNewCandidate] = useState<{ [title: string]: { name: string; img: string | null } }>({});

  // Remove candidate handler (unchanged)
  const handleRemove = (title: string, name: string) => {
    setAllPositions(prev => prev.map(pos =>
      pos.title === title
        ? { ...pos, candidates: pos.candidates.filter(c => c.name !== name) }
        : pos
    ));
    const stored = JSON.parse(localStorage.getItem('candidates') || '[]');
    const updated = stored.filter((c: any) => !(c.title === title && c.name === name));
    localStorage.setItem('candidates', JSON.stringify(updated));
  };

  // Toggle voter section (unchanged)
  const handleToggle = () => setShowVoters(v => !v);

  // Add candidate handlers
  const handleAddClick = (title: string) => {
    setAddForm(f => ({ ...f, [title]: true }));
    setNewCandidate(nc => ({ ...nc, [title]: { name: '', img: null } }));
  };
  const handleAddChange = (title: string, field: 'name' | 'img', value: string) => {
    setNewCandidate(nc => ({
      ...nc,
      [title]: {
        ...nc[title],
        [field]: value
      }
    }));
  };
  const handleAddImage = (title: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        handleAddChange(title, 'img', ev.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleAddSubmit = (title: string, e: React.FormEvent) => {
    e.preventDefault();
    const cand = newCandidate[title];
    if (!cand.name || !cand.img) return;
    setAllPositions(prev => prev.map(pos =>
      pos.title === title
        ? { ...pos, candidates: [...pos.candidates, { name: cand.name, img: cand.img as string, title }] }
        : pos
    ));
    // Save to localStorage for persistence
    const prevStored = JSON.parse(localStorage.getItem('candidates') || '[]');
    localStorage.setItem('candidates', JSON.stringify([...prevStored, { name: cand.name, img: cand.img as string, title }]));
    setAddForm(f => ({ ...f, [title]: false }));
    setNewCandidate(nc => ({ ...nc, [title]: { name: '', img: null } }));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#23235B]">YOU MAY NOW CAST YOUR VOTES!</h1>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={showVoters} onChange={handleToggle} className="accent-[#3B3397] w-5 h-5" />
          <span className="text-[#3B3397] font-semibold">Show Voter Candidates</span>
        </label>
      </div>
      <form>
        {allPositions.map((pos) => (
          <div key={pos.title} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg text-[#23235B]">{pos.title}</h2>
              {!addForm[pos.title] && (
                <button type="button" onClick={() => handleAddClick(pos.title)} className="px-4 py-1 rounded-full bg-[#edeaff] text-[#3B3397] font-semibold shadow hover:bg-[#3B3397] hover:text-white transition text-sm">Add Candidate</button>
              )}
            </div>
            {addForm[pos.title] && (
              <form onSubmit={e => handleAddSubmit(pos.title, e)} className="mb-4 flex flex-col md:flex-row items-center gap-4 bg-[#f5f6fa] p-4 rounded-xl shadow">
                <input type="text" placeholder="Full Name" className="px-4 py-2 border-2 border-[#edeaff] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition shadow-sm bg-white" value={newCandidate[pos.title]?.name || ''} onChange={e => handleAddChange(pos.title, 'name', e.target.value)} required />
                <input type="file" accept="image/*" className="" onChange={e => handleAddImage(pos.title, e)} required />
                {newCandidate[pos.title]?.img && <img src={newCandidate[pos.title].img!} alt="Preview" className="w-12 h-12 rounded-full object-cover" />}
                <button type="submit" className="px-4 py-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow hover:from-[#3B3397] hover:to-[#6C63FF] transition">Add</button>
                <button type="button" onClick={() => setAddForm(f => ({ ...f, [pos.title]: false }))} className="px-3 py-2 rounded-full bg-red-100 text-red-600 font-semibold hover:bg-red-200 transition">Cancel</button>
              </form>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pos.candidates
                .filter(c => showVoters || !('title' in c))
                .map((cand) => (
                <div key={cand.name} className={`flex flex-col items-center bg-white rounded-xl shadow p-6 ${votes[pos.title] === cand.name ? 'ring-2 ring-[#3B3397]' : ''}`}> 
                  <img src={cand.img} alt={cand.name} className="w-20 h-20 rounded-full mb-3 object-cover" />
                  <span className="font-bold text-[#23235B] mb-2">{cand.name}</span>
                  <button type="button" onClick={() => setVotes({ ...votes, [pos.title]: cand.name })} className={`px-4 py-1 rounded-full font-semibold text-sm mt-2 ${votes[pos.title] === cand.name ? 'bg-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397]'} transition`}>
                    Vote
                  </button>
                  <button type="button" onClick={() => handleRemove(pos.title, cand.name)} className="mt-2 px-3 py-1 rounded bg-red-100 text-red-600 text-xs font-semibold hover:bg-red-200 transition">Remove</button>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Remove the submit button below */}
        {/* <div className="flex justify-center mt-8">
          <button type="submit" className="px-8 py-2 rounded-full bg-[#3B3397] text-white font-semibold shadow hover:bg-[#edeaff] hover:text-[#3B3397] transition">SUBMIT VOTE</button>
        </div> */}
      </form>
    </div>
  );
};

const AdminPage: React.FC = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-[#F5F6FA]">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 p-10">
        {active === "dashboard" && <Dashboard />}
        {active === "guideline" && <VotersGuideline />}
        {active === "settings" && <Settings />}
        {active === "voting" && <Voting />}
      </main>
    </div>
  );
};

export default AdminPage; 