'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-30 py-2 px-6 md:px-16 flex flex-row items-center justify-between bg-white/70 backdrop-blur-sm shadow-sm">
      {/* Logo */}
      <div
        className="cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Image
          src="/images/logo.png"
          alt="Khan Alrayhan Buffet Logo"
          width={60}
          height={60}
        />
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 ">
        <a
          href="#about"
          className="text-[var(--theme-dark-teal)] hover:text-[var(--theme-orange)] transition-colors font-medium"
        >
          عن البوفيه
        </a>
        <a
          href="#menu"
          className="text-[var(--theme-dark-teal)] hover:text-[var(--theme-orange)] transition-colors font-medium"
        >
          قائمة البوفيه
        </a>
        <a
          href="#reviews"
          className="text-[var(--theme-dark-teal)] hover:text-[var(--theme-orange)] transition-colors font-medium"
        >
          آراء العملاء
        </a>
        <a
          href="#booking"
          className="text-[var(--theme-dark-teal)] hover:text-[var(--theme-orange)] transition-colors font-medium"
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
          className={`block w-6 h-0.5 bg-[var(--theme-dark-teal)] mb-1 transition-all duration-300 ${
            menuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[var(--theme-dark-teal)] mb-1 transition-all duration-300 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[var(--theme-dark-teal)] transition-all duration-300 ${
            menuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[var(--theme-dark-teal)]/95 z-30 flex flex-col items-center justify-center md:hidden transition-all">
          <nav className="flex flex-col space-y-8 text-2xl">
            <a
              href="#about"
              className="text-white hover:text-[var(--theme-orange)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              عن البوفيه
            </a>
            <a
              href="#menu"
              className="text-white hover:text-[var(--theme-orange)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              قائمة البوفيه
            </a>
            <a
              href="#reviews"
              className="text-white hover:text-[var(--theme-orange)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              آراء العملاء
            </a>
            <a
              href="#booking"
              className="text-white hover:text-[var(--theme-orange)] transition-colors"
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
