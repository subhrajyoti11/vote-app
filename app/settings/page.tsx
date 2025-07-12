import React from "react";
import Link from "next/link";

const accountOptions = [
  { label: "Edit Profile", href: "/profile" },
  { label: "Change Password", href: "#" },
  { label: "Language", href: "#" },
  { label: "Notification", href: "#" },
];

const links = [
  { label: "About Us", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Contact Us", href: "#" },
];

const SettingsPage = () => (
  <div className="min-h-screen flex bg-[#F5F6FA]">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-lg flex flex-col py-8 px-4">
      <div className="flex items-center mb-10">
        <span className="text-[#3B3397] font-extrabold text-2xl tracking-tight bg-[#edeaff] px-3 py-1 rounded-full mr-2">iVOTE</span>
      </div>
      <nav className="flex flex-col gap-4 text-[#23235B] font-semibold">
        <Link href="/admin" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Dashboard</Link>
        <Link href="/voting" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Vote</Link>
        <Link href="/voters-guideline" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Voters Guideline</Link>
        <Link href="/settings" className="bg-[#3B3397] text-white rounded-lg px-4 py-2">Settings</Link>
        <Link href="/" className="mt-auto text-[#3B3397] hover:underline">Log out</Link>
      </nav>
    </aside>
    {/* Main Content */}
    <main className="flex-1 p-10 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-[#23235B] mb-6">SETTINGS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="font-semibold text-[#3B3397] mb-2">Account</div>
            <ul className="space-y-3">
              {accountOptions.map(opt => (
                <li key={opt.label}>
                  <Link href={opt.href} className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold hover:bg-[#3B3397] hover:text-white transition">
                    {opt.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#3B3397] mb-2">Links</div>
            <ul className="space-y-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="block px-4 py-2 rounded-lg bg-[#edeaff] text-[#3B3397] font-semibold hover:bg-[#3B3397] hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default SettingsPage; 