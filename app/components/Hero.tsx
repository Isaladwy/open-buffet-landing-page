import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="bg-[#FFF0FB] py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Order Healthy and Fresh Food Any Time</h1>
        <p className="text-gray-600 mb-6">Discover delicious meals from top restaurants in your area</p>
        <div className="flex space-x-4">
          <Button>Order Now</Button>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400"></div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold">2000+</span> Happy Customers
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div key={item} className="rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="h-20 bg-gray-200"></div>
          </div>
        ))}
      </div>
    </section>
  );
}