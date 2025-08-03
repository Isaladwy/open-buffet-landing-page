'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Header() {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 w-full z-30  px-6 md:px-16 flex flex-row items-center justify-start border-2 border-[rgba(224,185,106,0.15)] transition-colors duration-300 ${
        scrolled ? 'bg-[rgba(247,247,254,0.9)]' : ''
      }`}
    >
      {/* Logo */}
      <div
        className="flex flex-col leading-tight justify-center items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Image
          width={100}
          height={100}
          src="/khan-logo2.png"
          alt="Open Buffet Logo"
          className="w-64 md:w-86 h-auto"
        />
      </div>
      {/* Desktop Nav */}
      {/* <nav className="hidden md:flex space-x-8 ">
        <a
          href="#menu"
          className="text-black hover:text-[var(--accent)] transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
        >
          قائمة البوفيه
        </a>
        <a
          href="#reviews"
          className="text-black hover:text-[var(--accent)] transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
        >
          آراء العملاء
        </a>
        <a
          href="#booking"
          className="text-black hover:text-[var(--accent)] transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
        >
          احجز طاولتك
        </a>
      </nav> */}
      {/* Hamburger Icon for Mobile */}
      {/* <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-4 z-40"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button> */}
      {/* Mobile Menu Overlay */}
      {/* {menuOpen && (
        <div className="fixed inset-0 bg-[rgba(255,255,255,0.9)] z-30 flex flex-col items-center justify-center md:hidden transition-all">
          <nav className="flex flex-col space-y-8 text-2xl">
            <a
              href="#menu"
              className="text-black font-bold hover:text-[var(--accent)] transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
              onClick={() => setMenuOpen(false)}
            >
              قائمة البوفيه
            </a>
            <a
              href="#reviews"
              className="text-black font-bold hover:text-[var(--accent)] transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
              onClick={() => setMenuOpen(false)}
            >
              آراء العملاء
            </a>
            <a
              href="#booking"
              className="text-black font-bold hover:text-[var(--accent)] transition-colors [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]"
              onClick={() => setMenuOpen(false)}
            >
              احجز طاولتك
            </a>
          </nav>
        </div>
      )} */}
    </header>
  );
}
