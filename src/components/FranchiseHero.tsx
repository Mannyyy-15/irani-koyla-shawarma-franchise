import React, { useLayoutEffect, useRef, useState } from 'react';
import { FRANCHISE_TICKER, CORE_INVESTMENT_METRICS } from '../data/franchiseData';
import { IndianRupee, Percent, FileCheck, Store } from 'lucide-react';

const BASE_FONT_SIZE = 100; // px, arbitrary reference size used purely for measuring natural widths
const FALLBACK_SCALE = 1.6; // used until real measurement resolves, and if it ever fails

function useFitTitleFontSize() {
  const rowRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    const row = rowRef.current;
    const measure = measureRef.current;
    if (!row || !measure) return;

    const recompute = () => {
      try {
        const containerWidth = row.clientWidth;
        const naturalTotal = measure.scrollWidth;
        if (containerWidth <= 0 || naturalTotal <= 0) return;

        const scale = containerWidth / naturalTotal;
        const next = BASE_FONT_SIZE * scale;
        if (Number.isFinite(next) && next > 0) {
          setFontSize(next);
        }
      } catch {
        // Leave fallback size
      }
    };

    recompute();
    void document.fonts.ready.then(recompute);
    const ro = new ResizeObserver(recompute);
    ro.observe(row);
    return () => ro.disconnect();
  }, []);

  return { rowRef, measureRef, fontSize };
}

const METRIC_ICONS = [
  IndianRupee,
  Percent,
  FileCheck,
  Store,
];

interface FranchiseHeroProps {
  onOpenApply?: () => void;
  onOpenFdd?: () => void;
}

