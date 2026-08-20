import React from 'react';
import { ArrowUp, Mail, Phone, ShieldAlert, Award, FileText, Globe, Flame } from 'lucide-react';
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
        {/* Core Slogan left aligned with Limited Franchises Available notice */}
        <div className="py-6 sm:py-10 border-b border-[var(--border-ember)]/80 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] font-mono-stamp text-[#ffb703] uppercase tracking-[0.25em] font-bold mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              <Flame className="w-3.5 h-3.5 fill-[#ff4400] text-[#ff4400]" />
              <span>LIMITED FRANCHISES AVAILABLE</span>
            </div>
            <h2 className="font-condensed font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Own the Taste.<br className="hidden sm:inline" /> <span className="text-[#ffb703]">Build the Legacy.</span>
            </h2>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <button
              onClick={onOpenApply}
              className="bg-fire-gradient text-white px-6 sm:px-8 py-3 text-xs sm:text-sm font-condensed font-black tracking-widest uppercase transition-all whitespace-nowrap min-h-[44px] shadow-lg hover:shadow-[#ff4400]/25"
            >
              GET FRANCHISE DETAILS
            </button>
            <button
              onClick={onOpenFdd}
              className="bg-[#1a0f0a]/90 backdrop-blur-sm hover:bg-[#28150d] text-[#ffc300] hover:text-white px-5 sm:px-6 py-3 text-xs sm:text-sm font-condensed font-bold tracking-widest uppercase transition-colors whitespace-nowrap min-h-[44px] border border-[var(--border-ember)] flex items-center space-x-1.5 shadow-md"
            >
              <FileText className="w-4 h-4 text-[#ffb703]" />
              <span>DOWNLOAD INVESTMENT DECK</span>
            </button>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-b border-[var(--border-ember)]/80 text-xs drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="font-script text-3xl text-white font-black drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                Irani Koyla
              </span>
              <span className="font-condensed font-black text-xs bg-fire-gradient text-white px-2 py-0.5 tracking-wider uppercase shadow">
                SHAWARMA
              </span>
            </div>
            <p className="text-[#f5e6de] leading-relaxed font-semibold text-xs sm:text-[13px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              Irani Koyla Shawarma Franchise Network. Smoked with love, served with legacy. Authentic koyla charcoal shawarma starting at ₹80 with low 5% ongoing royalty.
            </p>
          </div>

          <div>
            <div className="font-condensed font-black text-sm uppercase tracking-widest text-[#ffc300] mb-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              FRANCHISE DIRECT CONTACT
            </div>
            <div className="space-y-2.5 text-[#f5e6de] font-condensed font-bold text-sm sm:text-[15px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                <span className="font-extrabold text-white">{CONTACT_DETAILS.phone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                <span className="font-semibold text-[#f5e6de]">{CONTACT_DETAILS.email}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#ff5500] flex-shrink-0" />
                <span className="font-semibold text-[#f5e6de]">{CONTACT_DETAILS.website}</span>
              </p>
            </div>
          </div>

          <div>
            <div className="font-condensed font-black text-sm uppercase tracking-widest text-[#ffc300] mb-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              FRANCHISE SECTIONS
            </div>
            <div className="space-y-2 text-[#f5e6de] font-condensed font-extrabold text-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              <p><a href="#key-metrics" className="hover:text-[#ffc300] transition-colors">KEY METRICS</a></p>
              <p><a href="#why-invest" className="hover:text-[#ffc300] transition-colors">WHY INVEST</a></p>
              <p><a href="#support" className="hover:text-[#ffc300] transition-colors">COMPLETE SUPPORT</a></p>
              <p><a href="#investment" className="hover:text-[#ffc300] transition-colors">5% ROYALTY ROI CALCULATOR</a></p>
              <p><a href="#locations" className="hover:text-[#ffc300] transition-colors">IDEAL LOCATIONS</a></p>
              <p><a href="#founders-note" className="hover:text-[#ffc300] transition-colors">FOUNDER&apos;S NOTE</a></p>
              <p><a href="#faqs" className="hover:text-[#ffc300] transition-colors">FREQUENTLY ASKED QUESTIONS</a></p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="font-condensed font-black text-sm uppercase tracking-widest text-[#ffc300] mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                BRAND ATTRIBUTES
              </div>
              <p className="text-xs sm:text-[13px] font-condensed font-extrabold text-[#f5e6de] leading-relaxed uppercase tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                ✓ 100% HALAL • NO BEEF<br />
                ✓ REAL KOYLA SMOKE<br />
                ✓ ₹80 STARTING PRICE<br />
                ✓ 5% MONTHLY ROYALTY
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start text-xs sm:text-sm font-condensed font-black text-[#ffc300] hover:text-white flex items-center space-x-1.5 transition-colors p-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="pt-6 text-xs font-sans text-[#e5d4cb] font-semibold leading-relaxed space-y-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
          <p>
            <strong className="text-white font-bold">FRANCHISE OPPORTUNITY NOTICE:</strong> Irani Koyla Shawarma offers lifetime franchise agreements with a single one-time franchise fee of ₹8,00,000 and 5% monthly royalties. All operational systems, recipes, spices, training, and kitchen layouts are turnkey.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs pt-3 border-t border-[var(--border-ember)]/80 gap-2 font-semibold text-[#e5d4cb]">
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
