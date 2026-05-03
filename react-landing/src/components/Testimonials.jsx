import { TESTIMONIALS } from '../data/testimonials.js';

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 animate-on-scroll fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sagedark mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-onyx">
            What Pet Owners Say
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={item.name + index}
              className="bg-white rounded-4xl p-8 border border-onyx/5 animate-on-scroll fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 text-clay"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-onyx/60 leading-relaxed mb-8 text-sm">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="font-bold text-onyx text-sm">{item.name}</p>
                  <p className="text-xs text-onyx/60">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
