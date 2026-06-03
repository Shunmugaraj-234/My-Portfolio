import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Introduction to C',
      issuer: 'Sololearn',
      date: 'Issued 2024',
      credentialId: 'SL-C-101',
      link: 'https://sololearn.com',
    },
    {
      title: 'SQL basic program',
      issuer: 'Hackerrank',
      date: 'Issued 2025',
      credentialId: 'HR-SQL-BASIC',
      link: 'https://hackerrank.com',
    },
    {
      title: 'Placement orientation program',
      issuer: 'CodeEmy',
      date: 'Issued 2025',
      credentialId: 'CE-POP-2025',
      link: 'https://example.com',
    },
    {
      title: 'The Complete introduction in Python',
      issuer: 'Infosys',
      date: 'Issued 2025',
      credentialId: 'INFY-PY-COMP',
      link: 'https://infosys.com',
    },
    {
      title: 'The Complete introduction in c and c++',
      issuer: 'Udemy',
      date: 'Issued 2025',
      credentialId: 'UDEMY-CPP-2025',
      link: 'https://udemy.com',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Certifications & Badges
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glassmorphism-card p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:bg-brand-blue/10 dark:group-hover:bg-brand-purple/10 text-slate-600 dark:text-slate-400 group-hover:text-brand-blue dark:group-hover:text-brand-purple transition-all duration-300">
                  <Award className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Verified
                </span>
              </div>

              {/* Certificate Details */}
              <div className="space-y-2 flex-grow mb-6">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand-blue dark:group-hover:text-brand-purple transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {cert.issuer}
                </p>
                <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-500 pt-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Footer ID & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                  ID: {cert.credentialId}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-brand-purple transition-all duration-300"
                  aria-label="View Credential"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              {/* Corner soft glow */}
              <div className="absolute -left-10 -bottom-10 w-20 h-20 bg-brand-purple/5 blur-xl rounded-full group-hover:scale-150 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
