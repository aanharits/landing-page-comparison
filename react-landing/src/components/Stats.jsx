import { STATS } from '../data/stats.js';

function Stats() {
  return (
    <section className="py-20 border-y border-onyx/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-on-scroll fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-5xl lg:text-6xl font-extrabold text-onyx mb-2">
                {stat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-onyx/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
