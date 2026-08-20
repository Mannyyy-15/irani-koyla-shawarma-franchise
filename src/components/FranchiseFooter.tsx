import React from 'react';
import { ArrowUp, Mail, Phone, FileText, Globe, Flame } from 'lucide-react';
import { CONTACT_DETAILS } from '../data/franchiseData';
import AsciiFire from './originkit/ui/ascii-flame';

interface FranchiseFooterProps {
  onOpenApply: () => void;
  onOpenFdd: () => void;
}

export const FranchiseFooter: React.FC<FranchiseFooterProps> = ({ onOpenApply, onOpenFdd }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full min-h-[420px] bg-[#080402] pt-12 sm:pt-16 pb-12 text-white border-t border-[var(--border-ember)] overflow-hidden">
      {/* High-visibility Ambient ASCII Fire Backdrop positioned at footer bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-95">
        <AsciiFire
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          charset="blocks"
          palette="custom"
          shades={['#411205', '#7C2105', '#B93608', '#E85B0C', '#FF8B18', '#FFC247', '#FFF1AA']}
          intensity={85}
          decay={4}
          thickness={4}
          pulse={false}
          windDirection="right"
          windForce={10}
          sparks={true}
          sparkColor="#FF3030"
          backgroundColor="transparent"
        />
        {/* Subtle top blend gradient only */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#080402] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* CTA Banner: Own the Taste. Build the Legacy. (100% Responsive & Centered on Mobile) */}
        <div className="py-8 sm:py-12 border-b border-[var(--border-ember)]/80 flex flex-col lg:flex-row lg:items-end justify-between items-center text-center lg:text-left gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-mono-stamp text-[#ffb703] uppercase tracking-[0.22em] font-bold mb-2.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              <Flame className="w-3.5 h-3.5 fill-[#ff5500] text-[#ff5500]" />
              <span>LIMITED FRANCHISES AVAILABLE</span>
            </div>
            <h2 className="font-condensed font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.98] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              OWN THE TASTE.<br className="hidden sm:inline" /> <span className="text-[#ffb703]">BUILD THE LEGACY.</span>
            </h2>
          </div>

          {/* CTA Action Buttons (Full width stacked on mobile, row on desktop) */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto bg-fire-gradient text-[#080402] px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-condensed font-extrabold tracking-widest uppercase transition-all whitespace-nowrap min-h-[44px] shadow-lg hover:shadow-[#ffb703]/25 rounded-lg"
            >
              GET FRANCHISE DETAILS
            </button>
            <button
              onClick={onOpenFdd}
              className="w-full sm:w-auto bg-[#150d0a]/90 backdrop-blur-sm hover:bg-[#28150d] text-[#ffb703] hover:text-white px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-condensed font-extrabold tracking-widest uppercase transition-colors whitespace-nowrap min-h-[44px] border border-[var(--border-ember)] flex items-center justify-center space-x-2 shadow-md rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#ffb703]" />
              <span>DOWNLOAD DECK</span>
            </button>
          </div>
        </div>

        {/* Links & Information Grid: Perfectly Center Aligned on Mobile (<768px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-[var(--border-ember)]/80 text-xs drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] text-center sm:text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-script text-3xl text-white font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                Irani Koyla
              </span>
              <span className="font-condensed font-extrabold text-[10px] bg-fire-gradient text-[#080402] px-2 py-0.5 tracking-wider uppercase shadow">
                FRANCHISE
              </span>
            </div>
            <p className="text-[#ebdcd4] leading-relaxed font-medium text-xs sm:text-[13px]">
              Irani Koyla Shawarma Franchise Network. Smoked with love, served with legacy. Authentic charcoal shawarma starting at ₹80 with low 5% ongoing royalty.
            </p>
          </div>

          {/* Contact Details (Centered icons & text on mobile) */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="font-condensed font-extrabold text-sm uppercase tracking-widest text-[#ffb703] mb-3">
              DIRECT CONTACT
            </div>
            <div className="space-y-2.5 text-[#ebdcd4] font-condensed font-bold text-sm sm:text-[15px]">
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span className="font-extrabold text-white">{CONTACT_DETAILS.phone}</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span className="font-semibold text-[#ebdcd4]">{CONTACT_DETAILS.email}</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start space-x-2">
                <Globe className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span className="font-semibold text-[#ebdcd4]">{CONTACT_DETAILS.website}</span>
              </p>
            </div>
          </div>

          {/* Franchise Navigation Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="font-condensed font-extrabold text-sm uppercase tracking-widest text-[#ffb703] mb-3">
              QUICK NAVIGATION
            </div>
            <div className="space-y-2 text-[#ebdcd4] font-condensed font-extrabold text-xs sm:text-sm">
              <p><a href="#key-metrics" className="hover:text-[#ffb703] transition-colors">KEY METRICS</a></p>
              <p><a href="#why-invest" className="hover:text-[#ffb703] transition-colors">WHY INVEST</a></p>
              <p><a href="#support" className="hover:text-[#ffb703] transition-colors">COMPLETE SUPPORT</a></p>
              <p><a href="#investment" className="hover:text-[#ffb703] transition-colors">PROFIT CALCULATOR</a></p>
              <p><a href="#locations" className="hover:text-[#ffb703] transition-colors">IDEAL LOCATIONS</a></p>
              <p><a href="#roadmap" className="hover:text-[#ffb703] transition-colors">LAUNCH ROADMAP</a></p>
              <p><a href="#faqs" className="hover:text-[#ffb703] transition-colors">FREQUENTLY ASKED QUESTIONS</a></p>
            </div>
          </div>

          {/* Brand Attributes & Back to Top */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-between">
            <div>
              <div className="font-condensed font-extrabold text-sm uppercase tracking-widest text-[#ffb703] mb-2">
                KEY STANDARDS
              </div>
              <p className="text-xs sm:text-[13px] font-condensed font-extrabold text-[#ebdcd4] leading-relaxed uppercase tracking-wider">
                ✓ 100% HALAL • NO BEEF<br />
                ✓ REAL KOYLA SMOKE<br />
                ✓ ₹80 STARTING PRICE<br />
                ✓ 5% MONTHLY ROYALTY
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-center sm:self-start text-xs sm:text-sm font-condensed font-extrabold text-[#ffb703] hover:text-white flex items-center space-x-1.5 transition-colors p-1"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright Notice (Centered on Mobile) */}
        <div className="pt-6 text-xs font-sans text-[#ebdcd4]/80 font-medium leading-relaxed space-y-3 text-center sm:text-left">
          <p>
            <strong className="text-white font-bold">FRANCHISE NOTICE:</strong> Irani Koyla Shawarma offers lifetime franchise agreements with a single one-time fee of ₹8,00,000 and 5% monthly royalties. All operational systems, recipes, spices, training, and kitchen layouts are turnkey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs pt-3 border-t border-[var(--border-ember)]/80 gap-2 font-semibold text-[#ebdcd4]">
            <div>
              © 2026 IRANI KOYLA SHAWARMA. ALL RIGHTS RESERVED.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:underline hover:text-white">PRIVACY POLICY</a>
              <a href="#" className="hover:underline hover:text-white">TERMS OF USE</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
