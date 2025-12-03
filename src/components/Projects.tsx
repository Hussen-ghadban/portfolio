import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { Code, ExternalLink } from 'lucide-react';

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900 dark:text-white">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              A showcase of projects that demonstrate my expertise in full-stack development, 
              cloud architecture, and user experience design.
            </p>
          </div>
          <a 
            href="https://github.com/Hussen-ghadban" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-2 hover:underline transition-colors text-sm sm:text-base"
          >
            View Github
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[280px] sm:auto-rows-[300px] lg:auto-rows-[320px]">
          {PROJECTS_DATA.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            const IconComponent = project.icon || Code;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-500/10 hover:-translate-y-1 ${
                  isLarge ? "sm:col-span-2" : "sm:col-span-1"
                }`}
              >
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 opacity-20 dark:opacity-10 transition-transform duration-500 group-hover:scale-105 ${
                    index % 3 === 0 ? "bg-gradient-to-br from-indigo-500 to-purple-500" :
                    index % 3 === 1 ? "bg-gradient-to-br from-blue-500 to-teal-500" :
                    "bg-gradient-to-br from-orange-500 to-red-500"
                  }`}
                />

                <div className="relative h-full p-5 sm:p-6 lg:p-8 flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-100 dark:bg-slate-700/50 text-indigo-600 dark:text-indigo-400">
                        <IconComponent size={20} className="sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                        {project.tags[0]}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.tags.slice(0, 7).map((tag, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      {/* Website Link */}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors text-xs sm:text-sm font-medium border border-indigo-100 dark:border-indigo-800"
                        >
                          <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                          <span className="hidden xs:inline">Visit Site</span>
                          <span className="xs:hidden">Visit</span>
                        </a>
                      )}
                      
                      {/* App Store Link */}
                      {project.appstore && (
                        <a
                          href={project.appstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-xs sm:text-sm font-medium"
                          title="Download on App Store"
                        >
                          <AppleIcon />
                          <span className="hidden xs:inline">App Store</span>
                          <span className="xs:hidden">iOS</span>
                        </a>
                      )}
                      
                      {/* Play Store Link */}
                      {project.playstore && (
                        <a
                          href={project.playstore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-xs sm:text-sm font-medium"
                          title="Get it on Google Play"
                        >
                          <GooglePlayIcon />
                          <span className="hidden xs:inline">Play Store</span>
                          <span className="xs:hidden">Android</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;