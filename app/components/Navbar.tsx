import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-b from-[#6C63FF] to-[#6C63FF]/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-extrabold text-2xl tracking-tight bg-white/20 px-3 py-1 rounded-full mr-2">iVOTE</span>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white font-semibold hover:underline underline-offset-8 decoration-2 decoration-white">Home</Link>
            
          </div>
          {/* Right Side: Search, Log in, Register */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="text-white hover:bg-white/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
            <Link href="/login">
              <button className="px-6 py-2 rounded-full border border-white text-white font-semibold bg-transparent hover:bg-white hover:text-[#6C63FF] transition">Log in</button>
            </Link>
            <Link href="/register">
              <button className="px-6 py-2 rounded-full bg-white text-[#6C63FF] font-semibold shadow hover:bg-[#edeaff] transition">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 