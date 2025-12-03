import React from 'react';
import { SKILLS_DATA } from '../constants';

interface SkillPillProps {
  name: string;
}
const SkillPill: React.FC<SkillPillProps> = ({ name }) => (
  <div className="inline-flex items-center justify-center px-6 py-3 mr-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-sm backdrop-blur-sm whitespace-nowrap">
    <span className="text-slate-700 dark:text-slate-200 font-medium">{name}</span>
  </div>
);

const Skills = () => {
  const allSkills = SKILLS_DATA.flatMap(category => category.skills);
  const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
        
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Tech Stack</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The tools and technologies I use to build robust applications.
          </p>
        </div>

        <div className="relative w-full overflow-hidden space-y-8">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent pointer-events-none" />

          {/* Row 1: Moving Right */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {row1.map((skill, i) => <SkillPill key={`r1-${i}`} name={skill} />)}
              {row1.map((skill, i) => <SkillPill key={`r1-dup-${i}`} name={skill} />)}
            </div>
          </div>

          {/* Row 2: Moving Left */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {row2.map((skill, i) => <SkillPill key={`r2-${i}`} name={skill} />)}
              {row2.map((skill, i) => <SkillPill key={`r2-dup-${i}`} name={skill} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;