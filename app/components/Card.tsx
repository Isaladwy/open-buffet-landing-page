import React from 'react';
import Button from './Button';

interface CardProps {
  title: string;
  image?: React.ReactNode;
  rating?: number;
  reviews?: number;
  showOrderButton?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ 
  title, 
  image, 
  rating = 4, 
  reviews = 0,
  showOrderButton = true,
  children,
  className = ''
}: CardProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md ${className}`}>
      <div className="h-40 bg-gray-200 relative">
        {image}
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2">{title}</h3>
        {children}
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
          {showOrderButton && <Button variant="small">Order</Button>}
        </div>
      </div>
    </div>
  );
}