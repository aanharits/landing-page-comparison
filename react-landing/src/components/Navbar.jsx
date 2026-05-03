import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/navigation.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav id="main-nav" className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 ${scrolled ? 'nav-shrink' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-2xl font-heading font-bold tracking-tight text-primary">🐾 PawCare</a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-text/60 hover:text-primary transition-colors duration-300">{link.label}</a>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300">Book Now</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu} className="text-sm font-medium text-text/60 hover:text-primary transition-colors duration-300">{link.label}</a>
          ))}
          <a href="#contact" className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full text-center hover:bg-primary-dark transition-colors duration-300">Book Now</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
