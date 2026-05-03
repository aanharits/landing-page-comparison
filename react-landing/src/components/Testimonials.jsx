import { TESTIMONIALS } from '../data/testimonials.js';

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <p className="text-sm font-accent font-semibold uppercase tracking-[0.3em] text-primary mb-4">TESTIMONIALS</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text mb-6">What Pet Owners Say</h2>
          <p className="text-text-light max-w-2xl mx-auto">Don't just take our word for it — hear from the pet owners who trust us with their beloved companions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll fade-up">
          {TESTIMONIALS.map((item) => (
            <div key={item.name} className="bg-background rounded-3xl p-8 border border-gray-100 h-full hover:-translate-y-2 hover:shadow-xl hover:shadow-secondary/20 hover:border-secondary/30 transition-all duration-300 cursor-pointer flex flex-col">
              <div className="flex gap-1 mb-6">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-accent">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
              <p className="text-text-light leading-relaxed mb-8 flex-grow">&ldquo;{item.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full object-cover border-2 border-secondary/30" width="56" height="56" loading="lazy" decoding="async" />
                    <div>
                      <p className="font-heading font-bold text-text">{item.name}</p>
                      <p className="text-sm text-text-light">{item.role}</p>
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
