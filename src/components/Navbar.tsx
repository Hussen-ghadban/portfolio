import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/utils';
import { Home, User, Code, Briefcase, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: 'hero', icon: Home },
  { name: 'About', href: 'about', icon: User },
  { name: 'Skills', href: 'skills', icon: Code },
  { name: 'Projects', href: 'projects', icon: Briefcase },
  { name: 'Contact', href: 'contact', icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
        setIsVisible(false);
    } else {
        setIsVisible(true);
    }
  });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      // scroll to element with offset
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
            y: isVisible ? 0 : -100, 
            opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="pointer-events-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border border-slate-200 dark:border-slate-800 rounded-full shadow-lg shadow-black/5 px-2 py-2 flex items-center gap-1"
      >
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out",
                  activeSection === link.href
                    ? "text-white" 
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                {activeSection === link.href && (
                    <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <span className="relative z-10 mix-blend-exclusion flex items-center gap-2">
                    <span className="hidden sm:inline">{link.name}</span>
                    <span className="sm:hidden"><link.icon size={18}/></span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />
        <div className="pr-2">
            <ThemeToggle />
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;