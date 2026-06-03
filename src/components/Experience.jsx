import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      company: 'Better Tomorrow',
      role: 'MERN Stack Developer Intern',
      duration: 'Dec 2025 - Jan 2026',
      responsibilities: [
        'Built and deployed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN Stack).',
        'Implemented robust token-based authentication modules, standard CRUD operations, and structured RESTful APIs.',
        'Successfully configured and deployed host environments on AWS, utilizing EC2 server instances and AWS Amplify pipelines.',
        'Maintained code version integrity, managing branches and pull requests using Git & GitHub for collaboration.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Internships & Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
          {internships.map((job, index) => (
            <div key={index} className="relative">
              {/* Timeline Icon Node */}
              <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-brand-blue border-4 border-slate-50 dark:border-[#030712] shadow-md">
                <Briefcase className="h-3.5 w-3.5 text-white" />
              </span>

              {/* Job Details Card */}
              <div className="glassmorphism-card p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {job.role}
                    </h3>
                    <p className="text-base font-semibold text-brand-blue dark:text-brand-purple">
                      {job.company}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>{job.duration}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <ul className="space-y-3 pt-2">
                  {job.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
