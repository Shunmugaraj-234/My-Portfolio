import React from 'react';
import { Layout, Cpu, Database, Settings, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Layout className="h-6 w-6 text-brand-blue" />,
      skills: [
        { name: 'C / C++', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML & CSS', level: 90 }
      ]
    },
    {
      title: 'Technologies & Frameworks',
      icon: <Cpu className="h-6 w-6 text-brand-purple" />,
      skills: [
        { name: 'ReactJS', level: 90 },
        { name: 'NodeJS', level: 84 },
        { name: 'ExpressJs', level: 82 }
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="h-6 w-6 text-pink-500" />,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 85 }
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: <Settings className="h-6 w-6 text-teal-500" />,
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'AWS (EC2 / Amplify)', level: 78 },
        { name: 'VS Code', level: 90 },
        { name: 'Canva / PowerPoint', level: 85 }
      ]
    },
    {
      title: 'Core Concepts',
      icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
      skills: [
        { name: 'Data Structures & Algorithms (DSA)', level: 82 },
        { name: 'Object-Oriented Programming (OOPs)', level: 85 },
        { name: 'Database Management (DBMS)', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            A comprehensive overview of my coding languages, framework experience, storage management, and developer tools.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="glassmorphism-card p-6 sm:p-8 rounded-2xl group transition-all duration-300 relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-brand-blue dark:text-brand-purple">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft corner glowing accent */}
              <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-brand-blue/5 dark:bg-brand-purple/5 blur-xl rounded-full group-hover:bg-brand-blue/10 dark:group-hover:bg-brand-purple/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
