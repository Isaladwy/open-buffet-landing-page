import React from 'react';
import SectionTitle from './SectionTitle';

export default function CustomerReviews() {
  return (
    <section className="py-12 px-6 md:px-12">
      <SectionTitle title="What Customers Say" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <h3 className="font-bold">Customer Name</h3>
                <div className="text-yellow-500">★★★★★</div>
              </div>
            </div>
            <p className="text-gray-600">&quot;The buffet selection was amazing! Fresh food and excellent service. Will definitely come back again.&quot;</p>
          </div>
        ))}
      </div>
    </section>
  );
}