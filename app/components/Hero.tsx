
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => (
  <section className="w-full relative overflow-hidden pb-16">
    {/* Animated SVG Background */}
    <svg className="absolute top-0 left-0 w-full h-[420px] z-0" viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="url(#paint0_linear)" fillOpacity=".5" d="M0,160 C360,320 1080,0 1440,160 L1440,420 L0,420 Z" />
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="420" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C63FF" />
          <stop offset="1" stopColor="#edeaff" />
        </linearGradient>
      </defs>
    </svg>

    {/* Hero Banner */}
    <div className="relative z-10 max-w-5xl mx-auto px-4 pt-20 pb-12 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#23235B] mb-4 drop-shadow-lg">
        Empower Your Vote.<br />Shape the Future.
      </h1>
      <p className="text-lg md:text-xl text-[#3B3397] mb-8 max-w-2xl mx-auto">
        Secure, modern, and transparent online elections for everyone. Join, vote, and see results in real time.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/register">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#3B3397] text-white font-bold shadow-lg hover:from-[#3B3397] hover:to-[#6C63FF] transition text-lg">Get Started</button>
        </Link>
        <Link href="/voter">
          <button className="px-8 py-3 rounded-full bg-white text-[#3B3397] font-bold shadow hover:bg-[#edeaff] border border-[#3B3397] transition text-lg">Stand for Election</button>
        </Link>
      </div>
    </div>

    {/* Step Bar - visually engaging */}
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-[-40px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 border border-[#edeaff]">
        {/* Step 1 */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-[#edeaff] p-3 rounded-full mb-2 shadow">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#6C63FF" fillOpacity="0.2"/><path d="M10 20v-2a4 4 0 018 0v2" stroke="#3B3397" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="12" r="4" stroke="#3B3397" strokeWidth="2"/></svg>
          </div>
          <div className="font-bold text-[#23235B] text-base mb-1">Sign Up</div>
          <div className="text-xs text-gray-500 mb-2">Create your account to vote</div>
        </div>
        {/* Progress Line */}
        <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#6C63FF] to-[#edeaff] mx-2 rounded-full" />
        {/* Step 2 */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-[#edeaff] p-3 rounded-full mb-2 shadow">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="6" y="10" width="20" height="12" rx="4" fill="#6C63FF" fillOpacity="0.2"/><path d="M16 14v4" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="12" r="2" fill="#3B3397"/></svg>
          </div>
          <div className="font-bold text-[#23235B] text-base mb-1">Vote</div>
          <div className="text-xs text-gray-500 mb-2">Choose your preferred candidate</div>
        </div>
        {/* Progress Line */}
        <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-[#edeaff] to-[#6C63FF] mx-2 rounded-full" />
        {/* Step 3 */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-[#edeaff] p-3 rounded-full mb-2 shadow">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="16" width="16" height="8" rx="4" fill="#6C63FF" fillOpacity="0.2"/><path d="M16 12v8" stroke="#3B3397" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="10" r="2" fill="#3B3397"/></svg>
          </div>
          <div className="font-bold text-[#23235B] text-base mb-1">View Results</div>
          <div className="text-xs text-gray-500 mb-2">See real-time election results</div>
        </div>
      </div>
    </div>

    {/* Features Section - glassmorphism cards */}
    <div className="w-full py-16 bg-gradient-to-b from-[#f5f6fa] to-[#edeaff]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-3xl font-extrabold text-[#23235B] text-center mb-4">Why Choose iVOTE?</div>
        <div className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience the next generation of online elections—secure, transparent, and easy for everyone.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center flex-1 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-[#edeaff]">
            <div className="bg-[#6C63FF]/20 rounded-full p-5 mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke="#6C63FF" strokeWidth="3" fill="#6C63FF" fillOpacity="0.1" /><rect x="12" y="18" width="16" height="10" rx="4" stroke="#6C63FF" strokeWidth="2" fill="#fff" /><rect x="16" y="14" width="8" height="8" rx="4" stroke="#6C63FF" strokeWidth="2" fill="#fff" /></svg>
            </div>
            <div className="font-bold text-lg text-[#23235B] mb-1">Secured Platform</div>
            <div className="text-gray-600 text-sm">Your data and vote are always protected with industry-leading security.</div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center flex-1 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-[#edeaff]">
            <div className="bg-[#6C63FF]/20 rounded-full p-5 mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="8" stroke="#6C63FF" strokeWidth="3" fill="#fff" /><rect x="14" y="14" width="12" height="8" rx="2" fill="#6C63FF" fillOpacity="0.3" /><rect x="14" y="26" width="12" height="4" rx="2" fill="#6C63FF" fillOpacity="0.3" /><rect x="18" y="10" width="4" height="8" rx="2" fill="#6C63FF" fillOpacity="0.7" /></svg>
            </div>
            <div className="font-bold text-lg text-[#23235B] mb-1">Vote Online</div>
            <div className="text-gray-600 text-sm">Vote for your preferred candidates from anywhere, anytime.</div>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center flex-1 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-[#edeaff]">
            <div className="bg-[#6C63FF]/20 rounded-full p-5 mb-4">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="24" width="6" height="10" rx="2" fill="#6C63FF" fillOpacity="0.7" /><rect x="17" y="16" width="6" height="18" rx="2" fill="#6C63FF" fillOpacity="0.5" /><rect x="26" y="8" width="6" height="26" rx="2" fill="#6C63FF" fillOpacity="0.3" /><circle cx="11" cy="22" r="3" fill="#6C63FF" fillOpacity="0.7" /><circle cx="20" cy="14" r="3" fill="#6C63FF" fillOpacity="0.5" /><circle cx="29" cy="6" r="3" fill="#6C63FF" fillOpacity="0.3" /></svg>
            </div>
            <div className="font-bold text-lg text-[#23235B] mb-1">Real Time Results</div>
            <div className="text-gray-600 text-sm">See live election results as soon as votes are cast.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