export const FranchiseHero: React.FC<FranchiseHeroProps> = () => {
  const { rowRef, measureRef, fontSize } = useFitTitleFontSize();
  const resolvedFontSize = fontSize ?? BASE_FONT_SIZE * FALLBACK_SCALE;

  return (
    <section className="w-full pt-14 md:pt-6 pb-0 bg-[#080402] border-b border-[var(--border-ember)] overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Top Subtitle Badge */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-condensed font-extrabold text-[#ffb703] uppercase tracking-widest mb-2">
          <span>REAL KOYLA SMOKE</span>
          <span className="text-[#ff5500]">🔥</span>
          <span>100% HALAL & NO BEEF</span>
        </div>

        {/* Mobile View Title: Anton Font with Comfortable Vertical Spacing & Fiery Animation (<768px) */}
        <div className="block md:hidden pb-3 pt-1 w-full overflow-hidden @container">
          <div className="flex flex-col space-y-1.5 w-full max-w-full m-0 p-0">
            
            {/* Row 1 & 2: IRANI KOYLA (covering 70% width) + Skewer Image (covering 30% width) */}
            <div className="flex items-center justify-between w-full max-w-full overflow-hidden m-0 p-0">
              {/* 70% Width Column for IRANI KOYLA */}
              <div className="w-[70%] shrink-0 flex flex-col justify-center m-0 p-0 leading-[0.92]">
                <h1 
                  className="font-poster text-white uppercase tracking-tighter leading-[0.92] m-0 p-0 block whitespace-nowrap"
                  style={{ fontSize: '35cqw' }}
                >
                  IRANI
                </h1>
                <h1 
                  className="font-poster text-white uppercase tracking-tighter leading-[0.92] m-0 p-0 block whitespace-nowrap mt-1"
                  style={{ fontSize: '35cqw' }}
                >
                  KOYLA
                </h1>
              </div>

              {/* 30% Width Column for Flaming Skewer Image */}
              <div className="w-[30%] shrink-0 flex items-center justify-center m-0 p-0">
                <img
                  src="/shawarma-skewer.png"
                  alt="Irani Koyla Shawarma Skewer"
                  className="w-full h-auto max-h-[220px] object-contain block m-0 p-0"
                />
              </div>
            </div>

            {/* Row 3: SHAWARMA (covering 100% container width with animated fiery flame text) */}
            <div className="w-full max-w-full overflow-hidden m-0 p-0 pt-1">
              <h2 
                className="font-poster fire-heat-text uppercase tracking-tighter leading-[0.92] w-full text-center block whitespace-nowrap m-0 p-0"
                style={{ fontSize: '25cqw' }}
              >
                SHAWARMA
              </h2>
            </div>

          </div>
        </div>

        {/* Desktop View Title: Single Row Auto-Fit (≥768px) */}
        <div ref={rowRef} className="hidden md:block w-full overflow-hidden pb-4 border-b border-[var(--border-ember)]">
          {/* Hidden reference row at BASE_FONT_SIZE, used purely to measure natural (unscaled) width */}
          <div
            ref={measureRef}
            aria-hidden="true"
            className="absolute opacity-0 pointer-events-none flex items-center justify-between whitespace-nowrap"
            style={{ top: '-9999px', left: '-9999px', gap: `${BASE_FONT_SIZE * 0.02}px` }}
          >
            <h1 className="font-poster tracking-tight uppercase leading-none" style={{ fontSize: `${BASE_FONT_SIZE}px` }}>
              IRANI KOYLA
            </h1>
            <img src="/shawarma-skewer.png" alt="" className="block w-auto object-contain" style={{ height: `${BASE_FONT_SIZE * 1.0}px` }} />
            <h2 className="font-poster tracking-tight uppercase leading-none" style={{ fontSize: `${BASE_FONT_SIZE}px` }}>
              SHAWARMA
            </h2>
          </div>

          <div className="flex items-center justify-between w-full flex-nowrap" style={{ gap: `${resolvedFontSize * 0.02}px` }}>
            <h1
              className="font-poster shrink-0 tracking-tight text-white uppercase leading-none whitespace-nowrap"
              style={{ fontSize: `${resolvedFontSize}px` }}
            >
              IRANI KOYLA
            </h1>

            {/* Shawarma Skewer Image matching exact text height */}
            <img
              src="/shawarma-skewer.png"
              alt="Irani Koyla Shawarma Skewer"
              className="block w-auto object-contain shrink-0"
              style={{ height: `${resolvedFontSize * 1.0}px` }}
            />

            <h2
              className="font-poster shrink-0 tracking-tight fire-heat-text uppercase leading-none whitespace-nowrap"
              style={{ fontSize: `${resolvedFontSize}px` }}
            >
              SHAWARMA
            </h2>
          </div>
        </div>

        {/* Hero Visual Box */}
        <div className="mt-3 sm:mt-6 relative overflow-hidden bg-[#150d0a] border border-[var(--border-ember)] rounded-2xl sm:rounded-3xl shadow-2xl">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] xl:aspect-[2.2/1] min-h-[240px] sm:min-h-[440px] lg:min-h-[520px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
              alt="Irani Koyla Shawarma live counter"
              className="w-full h-full object-cover object-center filter contrast-110 brightness-95"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080402]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 4 Core Metrics Grid */}
        <div className="my-4 sm:my-6 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {CORE_INVESTMENT_METRICS.map((metric, idx) => {
            const IconComponent = METRIC_ICONS[idx] || IndianRupee;
            return (
              <div 
                key={idx}
                className="bg-[#150d0a] border border-[var(--border-ember)] hover:border-[var(--border-ember-hover)] transition-colors p-3.5 sm:p-4 md:p-5 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-poster text-2xl sm:text-3xl lg:text-4xl text-[#ffb703] leading-none">
                      {metric.value}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#ffb703] shrink-0" />
                  </div>
                  <div className="font-condensed font-extrabold text-xs sm:text-sm md:text-base uppercase tracking-wide text-[#ffffff] mt-1">
                    {metric.label}
                  </div>
                </div>
                <div className="text-xs font-sans text-[#ebdcd4] mt-1.5 leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee Ticker at Bottom */}
      <div className="w-full bg-[#080402] border-t border-[var(--border-ember)] py-2.5 overflow-hidden select-none">
        <div className="animate-ticker flex whitespace-nowrap">
          {[...FRANCHISE_TICKER, ...FRANCHISE_TICKER, ...FRANCHISE_TICKER].map((item, idx) => (
            <div key={idx} className="flex items-center mx-3 sm:mx-4">
              <span className="font-condensed font-extrabold text-xs sm:text-sm tracking-widest text-[#ffffff] uppercase">
                {item}
              </span>
              <span className="ml-3 sm:ml-4 text-[#ffb703] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
