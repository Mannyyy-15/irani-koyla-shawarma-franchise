import React from 'react';
import { ONBOARDING_STEPS } from '../data/franchiseData';
import { 
  RiFileEditFill, 
  RiCompassDiscoverFill, 
  RiToolsFill, 
  RiGroupFill, 
  RiRocket2Fill 
} from 'react-icons/ri';

const ROADMAP_ICONS = [
  RiFileEditFill,
  RiCompassDiscoverFill,
  RiToolsFill,
  RiGroupFill,
  RiRocket2Fill,
];

interface RoadmapSectionProps {
  onOpenApply: () => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="roadmap" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              STORE LAUNCH ROADMAP
            </span>
            <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              FROM DEAL TO OPENING.
            </h2>
          </div>
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="text-[#ebdcd4] font-sans font-medium text-sm sm:text-base leading-relaxed">
              We guide you step-by-step from site finalization and kitchen equipment setup to crew training and launch day marketing.
            </p>
          </div>
        </div>

        {/* Connected 5-Stage Process Grid with Rich Glowing Gold Badge Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {ONBOARDING_STEPS.map((step, idx) => {
            const IconComponent = ROADMAP_ICONS[idx] || RiRocket2Fill;
            return (
              <div
                key={idx}
                className="group bg-[#150d0a] border border-[var(--border-ember)] hover:border-[var(--border-ember-hover)] rounded-2xl p-5 sm:p-6 transition-all duration-300 flex items-center space-x-4 shadow-lg hover:shadow-[#ffb703]/10"
              >
                {/* Glowing Gold Ember Badge Container */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-[#2a160d] via-[#1a0f0a] to-[#0c0604] border border-[#ffb703]/30 shadow-inner flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#ffb703] filter drop-shadow-[0_2px_8px_rgba(255,183,3,0.3)]" />
                </div>

                <div>
                  <div className="font-condensed font-extrabold text-[11px] text-[#ffb703] uppercase tracking-wider mb-0.5">
                    STAGE {step.step} • {step.duration}
                  </div>
                  <h3 className="font-condensed font-extrabold text-base sm:text-lg text-white uppercase tracking-wide mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#ebdcd4] font-sans font-medium text-xs leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-6 bg-[#150d0a] border border-[var(--border-ember)] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-condensed font-extrabold text-base sm:text-lg text-white uppercase tracking-wider block">
              READY TO LAUNCH YOUR IRANI KOYLA STORE?
            </span>
            <span className="font-condensed font-bold text-xs text-[#ffb703] block mt-0.5 uppercase tracking-wider">
              FAST 50-DAY TURNKEY STORE OPENING TIMELINE
            </span>
          </div>
          <button
            onClick={onOpenApply}
            className="bg-fire-gradient text-[#080402] px-6 py-3 text-xs sm:text-sm font-condensed font-extrabold tracking-widest uppercase transition-all whitespace-nowrap shadow-lg hover:shadow-[#ffb703]/25"
          >
            START YOUR APPLICATION
          </button>
        </div>
      </div>
    </section>
  );
};
