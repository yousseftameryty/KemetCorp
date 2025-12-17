'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Footer() {
  const logoRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (logoRef.current) {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        logoRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <footer className="giant-footer">
      <div className="footer-grid"></div>
      <h1 ref={logoRef} className="interactive-logo" id="big-logo">
        KEMET.
      </h1>
      <div className="absolute bottom-10 w-full flex justify-between px-10 text-[10px] font-mono text-gray-600 uppercase z-20">
        <span>© 2025 KEMET CORP. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6">
          <Link href="/protocol" className="hover:text-white transition">
            Manifesto
          </Link>
          <Link href="#" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}


