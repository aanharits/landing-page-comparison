import { useState } from 'react';
import { VIRTUAL_TOUR } from '../data/virtualTour.js';

const TourIcon = ({ icon }) => {
  const icons = {
    camera: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    monitor: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    activity: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
    home: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

function VirtualTour() {
  const [activeVideo, setActiveVideo] = useState(VIRTUAL_TOUR.mainVideo);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFeatureClick = (video, index) => {
    setActiveVideo(video);
    setActiveIndex(index);
    setIsPlaying(true);
  };

  const handleMainPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="virtual-tour" className="py-24 lg:py-32 bg-onyx text-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sagedark mb-4">
            {VIRTUAL_TOUR.subtitle}
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-offwhite mb-6">
            {VIRTUAL_TOUR.title}
          </h2>
          <p className="text-lg text-offwhite/60 leading-relaxed max-w-2xl">
            {VIRTUAL_TOUR.description}
          </p>
        </div>

        {/* Main Video Player */}
        <div className="mb-12 animate-on-scroll fade-up">
          <div className="relative w-full rounded-4xl overflow-hidden bg-onyx/50" style={{ paddingBottom: '56.25%' }}>
            {isPlaying ? (
              <iframe
                src={`${activeVideo}?autoplay=1`}
                title="PawCare Virtual Tour"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                className="absolute inset-0 w-full h-full cursor-pointer group"
                onClick={handleMainPlay}
                aria-label="Play virtual tour video"
              >
                <img
                  src={VIRTUAL_TOUR.mainThumbnail}
                  alt="Virtual Tour Video Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-onyx/30 group-hover:bg-onyx/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-offwhite/90 group-hover:bg-offwhite flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1A1A1A" className="w-8 h-8 ml-1">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Feature Cards with thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIRTUAL_TOUR.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group cursor-pointer rounded-3xl p-6 border transition-all duration-300 animate-on-scroll fade-up ${
                activeIndex === index
                  ? 'bg-sagedark/20 border-sagedark/40'
                  : 'bg-offwhite/5 border-offwhite/10 hover:bg-offwhite/10 hover:border-offwhite/20'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleFeatureClick(feature.video, index)}
              role="button"
              tabIndex={0}
              aria-label={`Watch virtual tour of ${feature.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleFeatureClick(feature.video, index);
                }
              }}
            >
              {/* Thumbnail with play overlay */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-4 bg-onyx/30" style={{ paddingBottom: '56.25%' }}>
                <img
                  src={feature.thumbnail}
                  alt={`Tour: ${feature.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="480"
                  height="360"
                />
                <div className="absolute inset-0 bg-onyx/30 group-hover:bg-onyx/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg ${
                    activeIndex === index ? 'bg-sagedark text-offwhite' : 'bg-offwhite/80 text-onyx group-hover:bg-offwhite'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  activeIndex === index ? 'bg-sagedark/30 text-sagedark' : 'bg-offwhite/10 text-offwhite/60 group-hover:text-offwhite'
                }`}>
                  <TourIcon icon={feature.icon} />
                </div>
                <h3 className="text-lg font-bold text-offwhite">{feature.title}</h3>
              </div>
              <p className="text-sm text-offwhite/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner with animated particles */}
        <div className="relative mt-16 rounded-4xl overflow-hidden" style={{ height: '200px' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-sagedark/20 via-clay/20 to-sagedark/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-offwhite mb-2">Ready for a Visit?</p>
              <p className="text-offwhite/50 mb-6">Schedule an in-person tour of our facility today</p>
              <a
                href="#services"
                className="inline-block px-8 py-4 bg-offwhite text-onyx text-sm font-semibold rounded-full hover:bg-offwhite/90 transition-colors duration-300"
              >
                Book a Tour
              </a>
            </div>
          </div>
          <div className="absolute top-4 left-8 w-3 h-3 rounded-full bg-sagedark/30" style={{ animation: 'floatParticle 6s ease-in-out infinite' }} />
          <div className="absolute top-12 right-16 w-2 h-2 rounded-full bg-clay/30" style={{ animation: 'floatParticle 8s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-8 left-1/4 w-4 h-4 rounded-full bg-offwhite/10" style={{ animation: 'floatParticle 7s ease-in-out infinite 2s' }} />
          <div className="absolute bottom-4 right-1/3 w-2 h-2 rounded-full bg-sagedark/20" style={{ animation: 'floatParticle 5s ease-in-out infinite 0.5s' }} />
          <div className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-clay/20" style={{ animation: 'floatParticle 9s ease-in-out infinite 3s' }} />
        </div>
      </div>
    </section>
  );
}

export default VirtualTour;
