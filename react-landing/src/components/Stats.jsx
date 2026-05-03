import { STATS, STATS_BG } from '../data/stats.js';

function Stats() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="parallax-bg absolute inset-0" style={{ backgroundImage: `url('${STATS_BG}')` }}></div>
      <div className="absolute inset-0 bg-primary-dark/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <p className="text-sm font-accent font-semibold uppercase tracking-[0.3em] text-secondary mb-4">BY THE NUMBERS</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">Trusted by Thousands</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <div key={stat.label} className="text-center animate-on-scroll fade-up" style={{ animationDelay: `${index * 150}ms` }}>
              <p className="text-5xl lg:text-6xl font-heading font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm font-accent font-medium uppercase tracking-[0.15em] text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
