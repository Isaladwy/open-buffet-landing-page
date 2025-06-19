import React from 'react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

export default function PopularRestaurants() {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <SectionTitle title="Popular Restaurants Near" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Spice Garden', 'Dragon House', 'Pasta Paradise', 'Taco Town'].map((item) => (
          <div key={item} className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="h-40 relative">
              <Image
                src="/images/restaurant1.svg"
                alt={item}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                <span className="text-red-500">♥</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-1">{item}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Italian • 1.2 mi</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★☆</span>
                  <span className="text-sm text-gray-500 ml-1">(86)</span>
                </div>
                <span className="text-sm font-medium">$$$</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}