import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery_items.js';
import { GALLERY_FILTERS } from '../data/gallery_filters.js';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 animate-on-scroll fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sagedark mb-4">
            OUR FRIENDS
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-onyx mb-8">
            Pet Gallery
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {GALLERY_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-onyx text-offwhite'
                    : 'bg-onyx/5 text-onyx/60 hover:bg-onyx/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.name}
              className="gallery-item group rounded-4xl overflow-hidden relative animate-on-scroll zoom-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                width="320"
                height="288"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <p className="text-white font-bold text-lg">{item.name}</p>
                  <p className="text-white/70 text-sm">{item.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
