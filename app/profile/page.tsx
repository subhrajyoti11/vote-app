import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  course: string;
  address: string;
}

const initialProfile: Profile = {
  firstName: "JUAN",
  lastName: "DELA CRUZ",
  email: "juan.delacruz@gmail.com",
  phone: "+63 945 6789",
  birthday: "January 1, 2000",
  course: "System Development",
  address: "PANGASINAN, MAYBONG, DAGUPAN CITY",
};

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(initialProfile);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
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
          <Link href="/settings" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Settings</Link>
          <Link href="/" className="mt-auto text-[#3B3397] hover:underline">Log out</Link>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10 flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <div className="w-32 h-32 rounded-full bg-[#edeaff] flex items-center justify-center mb-4">
            <svg width="64" height="64" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="24" r="16" fill="#6C63FF" fillOpacity="0.3" />
              <rect x="16" y="40" width="32" height="16" rx="8" fill="#6C63FF" fillOpacity="0.2" />
            </svg>
          </div>
          <button className="px-4 py-1 rounded-full bg-[#3B3397] text-white font-semibold text-sm mb-2">Upload</button>
        </div>
        <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold mb-1">First Name</label>
            <input name="firstName" value={profile.firstName} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B3397]" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Last Name</label>
            <input name="lastName" value={profile.lastName} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B3397]" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Email</label>
            <input name="email" value={profile.email} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B3397]" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Phone</label>
            <input name="phone" value={profile.phone} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B3397]" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Birthday</label>
            <input name="birthday" value={profile.birthday} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B3397]" />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Course</label>
            <input name="course" value={profile.course} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B3397]" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold mb-1">Address</label>
            <input name="address" value={profile.address} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3B3397]" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default ProfilePage; 