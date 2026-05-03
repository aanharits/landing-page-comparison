import { SERVICES } from '../data/services.js';

const ServiceIcon = ({ icon }) => {
  const icons = {
    stethoscope: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
        <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
    vaccine: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M15 2l5 5-5 5" />
        <path d="M20 7H9.5a3.5 3.5 0 000 7h.5" />
        <path d="M12 22v-5" />
        <path d="M8 22h8" />
        <path d="M12 17a2 2 0 002-2v-1H10v1a2 2 0 002 2z" />
      </svg>
    ),
    surgery: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    dental: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 5.5C10 3 7 2 5.5 3.5S3 8 5 12c1.5 3 2.5 5 3 7 .5 1.5 1 2.5 2 2.5s1.5-.5 2-2c.5 1.5 1 2 2 2s1.5-1 2-2.5c.5-2 1.5-4 3-7 2-4 1-7-.5-8.5S14 3 12 5.5z" />
      </svg>
    ),
    grooming: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 00-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
    emergency: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.07-2.14-1.5-3.5-1-5 .5 1.5 2 2.5 3 3 1.5 1 2 3.5 2 5.5a3 3 0 01-6 0" />
        <path d="M12 22v-3" />
        <path d="M4 22h16" />
      </svg>
    ),
    nutrition: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M2 2h4l3 14h10l3-8H6" />
        <circle cx="10" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    ),
    boarding: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  };
  return icons[icon] || null;
};

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sagedark mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-onyx">
            Our Services
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`service-card bg-white rounded-4xl p-8 border border-onyx/5 animate-on-scroll fade-up ${
                index === 0 || index === 3
                  ? 'sm:col-span-2 lg:col-span-2'
                  : ''
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-sage/10 flex items-center justify-center text-sagedark mb-6">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-onyx mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-onyx/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
