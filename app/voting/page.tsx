import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Candidate {
  name: string;
  img: string;
  title?: string;
}

interface Position {
  title: string;
  candidates: Candidate[];
}

const defaultPositions: Position[] = [
  {
    title: "President Student Council",
    candidates: [
      { name: "Felisa Monteverde", img: "https://randomuser.me/api/portraits/women/1.jpg" },
      { name: "Emma Ainsley Zamora", img: "https://randomuser.me/api/portraits/women/2.jpg" },
      { name: "Lorenzo Agustin", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    ],
  },
  {
    title: "Vice President Student Council",
    candidates: [
      { name: "Kasey Rachel Flores", img: "https://randomuser.me/api/portraits/women/3.jpg" },
      { name: "Carolina Labasan", img: "https://randomuser.me/api/portraits/women/4.jpg" },
      { name: "Meagan Canubig", img: "https://randomuser.me/api/portraits/women/5.jpg" },
    ],
  },
  {
    title: "Secretary Student Council",
    candidates: [
      { name: "Elie Oyulangan", img: "https://randomuser.me/api/portraits/men/2.jpg" },
      { name: "Claudio Lucio Tejada", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    ],
  },
];

type Votes = {
  [position: string]: string;
};

const VotingPage: React.FC = () => {
  const [votes, setVotes] = useState<Votes>({});
  const [positions, setPositions] = useState<Position[]>(defaultPositions);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = JSON.parse(localStorage.getItem('candidates') || '[]');
      const merged = defaultPositions.map(pos => ({
        ...pos,
        candidates: [
          ...pos.candidates,
          ...stored.filter((c: Candidate) => c.title === pos.title)
        ]
      }));
      setPositions(merged);
    }
  }, []);

  const handleVote = (position: string, candidate: string) => {
    setVotes({ ...votes, [position]: candidate });
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
          <Link href="/voting" className="bg-[#3B3397] text-white rounded-lg px-4 py-2">Vote</Link>
          <Link href="/voters-guideline" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Voters Guideline</Link>
          <Link href="/settings" className="hover:bg-[#edeaff] rounded-lg px-4 py-2">Settings</Link>
          <Link href="/" className="mt-auto text-[#3B3397] hover:underline">Log out</Link>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-[#23235B] mb-6">YOU MAY NOW CAST YOUR VOTES!</h1>
        <form>
          {positions.map((pos) => (
            <div key={pos.title} className="mb-8">
              <h2 className="font-bold text-lg text-[#23235B] mb-4">{pos.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pos.candidates.map((cand) => (
                  <div key={cand.name} className={`flex flex-col items-center bg-white rounded-xl shadow p-6 ${votes[pos.title] === cand.name ? 'ring-2 ring-[#3B3397]' : ''}`}>
                    <img src={cand.img} alt={cand.name} className="w-20 h-20 rounded-full mb-3 object-cover" />
                    <span className="font-semibold mb-2">{cand.name}</span>
                    <button type="button" onClick={() => handleVote(pos.title, cand.name)} className={`px-4 py-1 rounded-full font-semibold text-sm mt-2 ${votes[pos.title] === cand.name ? 'bg-[#3B3397] text-white' : 'bg-[#edeaff] text-[#3B3397]'} transition`}>
                      Vote
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <button type="submit" className="px-8 py-2 rounded-full bg-[#3B3397] text-white font-semibold shadow hover:bg-[#edeaff] hover:text-[#3B3397] transition">SUBMIT VOTE</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default VotingPage; 