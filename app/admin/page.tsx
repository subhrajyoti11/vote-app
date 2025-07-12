"use client";

import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

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
    <aside className="w-72 bg-white shadow-lg flex flex-col py-8 px-6 min-h-screen">
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 rounded-full bg-[#edeaff] flex items-center justify-center mb-2 overflow-hidden border-4 border-[#6C63FF]">
          {profileImg ? (
            <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <svg width="48" height="48" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
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
        <button onClick={() => setActive("dashboard")} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${active === "dashboard" ? "bg-[#3B3397] text-white" : "hover:bg-[#edeaff]"}`}>Dashboard</button>
        <button onClick={() => setActive("guideline")} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${active === "guideline" ? "bg-[#3B3397] text-white" : "hover:bg-[#edeaff]"}`}>Voters Guideline</button>
        <button onClick={() => setActive("settings")} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${active === "settings" ? "bg-[#3B3397] text-white" : "hover:bg-[#edeaff]"}`}>Settings</button>
        <Link href="/" className="mt-auto text-[#3B3397] hover:underline px-4 py-2">Log out</Link>
      </nav>
    </aside>
  );
};

const Dashboard = () => (
  <div className="w-full">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <div>
        <div className="text-lg font-semibold text-gray-600 mb-1">Hello, Juan!</div>
        <div className="text-xl font-bold text-[#23235B] mb-2">Ongoing Elections</div>
        <div className="bg-[#edeaff] rounded-lg p-4 flex items-center gap-4 w-[340px]">
          <span className="font-semibold text-[#3B3397]">President Student Council</span>
          <button className="ml-4 px-4 py-1 rounded-full bg-[#3B3397] text-white text-sm font-semibold">Vote Now</button>
        </div>
      </div>
      {/* Calendar */}
      <div className="bg-white rounded-lg shadow p-4 w-72 flex flex-col items-center">
        <div className="font-semibold text-[#3B3397] mb-2">Calendar</div>
        <div className="text-gray-400 text-sm">[Calendar Widget]</div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Live Results */}
      <div className="bg-white rounded-lg shadow p-6 col-span-2">
        <div className="font-semibold text-[#3B3397] mb-2">Live Results</div>
        <div className="mb-4 text-gray-600 text-sm">President Student Council</div>
        {/* Bar Chart */}
        <div className="h-32 flex items-end gap-8 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-8 h-20 bg-[#6C63FF] rounded-t"></div>
            <span className="text-xs mt-1">Juan</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 bg-[#edeaff] rounded-t"></div>
            <span className="text-xs mt-1">Emma</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-28 bg-[#3B3397] rounded-t"></div>
            <span className="text-xs mt-1">Felix</span>
          </div>
        </div>
      </div>
      {/* Voting Process */}
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center">
        <div className="font-semibold text-[#3B3397] mb-2">Voting Process</div>
        <div className="w-24 h-24 rounded-full border-8 border-[#edeaff] flex items-center justify-center mb-2">
          <span className="text-2xl font-bold text-[#3B3397]">70%</span>
        </div>
        <div className="text-gray-600 text-sm text-center">Total number of registered candidates</div>
      </div>
    </div>
    {/* Election Activities */}
    <div className="bg-white rounded-lg shadow p-6">
      <div className="font-semibold text-[#3B3397] mb-2">Election Activities</div>
      <ul className="divide-y divide-gray-200">
        <li className="py-2 flex items-center justify-between">
          <span>President Student Council</span>
          <span className="text-xs bg-[#edeaff] text-[#3B3397] px-2 py-1 rounded-full">Ongoing</span>
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
  <div className="w-full">
    <div className="text-2xl font-bold text-[#23235B] mb-4">VOTERS GUIDELINE</div>
    <ol className="list-decimal list-inside space-y-3 text-gray-700 bg-white rounded-lg shadow p-6">
      <li>Read all instructions carefully before voting.</li>
      <li>Ensure you are eligible to vote in this election.</li>
      <li>Review the list of candidates and their platforms.</li>
      <li>Select your preferred candidate for each position.</li>
      <li>Double-check your selections before submitting your vote.</li>
      <li>Click the "Submit Vote" button to finalize your choices.</li>
      <li>Wait for the confirmation message to ensure your vote is counted.</li>
      <li>Contact support if you encounter any issues during the voting process.</li>
    </ol>
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

const AdminPage: React.FC = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="min-h-screen flex bg-[#F5F6FA]">
      <Sidebar active={active} setActive={setActive} />
      <main className="flex-1 p-10">
        {active === "dashboard" && <Dashboard />}
        {active === "guideline" && <VotersGuideline />}
        {active === "settings" && <Settings />}
      </main>
    </div>
  );
};

export default AdminPage; 