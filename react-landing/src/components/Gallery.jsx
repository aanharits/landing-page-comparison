import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery_items.js';
import { GALLERY_FILTERS } from '../data/gallery_filters.js';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.category === activeFilter);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <p className="text-sm font-accent font-semibold uppercase tracking-[0.3em] text-primary mb-4">OUR FRIENDS</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text mb-6">Pet Gallery</h2>
          <p className="text-text-light max-w-2xl mx-auto mb-8">Meet some of the adorable pets we've had the pleasure of caring for at PawCare.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {GALLERY_FILTERS.map(filter => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-primary text-white' : 'bg-gray-100 text-text-light hover:bg-gray-200'}`}>{filter}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, index) => (
            <div key={item.name} className="gallery-item group rounded-2xl overflow-hidden relative cursor-pointer animate-on-scroll zoom-in" style={{ animationDelay: `${index * 60}ms` }} onClick={() => setLightbox(item)}>
              <img src={item.src} alt={`${item.name} - ${item.breed}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" width="400" height="256" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-text/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <p className="text-white font-heading font-bold text-lg">{item.name}</p>
                  <p className="text-white/70 text-sm">{item.breed}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox-overlay active" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-accent transition-colors z-10" onClick={() => setLightbox(null)}>&times;</button>
          <div className="text-center" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.name} className="rounded-2xl max-w-[90vw] max-h-[85vh] object-contain" />
            <p className="text-white font-heading font-bold text-xl mt-4">{lightbox.name}</p>
            <p className="text-white/60 text-sm">{lightbox.breed}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
