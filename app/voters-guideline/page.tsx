'use client';

import React from "react";

const guidelines = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#6C63FF" fillOpacity="0.15"/><path d="M10 20v-2a4 4 0 018 0v2" stroke="#3B3397" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="12" r="4" stroke="#3B3397" strokeWidth="2"/></svg>
    ),
    text: "Read all instructions carefully before voting."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="4" fill="#6C63FF" fillOpacity="0.15"/><path d="M16 14v4" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="12" r="2" fill="#3B3397"/></svg>
    ),
    text: "Ensure you are eligible to vote in this election."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="8" fill="#6C63FF" fillOpacity="0.15"/><path d="M16 16v-4" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="20" r="2" fill="#3B3397"/></svg>
    ),
    text: "Review the list of candidates and their platforms."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="16" width="16" height="8" rx="4" fill="#6C63FF" fillOpacity="0.15"/><path d="M16 12v8" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="10" r="2" fill="#3B3397"/></svg>
    ),
    text: "Select your preferred candidate for each position."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="8" fill="#6C63FF" fillOpacity="0.15"/><path d="M16 16v-4" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="20" r="2" fill="#3B3397"/></svg>
    ),
    text: "Double-check your selections before submitting your vote."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="4" fill="#6C63FF" fillOpacity="0.15"/><path d="M16 14v4" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="12" r="2" fill="#3B3397"/></svg>
    ),
    text: <span>Click the <span className="font-bold text-[#3B3397]">"Submit Vote"</span> button to finalize your choices.</span>
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#6C63FF" fillOpacity="0.15"/><path d="M10 20v-2a4 4 0 018 0v2" stroke="#3B3397" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="12" r="4" stroke="#3B3397" strokeWidth="2"/></svg>
    ),
    text: "Wait for the confirmation message to ensure your vote is counted."
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="8" fill="#6C63FF" fillOpacity="0.15"/><path d="M16 16v-4" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="20" r="2" fill="#3B3397"/></svg>
    ),
    text: "Contact support if you encounter any issues during the voting process."
  }
];

const VotersGuideline = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#edeaff] via-[#f5f6fa] to-[#c7d2fe] animate-bg-move">
    <div className="bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border-2 border-[#6C63FF]/30 w-full max-w-2xl flex flex-col items-center relative overflow-hidden" style={{boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.18)'}}>
      {/* Animated Icon */}
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3B3397] shadow-xl mb-6 animate-float border-4 border-white/40">
        <svg width="56" height="56" fill="none" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="#6C63FF" fillOpacity="0.12" />
          <path d="M16 28l8 8 16-16" stroke="#3B3397" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#3B3397] mb-8 drop-shadow tracking-tight">VOTERS GUIDELINES</h1>
      <ul className="space-y-6 w-full">
        {guidelines.map((g, i) => (
          <li key={i} className="flex items-start gap-4 bg-white/70 rounded-xl p-5 shadow hover:shadow-lg transition-all border border-[#edeaff]">
            <span className="mt-1">{g.icon}</span>
            <span className="text-lg text-[#23235B] font-medium leading-relaxed">{g.text}</span>
          </li>
        ))}
      </ul>
      {/* Decorative floating shapes */}
      <div className="absolute -top-16 -left-16 w-44 h-44 bg-gradient-to-br from-[#6C63FF]/30 to-[#edeaff]/0 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tr from-[#3B3397]/20 to-[#edeaff]/0 rounded-full blur-2xl animate-pulse z-0" />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes bg-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bg-move {
          background-size: 200% 200%;
          animation: bg-move 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  </div>
);

export default VotersGuideline; 