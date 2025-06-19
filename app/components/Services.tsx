import React from 'react';

export default function Services() {
  return (
    <section className="bg-purple-700 py-8 px-6 md:px-12 flex justify-between items-center text-white">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-2">
          <span className="text-xl">🍽️</span>
        </div>
        <p className="text-sm">Quality Food</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-2">
          <span className="text-xl">🚚</span>
        </div>
        <p className="text-sm">Fast Delivery</p>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 mx-auto bg-purple-600 rounded-full flex items-center justify-center mb-2">
          <span className="text-xl">💰</span>
        </div>
        <p className="text-sm">Best Prices</p>
      </div>
    </section>
  );
}