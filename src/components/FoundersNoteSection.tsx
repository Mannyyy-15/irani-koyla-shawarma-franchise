import React from 'react';
import { Quote } from 'lucide-react';

interface FoundersNoteSectionProps {
  onOpenApply: () => void;
}

export const FoundersNoteSection: React.FC<FoundersNoteSectionProps> = ({ onOpenApply }) => {
  return (
    <section id="founders-note" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Full Width Balanced Editorial Card */}
        <div className="bg-[#150d0a] border border-[var(--border-ember)] p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl">
          
          {/* Giant Decorative Faint Background Quote Glyph */}
          <span aria-hidden="true" className="absolute -top-10 -right-6 font-poster text-[16rem] text-[#ffb703]/5 select-none pointer-events-none">
            “
          </span>

          <div className="relative z-10 max-w-4xl">
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              AUTHENTIC CULINARY HERITAGE
            </span>
            <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-6">
              FOUNDER&apos;S NOTE.
            </h2>

            {/* Inspiring Founder Statement */}
            <blockquote className="border-l-4 border-[#ffb703] pl-5 sm:pl-8 py-2 my-6">
              <p className="font-sans text-base sm:text-xl md:text-2xl text-white leading-relaxed font-normal italic">
                &ldquo;Most commercial shawarma brands took the easy shortcut—electric rods, bland sauces, and frozen factory patties. We chose the hard, uncompromising path: real red-hot hardwood koyla (charcoal), slow-smoked marinade rubs, and daily fresh-baked pita. When customers smell that wood-smoke aroma, repeat loyalty is instant.&rdquo;
              </p>
            </blockquote>

            {/* Founder Signature & Credentials Block */}
            <div className="mt-8 pt-6 border-t border-[var(--border-ember)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#080402] border border-[var(--border-ember)] flex items-center justify-center shrink-0">
                  <Quote className="w-6 h-6 text-[#ffb703]" />
                </div>
                <div>
                  <span className="font-condensed font-extrabold text-base sm:text-lg text-white uppercase tracking-wider block">
                    FOUNDER & CHIEF EXECUTIVE
                  </span>
                  <span className="font-condensed font-bold text-xs text-[#ffb703] uppercase tracking-widest block">
                    IRANI KOYLA SHAWARMA INDIA
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenApply}
                className="bg-fire-gradient text-[#080402] px-7 py-3.5 text-xs sm:text-sm font-condensed font-extrabold tracking-widest uppercase transition-all whitespace-nowrap shadow-lg hover:shadow-[#ffb703]/25 flex items-center justify-center space-x-2"
              >
                <span>BECOME A FRANCHISE PARTNER</span>
                <span>→</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
