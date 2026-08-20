import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, ArrowRight, Lock } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';
import { CONTACT_DETAILS } from '../data/franchiseData';

interface InvestmentDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const InvestmentDeckModal: React.FC<InvestmentDeckModalProps> = ({ isOpen, onClose, onOpenApply }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const generateAndDownloadSummary = () => {
    const summaryContent = `================================================================================
IRANI KOYLA SHAWARMA — 2026 OFFICIAL FRANCHISE INVESTMENT DECK
================================================================================
Confidential Investment Prospectus & Term Summary
Prepared For: ${name || 'Prospective Franchisee'}
Email: ${email || 'Direct Investor'}
Phone: ${phone || 'N/A'}
Target City / Region: ${city || 'N/A'}
Date: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}

--------------------------------------------------------------------------------
1. CORE FRANCHISE COMMERCIAL TERMS
--------------------------------------------------------------------------------
• One-Time Franchise Fee   : ₹8,00,000 (Eight Lakhs INR)
• Monthly Royalty Rate      : 5% of gross monthly sales (Low industry royalty)
• Franchise Agreement Term  : Lifetime Agreement (Valid until deal, no annual renewals)
• Space Requirement         : 200 – 500 Sq. Ft. (High-footfall high street or mall)
• Menu Architecture         : 100% Halal Chicken Shawarmas (No Beef)
• Flagship Entry Price      : Starting from ₹80 per charcoal smoked wrap
• Estimated Net Profit      : ~35% after food cost, labor, rent, and 5% royalty
• Typical Turnkey Timeline  : 50 Days from site handover to grand opening

--------------------------------------------------------------------------------
2. TURNKEY ONBOARDING DELIVERABLES INCLUDED
--------------------------------------------------------------------------------
✓ Lifetime Brand Trademark License & Territory Rights
✓ Custom Irani Charcoal Smoker & High-Velocity Extraction Engineering Specs
✓ Complete Secret Spice Marinades & Standardized Sauce Recipes
✓ Comprehensive On-Site Staff & Grill Master Certification
✓ POS & Digital Billing Software Integration
✓ Local Grand Opening Marketing, Banners & Influencer Launch Playbook
✓ Verified Raw Material & Packaging Vendor Supply Chain Access

--------------------------------------------------------------------------------
3. ESTIMATED STORE-LEVEL UNIT ECONOMICS (DAILY MODEL)
--------------------------------------------------------------------------------
• Moderate Street Volume (200 wraps/day @ ₹80 avg) : ~₹16,000/day | ₹4,80,000/mo
  * ESTIMATED MONTHLY NET PROFIT (35%)             : ~₹1,68,000 / Month

• High Street Volume (300 wraps/day @ ₹90 avg)     : ~₹27,000/day | ₹8,10,000/mo
  * ESTIMATED MONTHLY NET PROFIT (35%)             : ~₹2,83,500 / Month

• Rush Hub Volume (500 wraps/day @ ₹120 avg)       : ~₹60,000/day | ₹18,00,000/mo
  * ESTIMATED MONTHLY NET PROFIT (35%)             : ~₹6,30,000 / Month

--------------------------------------------------------------------------------
4. CORPORATE DISCOVERY & APPLICATION CONTACTS
--------------------------------------------------------------------------------
Corporate Office: Irani Koyla Shawarma Franchise Headquarters
Direct Phone    : ${CONTACT_DETAILS.phone}
Direct Email    : ${CONTACT_DETAILS.email}
Official Portal : ${CONTACT_DETAILS.website}

================================================================================
DISCLAIMER: This document is an informational franchise summary. All store-level
financial projections are estimates based on standard operational parameters.
================================================================================`;

    const blob = new Blob([summaryContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Irani_Koyla_Shawarma_Investment_Deck_${name.replace(/\s+/g, '_') || 'Summary'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloaded(true);
    triggerConfetti();
    generateAndDownloadSummary();
  };

  const resetAndClose = () => {
    setIsDownloaded(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#150d0a] border-2 border-[var(--border-ember)] text-white shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="bg-[#080402] text-white px-5 sm:px-8 py-4 flex items-center justify-between border-b border-[var(--border-ember)]">
          <div className="flex items-center space-x-2.5">
            <span className="font-poster text-xl sm:text-2xl tracking-tight text-white uppercase">
              IRANI KOYLA SHAWARMA
            </span>
            <span className="hidden xs:inline-block font-condensed font-extrabold text-[11px] sm:text-xs tracking-widest text-[#ffb703] uppercase bg-[#080402] px-2 py-0.5 border border-[var(--border-ember)]">
              INVESTMENT DECK
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isDownloaded ? (
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-fire-gradient text-[#080402] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-poster text-2xl sm:text-3xl text-white uppercase tracking-tight">
                INVESTMENT DECK DOWNLOADED!
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#ebdcd4] max-w-md mx-auto font-medium">
                Thank you, <strong className="text-white">{name || 'Investor'}</strong>. Your summary file has been saved to your device and a copy has been generated.
              </p>
            </div>

            {/* Structured Franchise Summary Table */}
            <div className="bg-[#080402] border border-[var(--border-ember)] p-4 sm:p-5 mb-6 text-xs">
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[var(--border-ember)]">
                <span className="font-condensed font-extrabold text-sm text-[#ffb703] uppercase tracking-wider">
                  FRANCHISE TERMS SUMMARY (2026)
                </span>
                <span className="font-condensed font-extrabold text-[10px] text-[#ffb703]">
                  ✓ VERIFIED PROSPECTUS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-2.5 bg-[#150d0a] border border-[var(--border-ember)]">
                  <span className="text-[#ebdcd4] text-[11px] block uppercase font-condensed font-extrabold">
                    One-Time Franchise Fee
                  </span>
                  <span className="font-poster text-lg sm:text-xl text-[#ffb703] leading-tight">
                    ₹8,00,000
                  </span>
                  <span className="text-[10px] text-[#ebdcd4]/70 block mt-0.5">Lifetime validity (no renewals)</span>
                </div>

                <div className="p-2.5 bg-[#150d0a] border border-[var(--border-ember)]">
                  <span className="text-[#ebdcd4] text-[11px] block uppercase font-condensed font-extrabold">
                    Monthly Royalty
                  </span>
                  <span className="font-poster text-lg sm:text-xl text-[#ffb703] leading-tight">
                    5% of Sales
                  </span>
                  <span className="text-[10px] text-[#ebdcd4]/70 block mt-0.5">Continuous brand & recipe support</span>
                </div>

                <div className="p-2.5 bg-[#150d0a] border border-[var(--border-ember)]">
                  <span className="text-[#ebdcd4] text-[11px] block uppercase font-condensed font-extrabold">
                    Outlet Requirement
                  </span>
                  <span className="font-poster text-base sm:text-lg text-white leading-tight">
                    200 – 500 Sq. Ft.
                  </span>
                  <span className="text-[10px] text-[#ebdcd4]/70 block mt-0.5">Compact charcoal smoke setup</span>
                </div>

                <div className="p-2.5 bg-[#150d0a] border border-[var(--border-ember)]">
                  <span className="text-[#ebdcd4] text-[11px] block uppercase font-condensed font-extrabold">
                    Estimated Net Margin
                  </span>
                  <span className="font-poster text-base sm:text-lg text-[#ffb703] leading-tight">
                    ~35% Net Profit
                  </span>
                  <span className="text-[10px] text-[#ebdcd4]/70 block mt-0.5">High volume starting at ₹80</span>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[var(--border-ember)] flex items-center justify-between text-[11px] text-[#ebdcd4] font-medium">
                <span>Launch Timeline: <strong className="text-white">50 Days Turnkey</strong></span>
                <span>Product Menu: <strong className="text-white">100% Halal • No Beef</strong></span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={generateAndDownloadSummary}
                className="flex-1 bg-[#080402] hover:bg-[#150d0a] text-white border border-[var(--border-ember)] px-4 py-2.5 font-condensed font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD FILE AGAIN</span>
              </button>

              <button
                onClick={() => {
                  resetAndClose();
                  onOpenApply();
                }}
                className="flex-1 bg-fire-gradient text-[#080402] px-5 py-2.5 font-condensed font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#ffb703]/25"
              >
                <span>PROCEED TO APPLICATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="flex items-start space-x-4 mb-5">
              <div className="w-11 h-11 bg-fire-gradient text-[#080402] flex items-center justify-center flex-shrink-0 shadow-md">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-poster text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                  DOWNLOAD INVESTMENT DECK
                </h3>
                <p className="text-xs text-[#ebdcd4] font-medium mt-1">
                  Enter your contact details to instantly download the complete 2026 franchise summary, unit economics, and ₹8L commercial term sheet.
                </p>
              </div>
            </div>

            {/* Value Points */}
            <div className="p-3.5 bg-[#080402] border border-[var(--border-ember)] mb-5 space-y-1.5 text-xs font-condensed font-bold text-[#ebdcd4]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffb703] flex-shrink-0" />
                <span>One-Time ₹8,00,000 Franchise Fee & 5% Monthly Royalty Structure</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffb703] flex-shrink-0" />
                <span>Store Unit Economics, 35% Net Margins & Shawarma Pricing (₹80+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffb703] flex-shrink-0" />
                <span>Turnkey 50-Day Kitchen Setup & Charcoal Smoker Blueprint</span>
              </div>
            </div>

            {/* Simple Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                    YOUR FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Samad Shaikh"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. samad@gmail.com"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-condensed font-extrabold uppercase text-[#ebdcd4] mb-1">
                    TARGET CITY / REGION
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai, Pune, Bangalore..."
                    className="w-full px-3 py-2.5 text-xs sm:text-sm bg-[#080402] text-white border border-[var(--border-ember)] font-semibold outline-none focus:border-[#ffb703]"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-1.5 text-[10px] font-condensed font-bold text-[#ffb703]">
                  <Lock className="w-3 h-3 text-[#ffb703]" />
                  <span>100% DIRECT DOWNLOAD • NO SPAM</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-fire-gradient text-[#080402] px-6 py-2.5 font-condensed font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-[#ffb703]/25 min-h-[42px]"
                >
                  <Download className="w-4 h-4 text-[#080402]" />
                  <span>DOWNLOAD INVESTMENT DECK</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
