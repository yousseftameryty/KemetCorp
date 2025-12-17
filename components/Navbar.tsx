'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
      <div className="flex items-center gap-3">
        <div className="core-dot"></div>
        <h1 className="text-xl font-black tracking-tighter">KEMET.</h1>
      </div>
      <div className="hidden md:flex gap-8 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
        <Link
          href="/protocol"
          className="hover:text-white hover:underline decoration-green-500 underline-offset-4 transition"
        >
          Protocol
        </Link>
        <a
          href="#stats"
          className="hover:text-white hover:underline decoration-green-500 underline-offset-4 transition"
        >
          Live_Data
        </a>
        <span className="text-green-500" id="header-version">
          V.1.0.0 (STABLE)
        </span>
      </div>
    </nav>
  );
}


