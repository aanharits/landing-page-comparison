import { useState } from 'react';
import { VIRTUAL_TOUR } from '../data/virtualTour.js';

function VirtualTour() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const handleThumbClick = (index) => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
    }, 200);
  };

  const active = VIRTUAL_TOUR.facilities[activeIndex];

  return (
    <section id="virtual-tour" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <p className="text-sm font-accent font-semibold uppercase tracking-[0.3em] text-primary mb-4">{VIRTUAL_TOUR.subtitle}</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text mb-6">{VIRTUAL_TOUR.title}</h2>
          <p className="text-text-light max-w-2xl mx-auto">{VIRTUAL_TOUR.description}</p>
        </div>

        <div className="animate-on-scroll fade-up">
          <div className="rounded-3xl overflow-hidden mb-6 bg-gray-100">
            <img src={active.image} alt={active.title} className={`w-full h-[500px] lg:h-[600px] object-cover transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`} width="800" height="600" loading="lazy" decoding="async" />
          </div>
          <p className="text-xl font-heading font-bold text-text mb-2">{active.title}</p>
          <p className="text-text-light">{active.description}</p>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-6 animate-on-scroll fade-up" style={{ animationDelay: '200ms' }}>
          {VIRTUAL_TOUR.facilities.map((facility, index) => (
            <button key={facility.title} onClick={() => handleThumbClick(index)} className={`tour-thumb rounded-xl overflow-hidden border-2 ${activeIndex === index ? 'active border-primary' : 'border-transparent'}`} aria-label={`View ${facility.title}`}>
              <img src={facility.image} alt={facility.title} className="w-full h-20 sm:h-24 lg:h-28 object-cover" width="200" height="112" loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VirtualTour;
