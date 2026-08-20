import React, { useEffect, useRef, useState } from 'react';
import { Store, TrendingUp, Clock, LucideIcon } from 'lucide-react';

interface MetricItemProps {
  endValue: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  detail: string;
  icon: LucideIcon;
  isInView: boolean;
  duration?: number;
}

const AnimatedMetricCounter: React.FC<MetricItemProps> = ({
  endValue,
  decimals = 0,
  prefix = '',
  suffix = '',
  label,
  sublabel,
  detail,
  icon: IconComponent,
  isInView,
  duration = 1800,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const value = easedProgress * endValue;
      setCurrentValue(value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCurrentValue(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, endValue, duration]);

  const formattedValue = decimals > 0 
    ? currentValue.toFixed(decimals) 
    : Math.floor(currentValue).toString();

  return (
    <div className="bg-[#150d0a] border border-[var(--border-ember)] hover:border-[var(--border-ember-hover)] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-condensed font-extrabold text-xs text-[#ffb703] tracking-widest uppercase">
            {sublabel}
          </span>
          <IconComponent className="w-5 h-5 text-[#ffb703] shrink-0" />
        </div>

        <div className="my-1">
          <div className="font-poster text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            {prefix}
            <span className="text-[#ffb703]">
              {formattedValue}
            </span>
            {suffix}
          </div>

          <h3 className="font-condensed font-extrabold text-lg sm:text-xl uppercase tracking-wide text-white mt-2">
            {label}
          </h3>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-[var(--border-ember)] text-xs sm:text-sm text-[#ebdcd4] leading-relaxed font-sans font-medium">
        {detail}
      </div>
    </div>
  );
};

export const KeyMetricsBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="key-metrics"
      ref={containerRef}
      className="w-full py-12 sm:py-16 bg-[#080402] border-b border-[var(--border-ember)]"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              PROVEN UNIT ECONOMICS
            </span>
            <h2 className="font-poster text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[0.95] tracking-tight">
              KEY FRANCHISE METRICS.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm md:text-base text-[#ebdcd4] font-sans font-medium leading-relaxed">
              Real operational benchmarks calculated across our live Koyla shawarma retail outlets with strong daily repeat volume.
            </p>
          </div>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <AnimatedMetricCounter
            endValue={15}
            decimals={0}
            suffix="+"
            label="Active Outlets"
            sublabel="RAPID EXPANSION"
            detail="High-density urban presence delivering fresh Irani charcoal smoked shawarmas daily."
            icon={Store}
            isInView={isInView}
            duration={1600}
          />

          <AnimatedMetricCounter
            endValue={28.4}
            decimals={1}
            suffix="%"
            label="Average EBITDA Margin"
            sublabel="OPERATIONAL MARGIN"
            detail="Robust store operating profitability backed by optimized raw materials & 5% low royalty."
            icon={TrendingUp}
            isInView={isInView}
            duration={1900}
          />

          <AnimatedMetricCounter
            endValue={14}
            decimals={0}
            suffix=" Mo"
            label="Average Payback Period"
            sublabel="CAPITAL RECOVERY"
            detail="Fast break-even velocity driven by compact 200–500 sq ft footprint and high counter turns."
            icon={Clock}
            isInView={isInView}
            duration={1700}
          />
        </div>

        {/* Minimal Specs Ribbon */}
        <div className="mt-6 p-4 bg-[#150d0a] border border-[var(--border-ember)] flex flex-wrap items-center justify-between gap-3 text-xs text-[#ebdcd4] font-condensed font-extrabold tracking-wider uppercase">
          <span>STANDARDIZED CENTRAL RECIPES & SPICES</span>
          <span className="text-[#ffb703] hidden md:inline">/</span>
          <span>100% HALAL CERTIFIED CHICKEN • NO BEEF</span>
          <span className="text-[#ffb703] hidden md:inline">/</span>
          <span>AUTHENTIC KOYLA CHARCOAL FLAVOR</span>
        </div>
      </div>
    </section>
  );
};
