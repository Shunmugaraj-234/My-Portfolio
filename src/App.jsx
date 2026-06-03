import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    const targetElements = document.querySelectorAll('.animate-on-scroll');
    targetElements.forEach((el) => observer.observe(el));

    return () => {
      targetElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      <ParticlesBackground isDarkMode={isDarkMode} />

      <div className="relative z-10">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <Hero />
          </div>

          <hr className="border-slate-200/50 dark:border-slate-800/50 max-w-7xl mx-auto" />

          {/* About Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <About />
          </div>

          <hr className="border-slate-200/50 dark:border-slate-800/50 max-w-7xl mx-auto" />

          {/* Skills Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <Skills />
          </div>

          <hr className="border-slate-200/50 dark:border-slate-800/50 max-w-7xl mx-auto" />

          {/* Coding Profiles Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <CodingProfiles />
          </div>

          <hr className="border-slate-200/50 dark:border-slate-800/50 max-w-7xl mx-auto" />

          {/* Projects Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <Projects />
          </div>

          <hr className="border-slate-200/50 dark:border-slate-800/50 max-w-7xl mx-auto" />

          {/* Experience Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <Experience />
          </div>

          <hr className="border-slate-200/50 dark:border-slate-800/50 max-w-7xl mx-auto" />

          {/* Certifications Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <Certifications />
          </div>

          <hr className="border-slate-200/50 dark:border-slate-800/50 max-w-7xl mx-auto" />

          {/* Contact Section */}
          <div className="animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
            <Contact />
          </div>

        </main>

        <Footer />
      </div>

      {/* Scroll-to-top */}
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-brand-blue dark:bg-brand-purple text-white shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

export default App;
