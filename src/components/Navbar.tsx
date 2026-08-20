import React, { useState } from 'react';
import { Flame, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenFdd: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenFdd }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#key-metrics', label: 'KEY METRICS' },
    { href: '#why-invest', label: 'WHY INVEST' },
    { href: '#support', label: 'COMPLETE SUPPORT' },
    { href: '#investment', label: 'INVESTMENT' },
    { href: '#locations', label: 'LOCATIONS' },
    { href: '#faqs', label: 'FAQS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#080402]/95 backdrop-blur-md border-b border-[var(--border-ember)] w-full transition-all">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-3 flex items-center justify-between">
        
        {/* Brand Logo: Irani Koyla FRANCHISE */}
        <a 
          href="#" 
          className="flex items-center space-x-2 group"
          id="franchise-logo-link"
        >
          <span className="font-script text-2xl sm:text-3xl text-white font-bold tracking-tight group-hover:text-[#ffb703] transition-colors">
            Irani Koyla
          </span>
          <span className="font-condensed text-[10px] bg-fire-gradient text-[#080402] px-1.5 py-0.5 tracking-wider uppercase font-extrabold shadow-sm">
            FRANCHISE
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 text-[12px] 2xl:text-[13px] font-condensed font-extrabold tracking-widest text-[#ebdcd4]">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="hover:text-[#ffb703] transition-colors uppercase tracking-[0.18em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs: Desktop shows both DECK + APPLY; Mobile shows ONLY APPLY NOW + Hamburger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Download Investment Deck (Desktop Only) */}
          <button
            onClick={onOpenFdd}
            id="nav-fdd-btn"
            className="hidden md:flex items-center space-x-1.5 bg-[#150d0a] hover:bg-[#25150e] text-white border border-[var(--border-ember)] px-3.5 py-2 text-xs font-condensed font-extrabold tracking-widest uppercase transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#ffb703]" />
            <span>DOWNLOAD INVESTMENT DECK</span>
          </button>

          {/* Apply Now Button (Shown on BOTH Mobile and Desktop) */}
          <button
            onClick={onOpenApply}
            id="nav-apply-btn"
            className="bg-fire-gradient text-[#080402] px-3.5 sm:px-4 lg:px-5 py-2 text-xs sm:text-[13px] font-condensed font-extrabold tracking-widest uppercase transition-all duration-200 shadow-md hover:shadow-[#ffb703]/25 flex items-center space-x-1.5 whitespace-nowrap min-h-[38px]"
          >
            <Flame className="w-3.5 h-3.5 text-[#080402] fill-[#080402]" />
            <span>APPLY NOW</span>
          </button>

          {/* Mobile Hamburger Toggle Button (Shown on Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white bg-[#150d0a] hover:bg-[#25150e] rounded border border-[var(--border-ember)] transition-colors flex items-center justify-center min-h-[38px] min-w-[38px]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#ffb703]" /> : <Menu className="w-5 h-5 text-[#ffb703]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#150d0a] border-b border-[var(--border-ember)] px-5 py-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pb-4 border-b border-[var(--border-ember)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-condensed font-extrabold text-sm uppercase tracking-widest text-white hover:text-[#ffb703] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFdd();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#080402] border border-[var(--border-ember)] text-[#ffb703] py-3 text-xs font-condensed font-extrabold tracking-widest uppercase rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#ffb703]" />
              <span>DOWNLOAD INVESTMENT DECK</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-fire-gradient text-[#080402] py-3 text-xs font-condensed font-extrabold tracking-widest uppercase rounded-lg shadow-lg"
            >
              <Flame className="w-4 h-4 text-[#080402]" />
              <span>SUBMIT APPLICATION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
