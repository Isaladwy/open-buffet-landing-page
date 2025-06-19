import React from 'react';

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  distance: string;
  rating: number;
  reviews: number;
  priceLevel: string;
  className?: string;
}

export default function RestaurantCard({ 
  name, 
  cuisine, 
  distance, 
  rating = 4, 
  reviews = 0,
  priceLevel = '$$$',
  className = ''
}: RestaurantCardProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md bg-white ${className}`}>
      <div className="h-40 bg-gray-200 relative">
        <div className="absolute top-2 right-2 bg-white rounded-full p-1">
          <span className="text-red-500">♥</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1">{name}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span>{cuisine} • {distance}</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-yellow-500">
              {Array(5).fill(0).map((_, i) => (
                <span key={i}>{i < rating ? '★' : '☆'}</span>
              ))}
            </span>
            {reviews > 0 && (
              <span className="text-sm text-gray-500 ml-1">({reviews})</span>
            )}
          </div>
          <span className="text-sm font-medium">{priceLevel}</span>
        </div>
      </div>
    </div>
  );
}