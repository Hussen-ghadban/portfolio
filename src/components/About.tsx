import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0B1121] relative z-20">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
        >
            <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-4 text-center">Who I Am</h2>
            <div className="text-2xl md:text-4xl font-light text-slate-800 dark:text-slate-200 text-center leading-normal md:leading-relaxed">
                <p className="mb-8">
                    I'm a <span className="font-semibold text-slate-900 dark:text-white">Full Stack Developer</span> based in Beirut. 
                    I build web applications that look good and work even better.
                </p>
                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-normal">
                    Currently at 3E-Tech. I specialize in the MERN stack, TypeScript, and AWS. 
                    I focus on clean code, performance, and delivering real value through technology.
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;