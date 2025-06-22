'use client';
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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
      className={`sticky top-0 left-0 w-full z-30 py-6 px-6 md:px-16 flex flex-row items-center justify-between border-2 border-[rgba(224,185,106,0.15)] transition-colors duration-300 ${
        scrolled ? 'bg-[rgba(247,247,254,0.7)]' : 'bg-[var(--logo-beige)]'
      }`}
    >
      {/* Logo */}
      <div
        className="flex flex-col leading-tight items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="text-2xl font-bold text-black tracking-wide">
          بوفيه
        </span>
        <span
          className="text-xs text-[var(--accent)] tracking-widest uppercase"
          style={{ letterSpacing: '0.1em', fontSize: '1em' }}
        >
          خان الريحان
        </span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 ">
        <a
          href="#about"
          className="text-black hover:text-[var(--accent)] transition-colors"
        >
          عن البوفيه
        </a>
        <a
          href="#menu"
          className="text-black hover:text-[var(--accent)] transition-colors"
        >
          قائمة البوفيه
        </a>
        <a
          href="#reviews"
          className="text-black hover:text-[var(--accent)] transition-colors"
        >
          آراء العملاء
        </a>
        <a
          href="#booking"
          className="text-black hover:text-[var(--accent)] transition-colors"
        >
          احجز طاولتك
        </a>
      </nav>
      {/* Hamburger Icon for Mobile */}
      <button
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
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[rgba(255,255,255,0.9)] z-30 flex flex-col items-center justify-center md:hidden transition-all">
          <nav className="flex flex-col space-y-8 text-2xl">
            <a
              href="#about"
              className="text-black hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              عن البوفيه
            </a>
            <a
              href="#menu"
              className="text-black hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              قائمة البوفيه
            </a>
            <a
              href="#reviews"
              className="text-black hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              آراء العملاء
            </a>
            <a
              href="#booking"
              className="text-black hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              احجز طاولتك
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
