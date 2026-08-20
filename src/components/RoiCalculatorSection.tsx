import React, { useState, useId } from 'react';

interface RoiCalculatorSectionProps {
  onOpenApplyWithEstimate: (model: string, estimatedRoi: string) => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenApplyWithEstimate }) => {
  const [shawarmaPrice, setShawarmaPrice] = useState<number>(90);
  const [dailyVolume, setDailyVolume] = useState<number>(300);

  const shawarmaPriceId = useId();
  const dailyVolumeId = useId();

  // Financial Model: 65% Operating Costs, 35% Net Margin
  const dailyGross = dailyVolume * shawarmaPrice;
  const monthlyGross = dailyGross * 30;
  const annualGross = dailyGross * 360;

  const monthlyNetProfit = monthlyGross * 0.35;
  const annualNetProfit = annualGross * 0.35;

  // Itemized Expense Calculations
  const rawFoodCost = monthlyGross * 0.30;
  const staffWagesCost = monthlyGross * 0.15;
  const shopRentCost = monthlyGross * 0.10;
  const fuelPackagingCost = monthlyGross * 0.05;
  const brandRoyaltyCost = monthlyGross * 0.05;

  const totalSetupCost = 1800000; // ₹18 Lakhs total turnkey setup
  const paybackMonths = Math.max(4, Math.min(24, Math.round((totalSetupCost / (annualNetProfit || 1)) * 12)));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const applyPreset = (price: number, volume: number) => {
    setShawarmaPrice(price);
    setDailyVolume(volume);
  };

  return (
    <section id="investment" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              UNIT ECONOMICS & SIMULATOR
            </span>
            <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              PROFIT & ROI CALCULATOR.
            </h2>
          </div>
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="text-[#ebdcd4] font-sans font-medium text-sm sm:text-base leading-relaxed">
              Adjust daily wrap sales and average menu price to calculate monthly gross sales, itemized expenses, and net profit.
            </p>
          </div>
        </div>

        {/* 2-Column Investor Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Inputs */}
          <div className="lg:col-span-5 bg-[#150d0a] border border-[var(--border-ember)] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="font-condensed font-extrabold text-xs text-[#ffb703] tracking-widest uppercase block mb-4">
                STEP 1: STORE PARAMETERS
              </span>

              {/* Presets */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  type="button"
                  onClick={() => applyPreset(80, 200)}
                  className={`px-3 py-1.5 text-xs font-condensed font-bold uppercase transition-colors border ${
                    dailyVolume === 200 && shawarmaPrice === 80
                      ? 'bg-[#ffb703] text-[#080402] border-[#ffb703]'
                      : 'bg-[#080402] text-[#ebdcd4] border-[var(--border-ember)] hover:border-zinc-500'
                  }`}
                >
                  Modest Street (200 @ ₹80)
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(90, 300)}
                  className={`px-3 py-1.5 text-xs font-condensed font-bold uppercase transition-colors border ${
                    dailyVolume === 300 && shawarmaPrice === 90
                      ? 'bg-[#ffb703] text-[#080402] border-[#ffb703]'
                      : 'bg-[#080402] text-[#ebdcd4] border-[var(--border-ember)] hover:border-zinc-500'
                  }`}
                >
                  High Street (300 @ ₹90)
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(120, 500)}
                  className={`px-3 py-1.5 text-xs font-condensed font-bold uppercase transition-colors border ${
                    dailyVolume === 500 && shawarmaPrice === 120
                      ? 'bg-[#ffb703] text-[#080402] border-[#ffb703]'
                      : 'bg-[#080402] text-[#ebdcd4] border-[var(--border-ember)] hover:border-zinc-500'
                  }`}
                >
                  Rush Hub (500 @ ₹120)
                </button>
              </div>

              {/* Slider 1: Average Price */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={shawarmaPriceId} className="font-condensed font-extrabold text-sm uppercase text-white">
                    AVERAGE PRICE PER WRAP:
                  </label>
                  <span className="font-poster text-3xl text-[#ffb703]">
                    ₹{shawarmaPrice}
                  </span>
                </div>
                <input
                  id={shawarmaPriceId}
                  type="range"
                  min="80"
                  max="180"
                  step="5"
                  value={shawarmaPrice}
                  onChange={(e) => setShawarmaPrice(Number(e.target.value))}
                  className="w-full accent-[#ffb703] cursor-pointer h-2 bg-[#080402]"
                />
              </div>

              {/* Slider 2: Daily Volume */}
              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <label htmlFor={dailyVolumeId} className="font-condensed font-extrabold text-sm uppercase text-white">
                    DAILY WRAPS SOLD:
                  </label>
                  <span className="font-poster text-3xl text-[#ffb703]">
                    {dailyVolume} <span className="text-xs font-condensed text-white">WRAPS/DAY</span>
                  </span>
                </div>
                <input
                  id={dailyVolumeId}
                  type="range"
                  min="100"
                  max="600"
                  step="10"
                  value={dailyVolume}
                  onChange={(e) => setDailyVolume(Number(e.target.value))}
                  className="w-full accent-[#ffb703] cursor-pointer h-2 bg-[#080402]"
                />
              </div>
            </div>

            {/* Daily Inflow Summary */}
            <div className="pt-4 border-t border-[var(--border-ember)] flex items-center justify-between text-xs sm:text-sm font-condensed font-extrabold tracking-wider text-[#ebdcd4]">
              <span>PROJECTED DAILY BILLING:</span>
              <span className="text-white text-base">{formatCurrency(dailyGross)} / day</span>
            </div>
          </div>

          {/* Right Column: Financial Results Dashboard */}
          <div className="lg:col-span-7 bg-[#150d0a] border border-[var(--border-ember)] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-condensed font-extrabold text-xs text-[#ffb703] tracking-widest uppercase">
                  STEP 2: NET PROFIT & EXPENSE AUDIT
                </span>
                <span className="font-condensed font-extrabold text-xs bg-[#ffb703] text-[#080402] px-2.5 py-0.5 uppercase">
                  ~35% NET MARGIN
                </span>
              </div>

              {/* Revenue & Net Profit Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Gross Sales Card */}
                <div className="p-5 bg-[#080402] border border-[var(--border-ember)] flex flex-col justify-between">
                  <div>
                    <span className="font-condensed font-extrabold text-xs text-[#ebdcd4] uppercase block mb-1">
                      MONTHLY GROSS SALES
                    </span>
                    <div className="font-poster text-3xl sm:text-4xl text-white leading-none my-1">
                      {formatCurrency(monthlyGross)}
                    </div>
                  </div>
                  <span className="font-sans text-xs text-[#ebdcd4]/70 block mt-2">
                    Total billing collected from customers
                  </span>
                </div>

                {/* Net Profit Highlight Card */}
                <div className="p-5 bg-[#080402] border-2 border-[#ffb703] flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-condensed font-extrabold text-xs text-[#ffb703] uppercase">
                        NET PROFIT (YOUR EARNINGS)
                      </span>
                      <span className="text-xs font-condensed font-bold text-[#ffb703]">~35%</span>
                    </div>
                    <div className="font-poster text-3xl sm:text-4xl text-[#ffb703] leading-none my-1">
                      {formatCurrency(monthlyNetProfit)}
                    </div>
                  </div>
                  <span className="font-sans text-xs text-[#ebdcd4] block mt-2 font-medium">
                    {formatCurrency(annualNetProfit)} / year estimated net
                  </span>
                </div>
              </div>

              {/* Itemized Expenses Breakdown List */}
              <div className="space-y-2.5 text-xs sm:text-sm font-sans mb-6">
                <div className="flex justify-between py-2 border-b border-[var(--border-ember)] text-[#ebdcd4]">
                  <span>Raw Chicken, Pita, Sauces & Spices (30%)</span>
                  <span className="text-[#ffb703] font-mono-stamp font-bold">-{formatCurrency(rawFoodCost)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-ember)] text-[#ebdcd4]">
                  <span>Store Crew & Grilling Staff Wages (15%)</span>
                  <span className="text-[#ffb703] font-mono-stamp font-bold">-{formatCurrency(staffWagesCost)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-ember)] text-[#ebdcd4]">
                  <span>Shop Commercial Rent & Power Bills (10%)</span>
                  <span className="text-[#ffb703] font-mono-stamp font-bold">-{formatCurrency(shopRentCost)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-ember)] text-[#ebdcd4]">
                  <span>Packaging, Foil, Bags & Charcoal Fuel (5%)</span>
                  <span className="text-[#ffb703] font-mono-stamp font-bold">-{formatCurrency(fuelPackagingCost)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-ember)] text-[#ebdcd4]">
                  <span>Brand Monthly Royalty (5% Support & Marketing)</span>
                  <span className="text-[#ffb703] font-mono-stamp font-bold">-{formatCurrency(brandRoyaltyCost)}</span>
                </div>
              </div>

              {/* Capital Payback Line */}
              <div className="p-4 bg-[#080402] border border-[var(--border-ember)] flex items-center justify-between mb-6">
                <div>
                  <span className="font-condensed font-extrabold text-xs text-white uppercase block">
                    ESTIMATED CAPITAL PAYBACK:
                  </span>
                  <span className="text-[11px] text-[#ebdcd4]/70 font-sans">
                    On typical ₹18L total initial investment
                  </span>
                </div>
                <span className="font-poster text-3xl text-[#ffb703]">
                  ~{paybackMonths} MONTHS
                </span>
              </div>
            </div>

            {/* Action Button & Clear Disclaimer */}
            <div>
              <button
                onClick={() => onOpenApplyWithEstimate('Irani Koyla Shawarma Standard Outlet', `${formatCurrency(monthlyNetProfit)}/mo Net Profit (~35%)`)}
                className="w-full bg-fire-gradient text-[#080402] py-3.5 text-xs sm:text-sm font-condensed font-extrabold tracking-widest uppercase transition-all shadow-lg hover:shadow-[#ffb703]/25 flex items-center justify-center space-x-2"
              >
                <span>APPLY WITH THIS FINANCIAL ESTIMATE</span>
                <span>→</span>
              </button>

              <p className="mt-3 text-[11px] text-[#ebdcd4]/70 font-sans text-center leading-relaxed">
                *Note: Prices & expenses may vary by city location and local poultry rates. This financial model provides approximate unit economic simulations based on a 35% average net operating margin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
