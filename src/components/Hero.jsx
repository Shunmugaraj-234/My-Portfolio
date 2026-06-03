import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = [
    'MERN Stack Developer',
    'AIML Enthusiast',
    'Competitive Coder',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 120);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, href: 'https://github.com/Shunmugaraj-234', label: 'GitHub' },
    { icon: <Linkedin className="h-6 w-6" />, href: 'https://www.linkedin.com/in/shunmugaraj-r-089372355', label: 'LinkedIn' },
    { icon: <Mail className="h-6 w-6" />, href: 'mailto:shunmugaraj.r2024aiml@sece.ac.in', label: 'Email' },
  ];

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Dynamic Background Glows */}
      <div className="glow-bg top-1/4 left-1/4 w-96 h-96 bg-brand-blue/30 dark:bg-brand-blue/20" />
      <div className="glow-bg bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/30 dark:bg-brand-purple/20 animate-pulse-slow" />

      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center">
        {/* Profile Image with Glow Effect */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-float" />
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-200 dark:bg-slate-800">
            <img
              src={profileImg}
              alt="Shunmugaraj R Profile"
              className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80';
              }}
            />
          </div>
        </div>

        {/* Introduction */}
        <h2 className="text-lg sm:text-xl font-semibold text-brand-blue dark:text-brand-purple tracking-widest uppercase mb-3">
          Welcome to my portfolio
        </h2>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent">Shunmugaraj R</span>
        </h1>

        {/* Animated Typing Effect */}
        <div className="h-10 sm:h-12 mb-6">
          <span className="text-xl sm:text-3xl font-medium text-slate-700 dark:text-slate-300 typing-caret">
            {text}
          </span>
        </div>

        <p className="max-w-xl text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          I am a specialized MERN Stack Developer and AIML student, dedicated to building responsive, scalable full-stack web solutions and intelligent forecasting systems.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
          <a
            href="./resume.pdf"
            download="Shunmugaraj_R_Resume.pdf"
            className="flex items-center justify-center space-x-2 px-8 py-3 rounded-full text-white bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-blue/30 dark:shadow-brand-purple/20"
          >
            <FileText className="h-5 w-5" />
            <span>Download Resume</span>
          </a>
          <button
            onClick={handleScrollToContact}
            className="flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 glassmorphism hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
          >
            <span>Let's Talk</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-purple hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 shadow-md border border-slate-200/50 dark:border-slate-800/50 glassmorphism"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bounce Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10 hidden sm:block">
        <button
          onClick={() => {
            const about = document.getElementById('about');
            if (about) {
              window.scrollTo({ top: about.offsetTop - 80, behavior: 'smooth' });
            }
          }}
          className="p-2 text-slate-400 hover:text-brand-blue dark:hover:text-brand-purple"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
