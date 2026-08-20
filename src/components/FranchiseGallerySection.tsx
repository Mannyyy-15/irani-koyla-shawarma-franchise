import React from 'react';

export const FranchiseGallerySection: React.FC = () => {
  const galleryItems = [
    {
      title: 'SLOW SMOKED KOYLA ROTISSERIE',
      category: 'CHARCOAL CRAFT',
      image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'SIGNATURE SECRET MARINADES',
      category: 'CENTRAL SPICES',
      image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'PACKED EVENING STORE CROWDS',
      category: 'DAILY FOOTFALL',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'AUTHENTIC SMOKED PLATTERS',
      category: 'SPECIAL MENU',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'FRESH BAKED DAILY PITA',
      category: 'KITCHEN PREP',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85',
    },
    {
      title: 'EXPRESS TAKEAWAY COUNTER',
      category: 'FAST SERVICE',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=85',
    },
  ];

  return (
    <section id="gallery" className="w-full py-14 sm:py-20 bg-[#080402] border-b border-[var(--border-ember)]">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#ffb703] tracking-widest uppercase block mb-2">
              AUTHENTIC KOYLA EXPERIENCE
            </span>
            <h2 className="font-poster text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95]">
              STORE & FOOD GALLERY.
            </h2>
          </div>
          <div className="lg:max-w-md xl:max-w-lg">
            <p className="text-[#ebdcd4] font-sans font-medium text-sm sm:text-base leading-relaxed">
              A visual showcase of our real hardwood charcoal smoked shawarmas, signature garlic rubs, and high-footfall store counters.
            </p>
          </div>
        </div>

        {/* 2-Column Mobile Grid for Compact Fast Browsing */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] bg-[#150d0a] border border-[var(--border-ember)] rounded-xl sm:rounded-2xl overflow-hidden group shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080402]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Minimal Top Tag */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-[#080402]/90 backdrop-blur-sm border border-[var(--border-ember)] text-[#ffb703] px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-condensed font-extrabold tracking-widest uppercase rounded">
                {item.category}
              </div>

              {/* Minimal Bottom Title */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3">
                <h3 className="font-condensed font-extrabold text-xs sm:text-lg text-white uppercase tracking-wide leading-tight line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
