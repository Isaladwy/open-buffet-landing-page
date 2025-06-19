import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'small';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = 'rounded-md text-white';
  
  const variantClasses = {
    primary: 'bg-purple-600 px-6 py-2',
    secondary: 'bg-purple-700 px-4 py-2',
    small: 'bg-purple-600 text-xs px-3 py-1'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}