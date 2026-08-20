import React from 'react';

export const FranchiseMediaBento: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Block - Refined Left Column */}
          <div className="lg:col-span-4 bg-[#150d0a] p-6 sm:p-8 border border-[var(--border-ember)] flex flex-col justify-between">
            <div>
              <span className="font-condensed font-extrabold text-xs text-[#ffb703] tracking-widest uppercase block mb-3">
                QUICK & EASY KITCHEN
              </span>
              <h2 className="font-poster text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-[0.95] tracking-tight mb-4">
                HIGH SALES. FAST SERVICE. LOW WASTAGE.
              </h2>
              <p className="text-[#ebdcd4] font-sans font-medium text-xs sm:text-sm leading-relaxed">
                Our streamlined kitchen layout allows two crew members to assemble 150+ fresh charcoal-smoked shawarmas per hour during peak rushes with zero waste and instant order turnaround.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border-ember)] flex flex-wrap items-center justify-between gap-2 text-xs font-condensed font-extrabold text-[#ffb703] tracking-wider uppercase">
              <span>NO CHEF NEEDED</span>
              <span>/</span>
              <span>2 CREW MINIMUM</span>
              <span>/</span>
              <span>5% ROYALTY</span>
            </div>
          </div>

          {/* Right Grid Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1: Late Night Rush */}
            <div className="sm:col-span-1 lg:col-span-2 relative aspect-[16/10] bg-[#150d0a] border border-[var(--border-ember)] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Late night customer crowd"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-3 right-3 bg-[#080402]/90 backdrop-blur-sm border border-[var(--border-ember)] text-[#ffb703] px-3 py-1 text-[11px] font-condensed font-extrabold tracking-widest uppercase">
                EVENING & LATE NIGHT SALES
              </div>
              
              <div className="absolute bottom-3 left-3 text-white font-condensed font-extrabold text-sm tracking-wider uppercase">
                HIGH DAILY FOOTFALL
              </div>
            </div>

            {/* Card 2: Signature Spice Supply */}
            <div className="sm:col-span-1 lg:col-span-1 bg-[#150d0a] border border-[var(--border-ember)] flex flex-col justify-between overflow-hidden">
              <div className="p-3.5 bg-[#080402] border-b border-[var(--border-ember)]">
                <h3 className="font-condensed font-extrabold text-base text-white uppercase tracking-wide text-center">
                  CENTRAL SPICE SUPPLY
                </h3>
              </div>
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=80"
                  alt="Spice supply"
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute bottom-2 left-2 bg-[#080402]/90 text-[#ffb703] border border-[var(--border-ember)] text-[10px] font-condensed font-extrabold px-2 py-0.5 uppercase tracking-wider">
                  DIRECT TO STORE
                </div>
              </div>
            </div>

            {/* Card 3: Live Koyla Rotisserie */}
            <div className="relative aspect-square bg-[#150d0a] border border-[var(--border-ember)] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80"
                alt="Live charcoal rotisserie"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#080402]/90 backdrop-blur-sm p-2 text-center border border-[var(--border-ember)]">
                <span className="text-xs font-condensed font-extrabold tracking-wider uppercase text-[#ffb703]">
                  REAL CHARCOAL SMOKER
                </span>
              </div>
            </div>

            {/* Card 4: Speed of Service - Fire Gradient Card */}
            <div className="bg-fire-gradient p-6 text-white flex flex-col items-center justify-center text-center shadow-lg border border-[var(--border-ember)]">
              <span className="font-condensed font-extrabold text-xs text-white/90 tracking-widest uppercase block mb-2">
                EXPRESS TURNAROUND
              </span>
              <h3 className="font-poster text-3xl uppercase leading-none tracking-tight text-white mb-2">
                FAST SERVICE
              </h3>
              <p className="text-xs font-condensed font-extrabold tracking-wider uppercase text-white/90">
                READY IN UNDER 90 SECONDS
              </p>
            </div>

            {/* Card 5: High Repeat Customers - Yellow/Gold Card */}
            <div className="bg-[#ffb703] p-5 text-[#080402] flex flex-col justify-between border border-[#ffc300] shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-condensed font-extrabold tracking-wider uppercase bg-[#080402] text-[#ffb703] px-2 py-0.5">
                  REPEAT CUSTOMERS
                </span>
                <span className="text-[10px] font-condensed font-extrabold text-[#080402] uppercase">
                  80%+ RETURN RATE
                </span>
              </div>

              <div className="my-2">
                <div className="font-poster text-2xl text-[#080402] uppercase tracking-tight leading-none mb-1">
                  HIGH REPEAT CROWD
                </div>
                <p className="text-xs font-sans text-[#140c08] font-semibold">
                  Authentic charcoal smoke creates strong customer loyalty.
                </p>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#080402]/20 mt-2">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80"
                  alt="Dining customers"
                  className="w-full h-full object-cover filter contrast-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
