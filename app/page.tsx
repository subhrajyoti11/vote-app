import Image from "next/image";
import Link from "next/link";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F5F6FA] p-4">
  <Header/>
  <Hero/>
  <Footer/>
  <div className="mt-8">
    <Link href="/admin">
      <button className="px-6 py-2 rounded-full bg-[#3B3397] text-white font-semibold shadow hover:bg-[#edeaff] hover:text-[#3B3397] transition">Go to Admin Dashboard</button>
    </Link>
  </div>
  
    </main>
  );
}


