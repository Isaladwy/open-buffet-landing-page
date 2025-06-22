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
  const baseClasses = 'rounded-md text-white';

  const variantClasses = {
    primary: 'bg-[var(--logo-dark-blue)] px-6 py-2 hover:text-black',
    secondary: 'bg-[var(--logo-dark-blue)] px-4 py-2 hover:text-black',
    small: 'bg-[var(--logo-dark-blue)] text-xs px-3 py-1 hover:text-black',
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
