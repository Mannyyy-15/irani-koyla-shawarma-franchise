import React from 'react';
import { WHY_INVEST_POINTS } from '../data/franchiseData';
import { IndianRupee, Zap, Users, TrendingUp, Flame, Megaphone } from 'lucide-react';

const ADVANTAGE_ICONS = [
  IndianRupee,
  Zap,
  Users,
  TrendingUp,
  Flame,
  Megaphone,
];

interface InvestmentThesisSectionProps {
  onOpenApply: () => void;
}

export const InvestmentThesisSection: React.FC<InvestmentThesisSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="why-invest" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
            WHY CHOOSE US
          </span>
          <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-4">
            THE KOYLA ADVANTAGE.
          </h2>
          <p className="text-[#ebdcd4] font-sans font-medium text-sm sm:text-base leading-relaxed">
            A proven food franchise model built on authentic charcoal-smoked shawarma, high daily repeat orders, low 5% royalties, and 30% to 35% net profit margins.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Left Column: Clean Framed Outlet Image */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] bg-[#150d0a] border border-[var(--border-ember)] rounded-2xl p-3 flex flex-col justify-between shadow-xl">
              <div className="relative w-full h-full min-h-[300px] overflow-hidden bg-black rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1000&q=85"
                  alt="Authentic live koyla shawarma rotisserie"
                  className="w-full h-full object-cover filter contrast-105 brightness-95"
                />
                
                {/* Minimal Top Badge */}
                <div className="absolute top-3 left-3 bg-[#080402]/90 backdrop-blur-sm border border-[var(--border-ember)] text-[#ffb703] px-3 py-1 text-[11px] font-condensed font-extrabold tracking-widest uppercase rounded">
                  LIFETIME AGREEMENT
                </div>

                {/* Minimal Bottom Price Badge */}
                <div className="absolute bottom-3 right-3 bg-[#080402]/90 backdrop-blur-sm border border-[var(--border-ember)] text-white px-3 py-1 text-[11px] font-condensed font-extrabold tracking-widest uppercase rounded">
                  STARTS AT ₹80
                </div>
              </div>

              {/* Bottom Specs Bar */}
              <div className="mt-3 pt-2.5 border-t border-[var(--border-ember)] flex items-center justify-between text-xs font-condensed font-extrabold text-[#ebdcd4] tracking-wider uppercase">
                <span>100% HALAL</span>
                <span className="text-[#ffb703]">/</span>
                <span>NO BEEF</span>
                <span className="text-[#ffb703]">/</span>
                <span>REAL KOYLA SMOKE</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards with Large Gold Icons */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_INVEST_POINTS.map((point, idx) => {
                const IconComponent = ADVANTAGE_ICONS[idx] || Flame;
                return (
                  <div
                    key={idx}
                    className="bg-[#150d0a] border border-[var(--border-ember)] hover:border-[var(--border-ember-hover)] rounded-xl p-5 transition-colors flex items-center space-x-4"
                  >
                    <div className="shrink-0">
                      <IconComponent className="w-10 h-10 text-[#ffb703] stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="font-condensed font-extrabold text-base sm:text-lg text-white uppercase tracking-wide mb-1">
                        {point.title}
                      </h3>
                      <p className="text-[#ebdcd4] font-sans font-medium text-xs sm:text-sm leading-snug">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Minimal Footer CTA Strip */}
            <div className="p-4 bg-[#150d0a] border border-[var(--border-ember)] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-condensed font-extrabold text-sm sm:text-base text-white uppercase tracking-wider block">
                  ₹8,00,000 ONE-TIME FRANCHISE FEE
                </span>
                <span className="font-condensed font-bold text-xs text-[#ffb703] block mt-0.5 tracking-wider uppercase">
                  LOW 5% MONTHLY ROYALTY // NO YEARLY RENEWAL
                </span>
              </div>
              <button
                onClick={onOpenApply}
                className="bg-fire-gradient text-[#080402] px-6 py-3 text-xs sm:text-sm font-condensed font-extrabold tracking-widest uppercase transition-all whitespace-nowrap min-h-[42px] shadow-lg hover:shadow-[#ffb703]/25"
              >
                APPLY FOR FRANCHISE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
