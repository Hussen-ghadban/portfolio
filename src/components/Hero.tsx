import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#0B1121]">
        
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-indigo-500/20 rounded-full blur-[100px] animate-spotlight opacity-0 dark:bg-indigo-500/10"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Radial Gradient to fade edges */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#0B1121] bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-6 z-10 text-center">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-8"
        >
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Open to new opportunities</span>
        </motion.div>

        <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-slate-900 dark:text-white">Hussein </span>
          <span className="text-slate-400 dark:text-slate-500">Ghadban</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Developer architecting <span className="text-indigo-600 dark:text-indigo-400 font-semibold">scalable</span> digital solutions with modern technologies.
        </motion.p>
            
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
            <Button onClick={scrollToProjects} className="h-12 px-8 rounded-full text-base font-medium shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-shadow duration-300 bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                View Projects
            </Button>
            <div className="flex gap-4 sm:ml-4">
                <a href="https://github.com/Hussen-ghadban" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/hussein-ghadban" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:houssenghadban@gmail.com" className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Mail size={20} />
                </a>
            </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-slate-400 dark:text-slate-600" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;