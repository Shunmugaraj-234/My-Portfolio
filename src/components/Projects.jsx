import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import examRoadmapImg from '../assets/exam_roadmap.png';
import weatherPredictionImg from '../assets/weather_prediction.png';
import foodDeliveryImg from '../assets/cv_analyzer.png'; // Reused generated mockup asset

const Projects = () => {
  const projects = [
    {
      title: 'Gov Exam Roadmap (Ongoing)',
      description: 'An interactive milestone and study roadmap system designed for students preparing for national-level competitive exams (UPSC, SSC, Bank PO). Helps track curriculum coverage, test metrics, and calendar timelines.',
      image: examRoadmapImg,
      tags: ['React.js', 'Tailwind CSS', 'JSON Structure', 'Responsive Design'],
      github: 'https://github.com/Shunmugaraj-234/Full-Stack-Project',
      demo: 'https://full-stack-project-kappa-red.vercel.app/',
    },
    {
      title: 'Weather Prediction System',
      description: 'An intelligent forecasting application using LSTM and ARIMA models to predict local and regional climate shifts. Visualizes real-time prediction data graphs and utilizes RESTful API parameters.',
      image: weatherPredictionImg,
      tags: ['Python', 'LSTM', 'ARIMA', 'Data Visualization', 'API Integration'],
      github: 'https://github.com/Shunmugaraj-234/WeatherApp',
      demo: 'https://example.com',
    },
    {
      title: 'Online Food Delivery System',
      description: 'A full-stack food delivery application supporting real-time order status tracking, secure checkout validation, and a dashboard mapping order logistics between food hubs.',
      image: foodDeliveryImg,
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/Shunmugaraj-234',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            A selection of technical projects showing my coding abilities in full-stack web architectures and analytical machine learning pipelines.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto rounded-full mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glassmorphism-card rounded-2xl overflow-hidden flex flex-col group h-full relative"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue dark:group-hover:text-brand-purple transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-purple transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-purple transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
