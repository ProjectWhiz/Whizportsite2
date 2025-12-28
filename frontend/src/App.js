import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Load vendor scripts
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = process.env.PUBLIC_URL + src;
        script.async = true;
        script.onload = resolve;
        script.onerror = (error) => {
          console.error(`Failed to load script: ${src}`, error);
          reject(error);
        };
        document.body.appendChild(script);
      });
    };

    // Load all vendor scripts in sequence
    const loadScripts = async () => {
      try {
        await loadScript('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
        await loadScript('/assets/vendor/aos/aos.js');
        await loadScript('/assets/vendor/typed.js/typed.umd.js');
        await loadScript('/assets/vendor/purecounter/purecounter_vanilla.js');
        await loadScript('/assets/vendor/waypoints/noframework.waypoints.js');
        await loadScript('/assets/vendor/isotope-layout/isotope.pkgd.min.js');
        await loadScript('/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js');
        await loadScript('/assets/vendor/glightbox/js/glightbox.min.js');
        await loadScript('/assets/vendor/swiper/swiper-bundle.min.js');
        await loadScript('/assets/js/main.js');
        
        // Initialize AOS
        if (window.AOS) {
          window.AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();

    // Cleanup
    return () => {
      // Remove scripts if needed
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      {/* Preloader */}
      <div id="preloader"></div>
    </div>
  );
}

export default App;
