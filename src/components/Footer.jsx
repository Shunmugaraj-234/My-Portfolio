import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/Shunmugaraj-234', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/shunmugaraj-r-089372355', label: 'LinkedIn' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:shunmugaraj.r2024aiml@sece.ac.in', label: 'Email' },
  ];

  return (
    <footer className="relative w-full py-8 mt-12 bg-white/30 dark:bg-[#030712]/30 border-t border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Copyright */}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} Developer Portfolio. All rights reserved.
        </p>

        {/* Middle: Signature */}
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
          <span>Made with</span>
          <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
          <span>using React & Tailwind CSS</span>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-purple hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
