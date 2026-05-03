import { HERO_DATA } from '../data/hero.js';

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_DATA.image} alt="Happy pets at PawCare clinic" className="w-full h-full object-cover" width="1920" height="1080" loading="eager" fetchpriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-text/80 via-text/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          <p className="hero-animate text-sm font-accent font-semibold uppercase tracking-[0.3em] text-secondary mb-6">{HERO_DATA.subtitle}</p>
          <h1 className="hero-animate-delay-1 text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-white mb-8">{HERO_DATA.title}</h1>
          <p className="hero-animate-delay-2 text-lg text-white/70 leading-relaxed max-w-lg mb-10 font-body">{HERO_DATA.description}</p>

          <div className="hero-animate-delay-3 flex flex-wrap gap-4">
            <a href="#contact" className="cta-pulse px-8 py-4 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300">{HERO_DATA.cta}</a>
            <a href="#gallery" className="px-8 py-4 border-2 border-white/30 text-white text-sm font-semibold rounded-full hover:border-white/60 hover:bg-white/10 transition-all duration-300">{HERO_DATA.ctaSecondary}</a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {HERO_DATA.counters.map((counter, index) => (
            <div key={counter.label} className="hero-animate-delay-3 text-center md:text-left" style={{ animationDelay: `${0.6 + index * 0.15}s` }}>
              <p className="text-3xl lg:text-4xl font-heading font-bold text-white mb-1">{counter.value}</p>
              <p className="text-sm text-white/50 font-body">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
