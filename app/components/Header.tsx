'use client';
import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-30 py-6 px-6 md:px-16 flex flex-col items-center justify-center border-2 border-[rgba(224,185,106,0.15)] bg-black transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4">
        <div className="flex flex-col leading-tight items-center">
          <span className="text-2xl font-bold text-white tracking-wide">
            ويلما
          </span>
          <span
            className="text-xs text-[var(--accent)] tracking-widest uppercase"
            style={{ letterSpacing: '0.2em' }}
          >
            مطعم
          </span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex ml-0 md:ml-16 space-x-8 space-x-reverse">
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
            من نحن
          </a>
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            قوائم الطعام
          </a>
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            الحجوزات
          </a>
          <a
            href="#"
            className="text-white hover:text-[var(--accent)] transition-colors"
          >
            تواصل معنا
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
      </div>
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
              من نحن
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              قوائم الطعام
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              الحجوزات
            </a>
            <a
              href="#"
              className="text-white hover:text-[var(--accent)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              تواصل معنا
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
