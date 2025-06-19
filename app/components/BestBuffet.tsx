import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';

export default function BestBuffet() {
  return (
    <section className="py-12 px-6 md:px-12">
      <SectionTitle title="Our Best Buffet" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {['Weekend Special', 'Family Feast', 'Lunch Express', 'Dinner Deluxe'].map((item) => (
            <Card 
              key={item} 
              title={item} 
              rating={4} 
              reviews={98} 
            />
          ))}
        </div>
    </section>
  );
}