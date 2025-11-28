import React from 'react';
import { PROJECTS } from '../constants';
import TimelineItem from './TimelineItem';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-clinical-600 font-semibold tracking-wider uppercase text-sm">Professional Journey</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 font-serif">Experience & Key Projects</h2>
          <p className="mt-4 text-slate-600">Applying clinical knowledge to real-world scenarios.</p>
        </div>

        <div className="relative timeline-line">
          {PROJECTS.map((project, index) => (
            <TimelineItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;