import React from 'react';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-center text-2xl font-bold mb-8 relative">
      <span className="inline-block relative">
        — {title} —
      </span>
    </h2>
  );
}