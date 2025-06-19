import React from 'react';

export default function Header() {
  return (
    <header className="bg-transparent py-6 px-6 md:px-16 flex items-center justify-between border-b border-[rgba(224,185,106,0.15)]">
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
