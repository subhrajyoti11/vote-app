
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => (
  <section className="w-full bg-white pb-16">
    {/* Step Bar */}
    <div className="w-full bg-[#3B3397] text-white py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        {/* Step 1 */}
        <div className="flex-1 bg-white/20 rounded-t-lg md:rounded-lg p-6 md:mr-2 mb-4 md:mb-0">
          <div className="text-xs font-semibold mb-1">Step 1</div>
          <div className="text-lg font-bold mb-1">SIGN UP</div>
          <div className="text-sm mb-3">Create an account on this system to vote</div>
          <Link href="/register">
            <button className="px-4 py-2 rounded-full bg-white text-[#3B3397] font-semibold shadow hover:bg-[#edeaff] transition text-sm border border-[#3B3397]">Register as a Voter</button>
          </Link>
          <Link href="/login">
            <button className="ml-2 px-4 py-2 rounded-full bg-[#3B3397] text-white font-semibold shadow hover:bg-[#edeaff] hover:text-[#3B3397] transition text-sm border border-[#3B3397]">Login</button>
          </Link>
        </div>
        {/* Step 2 */}
        <div className="flex-1 p-6">
          <div className="text-xs font-semibold mb-1">Step 2</div>
          <div className="text-lg font-bold mb-1">VOTE</div>
          <div className="text-sm">Vote for your preferred candidate</div>
        </div>
        {/* Step 3 */}
        <div className="flex-1 p-6">
          <div className="text-xs font-semibold mb-1">Step 3</div>
          <div className="text-lg font-bold mb-1">VIEW ELECTION RESULTS</div>
          <div className="text-sm">View election results of various candidate</div>
        </div>
      </div>
    </div>

    {/* Modern, Safe, Efficient Statement */}
    <div className="w-full bg-[#F5F6FA] py-8 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-2xl md:text-2xl font-extrabold text-[#23235B] mb-2">
          Make your decision-making process more modern, safe, and efficient.
        </div>
        <div className="text-gray-600 text-base">
          Upgrade from manual ballot counting to an online election system without jeopardizing the integrity of your vote.
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="w-full bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-2xl font-extrabold text-[#23235B] text-center mb-2">Our Features</div>
        <div className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          We provide an online voting system that exceed expectations, from secure polling software to the management of complex virtual voting events.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center flex-1">
            {/* Lock Icon */}
            <div className="bg-[#6C63FF]/20 rounded-full p-6 mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="#6C63FF" strokeWidth="3" fill="#6C63FF" fillOpacity="0.1" />
                <rect x="16" y="22" width="16" height="12" rx="4" stroke="#6C63FF" strokeWidth="2" fill="#fff" />
                <rect x="20" y="18" width="8" height="8" rx="4" stroke="#6C63FF" strokeWidth="2" fill="#fff" />
              </svg>
            </div>
            <div className="font-bold text-lg text-[#23235B] mb-1">Secured Platform</div>
            <div className="text-gray-600 text-sm">With our system, your data is secured</div>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center flex-1">
            {/* Vote Icon */}
            <div className="bg-[#6C63FF]/20 rounded-full p-6 mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="28" height="36" rx="8" stroke="#6C63FF" strokeWidth="3" fill="#fff" />
                <rect x="18" y="18" width="12" height="8" rx="2" fill="#6C63FF" fillOpacity="0.3" />
                <rect x="18" y="30" width="12" height="4" rx="2" fill="#6C63FF" fillOpacity="0.3" />
                <rect x="22" y="12" width="4" height="8" rx="2" fill="#6C63FF" fillOpacity="0.7" />
              </svg>
            </div>
            <div className="font-bold text-lg text-[#23235B] mb-1">Vote Online</div>
            <div className="text-gray-600 text-sm">In just few clicks, you can vote your preferred candidates</div>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center flex-1">
            {/* Results Icon */}
            <div className="bg-[#6C63FF]/20 rounded-full p-6 mb-4">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="30" width="6" height="10" rx="2" fill="#6C63FF" fillOpacity="0.7" />
                <rect x="21" y="22" width="6" height="18" rx="2" fill="#6C63FF" fillOpacity="0.5" />
                <rect x="32" y="14" width="6" height="26" rx="2" fill="#6C63FF" fillOpacity="0.3" />
                <circle cx="13" cy="28" r="3" fill="#6C63FF" fillOpacity="0.7" />
                <circle cx="24" cy="20" r="3" fill="#6C63FF" fillOpacity="0.5" />
                <circle cx="35" cy="12" r="3" fill="#6C63FF" fillOpacity="0.3" />
              </svg>
            </div>
            <div className="font-bold text-lg text-[#23235B] mb-1">Real Time Results</div>
            <div className="text-gray-600 text-sm">View real time voting results and scores of each candidates</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
