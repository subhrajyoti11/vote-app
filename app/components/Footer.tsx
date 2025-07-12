import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-16 bg-gradient-to-b from-[#f5f6fa] to-[#edeaff] mt-16 overflow-hidden font-sans">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-12 z-10 relative">
      {/* Left: Logo and Copyright */}
      <div className="flex flex-col items-start md:w-1/4 mb-6 md:mb-0">
        <span className="text-[#3B3397] font-extrabold text-3xl tracking-tight bg-white px-4 py-2 rounded-full mb-4 shadow-lg">iVOTE</span>
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
  </footer>
);

export default Footer;