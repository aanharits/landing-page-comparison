import { FOOTER_DATA } from '../data/footer.js';

function Footer() {
  return (
    <footer className="py-20 border-t border-onyx/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-onyx mb-4">
              {FOOTER_DATA.brand}
            </h3>
            <p className="text-sm text-onyx/70 leading-relaxed max-w-sm mb-6">
              {FOOTER_DATA.tagline}. Providing world-class veterinary care with warmth and compassion for every furry family member.
            </p>
            <div className="flex gap-5">
              {FOOTER_DATA.social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="text-xs font-medium text-onyx/60 hover:text-onyx transition-colors duration-300 uppercase tracking-widest"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/60 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_DATA.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-onyx/60 hover:text-onyx transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-onyx/60 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm text-onyx/60">{FOOTER_DATA.address}</li>
              <li className="text-sm text-onyx/60">{FOOTER_DATA.phone}</li>
              <li>
                <a
                  href={`mailto:${FOOTER_DATA.email}`}
                  className="text-sm text-onyx/60 hover:text-onyx transition-colors duration-300"
                >
                  {FOOTER_DATA.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-onyx/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-onyx/30">
            &copy; 2026 {FOOTER_DATA.brand}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-onyx/30 hover:text-onyx/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-onyx/30 hover:text-onyx/60 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
