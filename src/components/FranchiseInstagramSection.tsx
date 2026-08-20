import React from 'react';
import { CONTACT_DETAILS } from '../data/franchiseData';

export const FranchiseInstagramSection: React.FC = () => {
  const instagramImages = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=85',
      alt: 'Real koyla charcoal rotisserie',
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=85',
      alt: 'Packed evening outlet crowd',
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=600&q=85',
      alt: 'Signature secret spices and marinades',
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=85',
      alt: 'Charcoal smoked chicken platter',
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=85',
      alt: 'Fresh baked pita bread',
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=85',
      alt: 'Express takeaway counter',
    },
  ];

  return (
    <section id="instagram" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Centered Header matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="font-condensed font-extrabold text-xs text-[#ffb703] tracking-widest uppercase block mb-1">
            {CONTACT_DETAILS.instagram}
          </span>
          <h2 className="font-poster text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight mb-2">
            FOLLOW OUR JOURNEY.
          </h2>
          <p className="text-[#ebdcd4] font-sans font-medium text-xs sm:text-sm">
            Tag <span className="text-[#ffb703]">#IraniKoylaShawarma</span> to be featured
          </p>
        </div>

        {/* 6 Seamless Square Images Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramImages.map((item) => (
            <a
              key={item.id}
              href={CONTACT_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square w-full bg-[#150d0a] border border-[var(--border-ember)] hover:border-[var(--border-ember-hover)] overflow-hidden group shadow-md"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Instagram Icon Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-[#ffb703] transform group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
