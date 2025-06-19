import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function PartyBuffetBanner() {
  return (
    <section className="py-8 px-6 md:px-12 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Party Buffet</h2>
          <p className="mb-6">Perfect for celebrations and gatherings</p>
          <Button>Book Now</Button>
        </div>
        <div className="md:w-1/2">
          <div className="w-full h-40 relative rounded-lg overflow-hidden">
            <Image
              src="/images/party-buffet.svg"
              alt="Party Buffet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}