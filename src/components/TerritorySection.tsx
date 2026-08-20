import React from 'react';
import { IDEAL_LOCATIONS } from '../data/franchiseData';
import { 
  RiBuilding2Fill, 
  RiGraduationCapFill, 
  RiRestaurantFill, 
  RiSubwayFill, 
  RiHomeHeartFill 
} from 'react-icons/ri';

const LOCATION_ICONS = [
  RiBuilding2Fill,
  RiGraduationCapFill,
  RiRestaurantFill,
  RiSubwayFill,
  RiHomeHeartFill,
];

interface TerritorySectionProps {
  onSelectTerritory: (city: string) => void;
}

export const TerritorySection: React.FC<TerritorySectionProps> = ({ onSelectTerritory }) => {
  return (
    <section id="locations" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              PRIME FOOTFALL SITE SELECTION
            </span>
            <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              IDEAL LOCATIONS.
            </h2>
          </div>
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="text-[#ebdcd4] font-sans font-medium text-sm sm:text-base leading-relaxed">
              Irani Koyla Shawarma thrives in vibrant, high-density commercial hubs with continuous lunch footfall and late-night demand.
            </p>
          </div>
        </div>

        {/* Site Tier Grid with Rich Glowing Gold Badge Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {IDEAL_LOCATIONS.map((loc, idx) => {
            const IconComponent = LOCATION_ICONS[idx] || RiBuilding2Fill;
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
                    {loc.title}
                  </h3>
                  <p className="text-[#ebdcd4] font-sans font-medium text-xs sm:text-sm leading-snug">
                    {loc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Available Expansion Cities Strip */}
        <div className="p-6 bg-[#150d0a] border border-[var(--border-ember)] rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h4 className="font-condensed font-extrabold text-lg sm:text-xl text-white uppercase tracking-wider mb-1">
              ACCEPTING APPLICATIONS ACROSS ALL MAJOR CITIES & METROS
            </h4>
            <p className="text-[#ebdcd4] font-sans font-medium text-xs sm:text-sm">
              Territory allocations are reviewed on a first-evaluated basis per city.
            </p>
          </div>
          <button
            onClick={() => onSelectTerritory('All India / Metro')}
            className="bg-fire-gradient text-[#080402] px-6 py-3 text-xs sm:text-sm font-condensed font-extrabold tracking-widest uppercase transition-all whitespace-nowrap shadow-lg hover:shadow-[#ffb703]/25"
          >
            ENQUIRE FOR YOUR CITY
          </button>
        </div>
      </div>
    </section>
  );
};
