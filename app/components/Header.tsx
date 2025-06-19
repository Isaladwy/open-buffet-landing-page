'use client';
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-30 py-6 px-6 md:px-16 flex flex-row items-center justify-between border-2 border-[rgba(224,185,106,0.15)] bg-black transition-colors duration-300">
      {/* Logo */}
      <div className="flex flex-col leading-tight items-center">
        <span className="text-2xl font-bold text-white tracking-wide">
          بوفيه مفتوح
        </span>
        <span
          className="text-xs text-[var(--accent)] tracking-widest uppercase"
          style={{ letterSpacing: '0.1em', fontSize: '1em' }}
        >
          الذوق الرفيع
        </span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 ">
        <a
          href="#"
          className="text-white hover:text-[var(--accent)] transition-colors"
        >
          الرئيسية
        </a>
        <a
          href="#"
          className="text-white hover:text-[var(--accent)] transition-colors"
        >
          عن البوفيه
        </a>
        <a
          href="#"
          className="text-white hover:text-[var(--accent)] transition-colors"
        >
          قائمة البوفيه
        </a>
        <a
          href="#"
          className="text-white hover:text-[var(--accent)] transition-colors"
        >
          الحفلات والأعراس
        </a>
        <a
          href="#"
          className="text-white hover:text-[var(--accent)] transition-colors"
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
          className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 z-30 flex flex-col items-center justify-center md:hidden transition-all">
          <nav className="flex flex-col space-y-8 text-2xl">
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              الرئيسية
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              عن البوفيه
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              قائمة البوفيه
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              الحفلات والأعراس
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
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
