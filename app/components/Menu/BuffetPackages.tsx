import React from 'react';

interface BuffetPackage {
  title: string;
  description: string;
  price: string | number;
  perPerson: string;
  includes: string[];
  minGuests: string | number;
}

interface BuffetPackagesProps {
  buffetPackages: BuffetPackage[];
}

const BuffetPackages: React.FC<BuffetPackagesProps> = ({ buffetPackages }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
    {buffetPackages.map((package_, index) => (
      <div
        key={index}
        className="bg-[#233a45] rounded-2xl p-8 border border-[var(--accent)] hover:border-[var(--accent)]/60 transition-all duration-300"
      >
        <h3 className="text-2xl font-bold text-[var(--accent)] mb-2 text-center [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
          {package_.title}
        </h3>
        <p className="text-white/90 font-bold text-center mb-4 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
          {package_.description}
        </p>
        <div className="text-center mb-6">
          <span className="text-3xl font-bold text-white [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">
            {package_.price}
          </span>
          <p className="text-sm mt-2 text-[var(--accent)] font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
            {package_.perPerson}
          </p>
        </div>
        <ul className="space-y-3 mb-6">
          {package_.includes.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-start">
              <span className="text-[var(--accent)] mr-2 mt-1 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">✓</span>
              <span className="text-white/80 text-sm font-bold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-l text-[var(--accent)] text-center font-[var(--font-cairo)] [text-shadow:_1px_1px_2px_rgb(0_0_0_/_25%)]">
          {package_.minGuests}
        </p>
      </div>
    ))}
  </div>
);

export default BuffetPackages;
