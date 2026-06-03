import React from 'react';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'GPA (College)', value: '8.0' },
    { label: 'HSC Score', value: '84.3%' },
    { label: 'SSLC Score', value: '74%' },
  ];

  const education = [
    {
      degree: 'B.E. / B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'Sri Eshwar College of Engineering',
      duration: '2024 - 2028',
      description: 'Currently pursuing, maintaining a strong 8.1 GPA (up to IIIrd-sem). Developing deep expertise in intelligence algorithms, data structures, and MERN full-stack architectures.',
    },
    {
      degree: 'Higher Secondary Schooling (HSC)',
      institution: 'AMC Government Higher Secondary School',
      duration: '2022 - 2024',
      description: 'Completed schooling with a focus on Mathematics and Science streams. Achieved 84.3%.',
    },
    {
      degree: 'Secondary Schooling (SSLC)',
      institution: 'AMC Government Higher Secondary School',
      duration: '2021 - 2022',
      description: 'Completed schooling with a strong academic foundation. Achieved 74%.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Biography & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              Biography & Objective
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I am a student at Sri Eshwar College of Engineering, specializing in Artificial Intelligence and Machine Learning (AIML). Alongside my studies, I am an active MERN Stack Developer, focused on creating clean databases, scalable server APIs, and modern responsive user interfaces. 
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              <strong>Objective:</strong> To utilize my solid foundation in MERN stack development and machine learning techniques to contribute to software teams, build high-performance web products, and continuously learn and refine my technological skills.
            </p>

            {/* Quick Bio Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <MapPin className="h-5 w-5 text-brand-blue" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <Calendar className="h-5 w-5 text-brand-blue" />
                <span>Open to Internships / Collaborations</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glassmorphism-card p-4 rounded-2xl text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-brand-purple" />
              Education
            </h3>

            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-brand-purple border-2 border-white dark:border-slate-900 shadow-md" />
                  
                  <div className="space-y-1">
                    <span className="inline-block text-xs font-semibold text-brand-purple bg-brand-purple/10 px-2 py-0.5 rounded-full mb-1">
                      {edu.duration}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
