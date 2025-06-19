import React from 'react';
// import Image from 'next/image';
import SectionTitle from './SectionTitle';
import Card from './Card';

export default function SpecialBuffet() {
  return (
    <section className="py-12 px-6 md:px-12">
      <SectionTitle title="Special Buffet Offer" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Indian Buffet', 'Chinese Cuisine', 'Italian Feast', 'Mexican Fiesta'].map((item) => (
            <Card 
              key={item} 
              title={item} 
              rating={4} 
              reviews={120}
              image="/images/buffet1.svg"
            />
          ))}
        </div>
    </section>
  );
}