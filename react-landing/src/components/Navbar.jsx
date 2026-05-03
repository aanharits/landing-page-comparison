import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/navigation.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold tracking-tight text-onyx">
          PawCare
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-onyx/60 hover:text-onyx transition-colors duration-300 uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#services"
            className="px-7 py-3 bg-onyx text-offwhite text-sm font-semibold rounded-full hover:bg-onyx/80 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-onyx transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-onyx transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-onyx transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-onyx/60 hover:text-onyx transition-colors duration-300 uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#services"
            className="px-7 py-3 bg-onyx text-offwhite text-sm font-semibold rounded-full text-center hover:bg-onyx/80 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
