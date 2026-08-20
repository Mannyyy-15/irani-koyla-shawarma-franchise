import React from 'react';
import { COMPLETE_SUPPORT_ITEMS } from '../data/franchiseData';
import { 
  RiMapPin2Fill, 
  RiStore3Fill, 
  RiUserStarFill, 
  RiMegaphoneFill, 
  RiFileTextFill, 
  RiRestaurant2Fill, 
  RiTerminalBoxFill, 
  RiCustomerService2Fill 
} from 'react-icons/ri';

const DELIVERABLE_ICONS = [
  RiMapPin2Fill,
  RiStore3Fill,
  RiUserStarFill,
  RiMegaphoneFill,
  RiFileTextFill,
  RiRestaurant2Fill,
  RiTerminalBoxFill,
  RiCustomerService2Fill,
];

interface FranchiseModelsSectionProps {
  onSelectModel?: (modelName: string) => void;
}

export const FranchiseModelsSection: React.FC<FranchiseModelsSectionProps> = () => {
  return (
    <section id="support" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              COMPLETE TURNKEY DELIVERABLES
            </span>
            <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              WHAT WE PROVIDE.
            </h2>
          </div>
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="text-[#ebdcd4] font-sans font-medium text-sm sm:text-base leading-relaxed">
              Everything required to open and operate your store is included in the single ₹8,00,000 franchise fee.
            </p>
          </div>
        </div>

        {/* Deliverables 8-Card Grid with Rich Glowing Gold Badge Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {COMPLETE_SUPPORT_ITEMS.map((item, idx) => {
            const IconComponent = DELIVERABLE_ICONS[idx] || RiStore3Fill;
            return (
              <div
                key={idx}
                className="group bg-[#150d0a] border border-[var(--border-ember)] hover:border-[var(--border-ember-hover)] rounded-2xl p-5 sm:p-6 transition-all duration-300 flex items-center space-x-4 sm:space-x-5 shadow-lg hover:shadow-[#ffb703]/10"
              >
                {/* Glowing Gold Ember Badge Container */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#2a160d] via-[#1a0f0a] to-[#0c0604] border border-[#ffb703]/30 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-[#ffb703] filter drop-shadow-[0_2px_8px_rgba(255,183,3,0.3)]" />
                </div>

                <div>
                  <h3 className="font-condensed font-extrabold text-base sm:text-lg text-white uppercase tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#ebdcd4] font-sans font-medium text-xs sm:text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
