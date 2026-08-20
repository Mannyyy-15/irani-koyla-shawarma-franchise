import React, { useState } from 'react';
import { FAQS } from '../data/franchiseData';

interface FranchiseFaqSectionProps {
  onOpenFdd: () => void;
  onOpenApply: () => void;
}

export const FranchiseFaqSection: React.FC<FranchiseFaqSectionProps> = ({ onOpenFdd, onOpenApply }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'INVESTMENT', 'SUPPORT', 'LOCATION', 'BRAND'];

  const filteredFaqs = activeCategory === 'ALL'
    ? FAQS
    : FAQS.filter(f => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-3xl">
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              INVESTOR TRANSPARENCY
            </span>
            <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
          </div>
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="text-[#ebdcd4] font-sans font-medium text-sm sm:text-base leading-relaxed">
              Everything you need to know regarding franchise qualification, ₹8L fee, 5% royalty, shop buildout, and central support.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-4 py-2 text-xs font-condensed font-extrabold tracking-wider uppercase transition-colors border ${
                activeCategory === c
                  ? 'bg-[#ff5500] text-white border-[#ff5500]'
                  : 'bg-[#150d0a] text-[#ebdcd4] border-[var(--border-ember)] hover:border-zinc-500'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-10 sm:mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#150d0a] border border-[var(--border-ember)] hover:border-[var(--border-ember-hover)] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <span className="font-condensed font-extrabold text-xs text-[#ffb703] shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-condensed font-extrabold text-base sm:text-xl text-white uppercase tracking-wide">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="font-condensed font-extrabold text-xl text-[#ffb703] shrink-0 ml-2">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#ebdcd4] font-sans font-medium leading-relaxed border-t border-[var(--border-ember)]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Strip */}
        <div className="p-6 bg-[#150d0a] border border-[var(--border-ember)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h4 className="font-condensed font-extrabold text-base sm:text-lg text-white uppercase tracking-wider mb-1">
              HAVE ADDITIONAL DUE DILIGENCE QUESTIONS?
            </h4>
            <p className="text-[#ebdcd4] font-sans font-medium text-xs sm:text-sm">
              Download our complete investor presentation deck or submit a franchise enquiry.
            </p>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <button
              onClick={onOpenFdd}
              className="bg-[#080402] border border-[var(--border-ember)] text-white hover:border-[#ffb703] px-5 py-3 font-condensed font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors whitespace-nowrap"
            >
              DOWNLOAD INVESTMENT DECK
            </button>
            <button
              onClick={onOpenApply}
              className="bg-fire-gradient text-white px-6 py-3 text-xs sm:text-sm font-condensed font-bold tracking-widest uppercase transition-all whitespace-nowrap shadow-lg hover:shadow-[#ff4400]/25"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
