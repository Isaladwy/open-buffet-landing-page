import React from 'react';
import Button from './Button';

export default function Header() {
  return (
    <header className="bg-[#FFF0FB] py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">OB</div>
        <nav className="hidden md:flex ml-12 space-x-6">
          <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">Menu</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
        </nav>
      </div>
      <div>
        <Button variant="secondary" className="text-sm">Sign In</Button>
      </div>
    </header>
  );
}