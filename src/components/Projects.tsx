import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { cn } from '../lib/utils';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0B1121] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Selected Work</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                    A showcase of projects that demonstrate my expertise in full-stack development, cloud architecture, and user experience design.
                </p>
            </div>
            <a href="https://github.com/Hussen-ghadban" target="_blank" className="text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-2 hover:underline">
                View Github <ArrowUpRight size={18} />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {PROJECTS_DATA.map((project, index) => {
            // Make some cards span 2 cols for "Bento" look
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                    "group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl dark:hover:shadow-indigo-500/10 hover:-translate-y-1",
                    isLarge ? "md:col-span-2" : "md:col-span-1"
                )}
              >
                {/* Abstract Background Gradient */}
                <div className={cn(
                    "absolute inset-0 opacity-20 dark:opacity-10 transition-transform duration-500 group-hover:scale-105",
                    index % 3 === 0 ? "bg-gradient-to-br from-indigo-500 to-purple-500" :
                    index % 3 === 1 ? "bg-gradient-to-br from-blue-500 to-teal-500" :
                    "bg-gradient-to-br from-orange-500 to-red-500"
                )} />

                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                                <Github size={20} />
                            </div>
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                                {project.tags[0]}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.slice(1, 4).map((tag, i) => (
                            <span key={i} className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                                #{tag}
                            </span>
                        ))}
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