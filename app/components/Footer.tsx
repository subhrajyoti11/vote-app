import React from "react";

const Footer: React.FC = () => (
  <footer className="relative w-full bg-gradient-to-t from-[#6C63FF] to-[#5146d6] text-white pt-16 pb-8 mt-16 overflow-hidden">
    {/* Wavy SVG Top Border */}
    <div className="absolute top-0 left-0 w-full -translate-y-full pointer-events-none">
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
        <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" fill="#6C63FF" fillOpacity="0.8" />
      </svg>
    </div>
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-12 z-10 relative">
      {/* Left: Logo and Copyright */}
      <div className="flex flex-col items-start md:w-1/4 mb-6 md:mb-0">
        <span className="text-white font-extrabold text-3xl tracking-tight bg-white/20 px-4 py-2 rounded-full mb-4 shadow-lg">iVOTE</span>
        <span className="text-sm opacity-80 mb-4">© Copyright 2023</span>
        <div className="flex space-x-4 mt-2">
          {/* Social Icons */}
          <a href="#" aria-label="Twitter" className="hover:text-[#ffe082] transition-colors duration-200">
            {/* Twitter SVG */}
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#ffe082] transition-colors duration-200">
            {/* Facebook SVG */}
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#ffe082] transition-colors duration-200">
            {/* LinkedIn SVG */}
          </a>
        </div>
      </div>
      {/* Right: Links and Contact */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Product */}
        <div>
          <div className="font-bold mb-3 text-lg">Product</div>
          <ul>
            <li><a href="#" className="hover:underline hover:text-[#ffe082] transition-colors">Website</a></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <div className="font-bold mb-3 text-lg">Legal</div>
          <ul>
            <li><a href="#" className="hover:underline hover:text-[#ffe082] transition-colors">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffe082] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline hover:text-[#ffe082] transition-colors">FAQs</a></li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <div className="font-bold mb-3 text-lg">Contact Us</div>
          <ul className="text-sm opacity-90 space-y-1">
            <li>Address: Dagupan City, Pangasinan</li>
            <li>Email: voter@email.com</li>
            <li>Phone No.: +63 912 345 6789</li>
          </ul>
        </div>
      </div>
    </div>
    {/* Decorative Circles */}
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#fff]/10 rounded-full blur-2xl z-0" />
    <div className="absolute bottom-10 left-0 w-32 h-32 bg-[#fff]/10 rounded-full blur-2xl z-0" />
  </footer>
);

export default Footer;