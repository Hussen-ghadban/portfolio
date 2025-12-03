import { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#0B1121] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-20 bottom-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">
            Ready to build something <span className="text-indigo-600 dark:text-indigo-500">amazing?</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time positions. Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SOCIAL_LINKS.map((link, index) => (
            <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>
                <div className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex items-center justify-between gap-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <div className="flex items-center gap-4 overflow-hidden">
                        <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            <link.icon size={24} />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{link.name}</span>
                            <span className="text-base font-medium text-slate-900 dark:text-slate-100 truncate">{link.value}</span>
                        </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                        {link.copyable ? (
                            <button
                                onClick={() => handleCopy(link.value, link.name)}
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            >
                                {copiedKey === link.name ? <Check size={20} className="text-green-500" /> : <Copy size={20} className="text-slate-400" />}
                            </button>
                        ) : (
                            <a 
                                href={link.href}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors block"
                            >
                                <ArrowUpRight size={20} className="text-slate-400 group-hover:text-indigo-500" />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;