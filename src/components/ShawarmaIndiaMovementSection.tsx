import React from 'react';

export const ShawarmaIndiaMovementSection: React.FC = () => {
  return (
    <section id="india-movement" className="w-full bg-[#080402] border-b border-[var(--border-ember)] overflow-hidden">
      <div className="w-full">
        {/* Mobile View: 9:16 Aspect Ratio Banner (Hidden on md and larger) */}
        <div className="block md:hidden w-full aspect-[9/16] relative overflow-hidden bg-[#080402]">
          <img
            src="/assets/movement-banner-mobile.png"
            alt="Irani Koyla Shawarma National Movement Mobile Banner"
            className="w-full h-full object-cover filter contrast-105"
          />
        </div>

        {/* Desktop & Tablet View: 16:9 Aspect Ratio Banner (Hidden on small screens) */}
        <div className="hidden md:block w-full aspect-[16/9] max-h-[85vh] relative overflow-hidden bg-[#080402]">
          <img
            src="/assets/movement-banner-desktop.png"
            alt="Irani Koyla Shawarma National Movement Desktop Banner"
            className="w-full h-full object-cover filter contrast-105"
          />
        </div>
      </div>
    </section>
  );
};
