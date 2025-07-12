import React from "react";
import Link from "next/link";

const VotersGuideline = () => (
  <div className="min-h-screen flex bg-[#F5F6FA]">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-lg flex flex-col py-8 px-4">
      <div className="flex items-center mb-10">
        <span className="text-[#3B3397] font-extrabold text-2xl tracking-tight bg-[#edeaff] px-3 py-1 rounded-full mr-2">iVOTE</span>
      </div>
      <nav className="flex flex-col gap-4 text-[#23235B] font-semibold">
        <Link href="/admin" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Dashboard</Link>
        <Link href="/voting" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Vote</Link>
        <Link href="/voters-guideline" className="bg-[#3B3397] text-white rounded-lg px-4 py-2">Voters Guideline</Link>
        <Link href="/settings" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Settings</Link>
        <Link href="/" className="mt-auto text-[#3B3397] hover:underline">Log out</Link>
      </nav>
    </aside>
    {/* Main Content */}
    <main className="flex-1 p-10 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-[#23235B] mb-4">VOTERS GUIDELINE</h1>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
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
      <div className="flex-1 flex items-center justify-center">
        {/* Illustration Placeholder */}
        <div className="w-72 h-72 bg-[#edeaff] rounded-xl flex items-center justify-center">
          <svg width="120" height="120" fill="none" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="40" width="80" height="60" rx="10" fill="#6C63FF" fillOpacity="0.2" />
            <rect x="40" y="60" width="40" height="20" rx="5" fill="#6C63FF" fillOpacity="0.5" />
            <rect x="55" y="70" width="10" height="10" rx="2" fill="#3B3397" />
          </svg>
        </div>
      </div>
    </main>
  </div>
);

export default VotersGuideline; 