import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import VirtualTour from './components/VirtualTour.jsx';
import LocationMap from './components/LocationMap.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Testimonials />
        <VirtualTour />
        <LocationMap />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
