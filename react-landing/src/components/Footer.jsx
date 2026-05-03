import { FOOTER_DATA } from '../data/footer.js';

function Footer() {
  return (
    <footer className="bg-text py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">🐾 {FOOTER_DATA.brand}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">{FOOTER_DATA.tagline}. Providing world-class veterinary care with warmth and compassion for every furry family member.</p>
            <div className="flex gap-4">
              {FOOTER_DATA.social.map((s) => (
                <a key={s.name} href={s.href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300" aria-label={s.name}>
                  <span className="text-xs font-bold">{s.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.label}><a href={link.href} className="text-sm text-white/60 hover:text-secondary transition-colors duration-300">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Services</h4>
            <ul className="space-y-3">
              {FOOTER_DATA.services.map((link) => (
                <li key={link.label}><a href={link.href} className="text-sm text-white/60 hover:text-secondary transition-colors duration-300">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">Newsletter</h4>
            <p className="text-sm text-white/60 mb-4">Subscribe for pet care tips and clinic updates.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email" className="newsletter-input flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder-white/40" />
              <button type="submit" className="px-5 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-secondary transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">&copy; 2026 {FOOTER_DATA.brand}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
