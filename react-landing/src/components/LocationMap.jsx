import { useState } from 'react';
import { LOCATION_MAP } from '../data/location.js';

function LocationMap() {
  const [activeBranch, setActiveBranch] = useState(0);

  return (
    <section id="location" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sagedark mb-4">
            {LOCATION_MAP.subtitle}
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-onyx mb-6">
            {LOCATION_MAP.title}
          </h2>
          <p className="text-lg text-onyx/80 leading-relaxed max-w-2xl">
            {LOCATION_MAP.description}
          </p>
        </div>

        {/* Branch Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 animate-on-scroll fade-up">
          {LOCATION_MAP.branches.map((branch, index) => (
            <button
              key={branch.name}
              onClick={() => setActiveBranch(index)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeBranch === index
                  ? 'bg-onyx text-offwhite shadow-lg'
                  : 'bg-onyx/5 text-onyx/60 hover:bg-onyx/10 hover:text-onyx'
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Map + Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map — Heavy Google Maps iframe */}
          <div className="lg:col-span-2 animate-on-scroll fade-up">
            <div className="relative w-full rounded-4xl overflow-hidden bg-onyx/5 border border-onyx/5" style={{ paddingBottom: '60%' }}>
              <iframe
                src={LOCATION_MAP.branches[activeBranch].mapEmbed}
                title={`Map: ${LOCATION_MAP.branches[activeBranch].name}`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-sm text-onyx/60 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-sagedark">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {LOCATION_MAP.branches[activeBranch].address}
            </p>
          </div>

          {/* Info Sidebar */}
          <div className="flex flex-col gap-6 animate-on-scroll fade-left">
            {/* Contact Card */}
            <div className="bg-offwhite rounded-3xl p-8 border border-onyx/5">
              <h3 className="text-lg font-bold text-onyx mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sagedark/10 flex items-center justify-center text-sagedark flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-onyx/60 uppercase tracking-wider mb-1">Address</p>
                    <p className="text-sm text-onyx font-medium">{LOCATION_MAP.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sagedark/10 flex items-center justify-center text-sagedark flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-onyx/60 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-sm text-onyx font-medium">{LOCATION_MAP.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sagedark/10 flex items-center justify-center text-sagedark flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-onyx/60 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-sm text-onyx font-medium">{LOCATION_MAP.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-offwhite rounded-3xl p-8 border border-onyx/5">
              <h3 className="text-lg font-bold text-onyx mb-6">Operating Hours</h3>
              <div className="space-y-3">
                {LOCATION_MAP.hours.map((item) => (
                  <div key={item.day} className="flex items-center justify-between">
                    <span className="text-sm text-onyx/80">{item.day}</span>
                    <span className={`text-sm font-semibold ${
                      item.day === 'Emergency' ? 'text-clay' : 'text-onyx'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Directions CTA */}
            <a
              href="https://maps.google.com/?q=-6.194741,106.819561"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-onyx text-offwhite text-sm font-semibold rounded-full hover:bg-onyx/80 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <polygon points="3,11 22,2 13,21 11,13" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationMap;
