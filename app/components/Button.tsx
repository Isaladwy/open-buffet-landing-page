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
  className = '',
}: ButtonProps) {
  const baseClasses = 'rounded-md text-black drop-shadow-md';

  const variantClasses = {
    primary: 'bg-[var(--logo-green)] px-6 py-2',
    secondary: 'bg-[var(--logo-green)] px-4 py-2',
    small: 'bg-[var(--logo-green)] text-xs px-3 py-1',
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
