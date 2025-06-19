import React from 'react';
import SectionTitle from './SectionTitle';

export default function BookTable() {
  return (
    <section className="py-12 px-6 md:px-12">
      <SectionTitle title="How To Book Table" />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">1</div>
              <h3 className="font-medium mb-1">Choose Restaurant</h3>
              <p className="text-sm text-gray-500">Select from our curated list</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">2</div>
              <h3 className="font-medium mb-1">Select Date</h3>
              <p className="text-sm text-gray-500">Pick your preferred time</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">3</div>
              <h3 className="font-medium mb-1">Choose Menu</h3>
              <p className="text-sm text-gray-500">Pre-order your favorites</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">4</div>
              <h3 className="font-medium mb-1">Confirmation</h3>
              <p className="text-sm text-gray-500">Get booking confirmation</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg relative">
            {/* This would be the isometric illustration shown in the template */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Booking Illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}