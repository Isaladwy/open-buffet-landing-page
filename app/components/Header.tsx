'use client';
import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    // Check scroll position on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-30 py-6 px-6 md:px-16 flex items-center justify-between border-b border-[rgba(224,185,106,0.15)] backdrop-blur-md transition-colors duration-300
        ${scrolled ? 'bg-black/90' : 'bg-transparent'}`}
    >
      <div className="flex items-center">
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-white tracking-wide">
            Wilma
          </span>
          <span
            className="text-xs text-[var(--accent)] tracking-widest uppercase"
            style={{ letterSpacing: '0.2em' }}
          >
            Restaurant
          </span>
        </div>
        <nav className="hidden md:flex ml-16 space-x-8">
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            Our Menus
          </a>
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            Reservations
          </a>
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
