import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white pt-10 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#23235B]">
            <span className="bg-[#6C63FF]/20 px-2 py-1 rounded-lg text-[#6C63FF] mr-2 font-bold">iVOTE</span>
            Online Voting System
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Let’s make voting and elections easy for you. This is designed to ensure a secured voting session.
          </p>
          <Link href="/register">
            <button className="mt-2 px-8 py-3 rounded-full bg-[#6C63FF] text-white font-semibold shadow hover:bg-[#554fd8] transition text-lg">
              Register as a Voter
            </button>
          </Link>
        </div>
        {/* Right: Illustration Placeholder */}
        <div className="flex-1 flex items-center justify-center">
          {/* Placeholder SVG illustration */}
          <svg width="320" height="200" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="40" width="280" height="120" rx="16" fill="#F3F4F6" />
            <rect x="60" y="80" width="60" height="40" rx="8" fill="#6C63FF" fillOpacity="0.3" />
            <rect x="140" y="60" width="60" height="60" rx="8" fill="#6C63FF" fillOpacity="0.5" />
            <rect x="220" y="90" width="40" height="30" rx="8" fill="#6C63FF" fillOpacity="0.7" />
            <circle cx="80" cy="60" r="12" fill="#6C63FF" fillOpacity="0.7" />
            <circle cx="240" cy="70" r="10" fill="#6C63FF" fillOpacity="0.5" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
