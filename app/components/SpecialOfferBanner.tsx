import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function SpecialOfferBanner() {
  return (
    <section className="py-8 px-6 md:px-12">
      <div className="bg-[#0A3A40] text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Indian Restaurant</h2>
          <p className="text-xl font-bold text-yellow-400 mb-4">15% OFF</p>
          <p className="mb-4">JUST FOR WEEKENDS</p>
          <Button>Order Now</Button>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div className="w-full max-w-xs h-40 relative rounded-lg overflow-hidden">
            <Image
              src="/images/special-offer.svg"
              alt="Special Offer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}