import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-bold mb-4">Open Buffet</h3>
          <p className="text-sm text-gray-300 mb-4">The best buffet experience in town with a wide variety of cuisines.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-purple-300">FB</a>
            <a href="#" className="text-white hover:text-purple-300">IG</a>
            <a href="#" className="text-white hover:text-purple-300">TW</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">Opening Hours</h3>
          <p className="text-sm text-gray-300">Monday - Friday: 11am - 10pm</p>
          <p className="text-sm text-gray-300">Saturday - Sunday: 10am - 11pm</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">123 Food Street, Cuisine City</p>
          <p className="text-sm text-gray-300">info@openbuffet.com</p>
          <p className="text-sm text-gray-300">+1 234 567 890</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Download App</h3>
          <div className="flex space-x-2">
            <button className="bg-white text-purple-900 text-xs px-2 py-1 rounded">App Store</button>
            <button className="bg-white text-purple-900 text-xs px-2 py-1 rounded">Google Play</button>
          </div>
        </div>
      </div>
      <div className="border-t border-purple-800 pt-6 text-center text-sm text-gray-400">
        <p>© 2025 Open Buffet. All rights reserved.</p>
      </div>
    </footer>
  );
}