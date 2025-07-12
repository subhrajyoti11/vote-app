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
  
    </main>
  );
}


