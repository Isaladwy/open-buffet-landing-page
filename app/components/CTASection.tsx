import React from 'react';
import Button from './Button';

export default function CTASection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-purple-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Get 15% OFF</h2>
        <p className="mb-6">Subscribe to our newsletter and receive special offers</p>
        <div className="flex flex-col md:flex-row gap-2 justify-center">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  );
}