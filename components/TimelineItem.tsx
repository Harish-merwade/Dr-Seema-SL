import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Star } from 'lucide-react';
import { Project } from '../types';

interface TimelineItemProps {
  project: Project;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50, x: isEven ? -50 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={`relative z-10 mb-20 md:mb-32 flex flex-col md:items-center group ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      {/* Timeline Center Dot */}
      <div className="absolute left-6 md:left-1/2 w-10 h-10 rounded-full bg-clinical-600 border-[6px] border-white shadow-xl transform -translate-x-1/2 z-20 hidden md:flex items-center justify-center text-white">
        <Star size={14} fill="white" />
      </div>

      {/* Mobile Timeline Line Fix */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>

      {/* Content Card */}
      <div
        className={`md:w-1/2 ${
          isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'
        } pl-16 md:ml-0 relative`}
      >
        {/* Date Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clinical-100 text-clinical-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm border border-clinical-200 ${
            isEven ? 'md:flex-row-reverse' : ''
          }`}
        >
          <Calendar size={14} />
          {project.period}
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-clinical-500"></div>

          <div
            className={`flex flex-col mb-4 ${
              isEven ? 'md:items-end' : 'md:items-start'
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-clinical-600 transition-colors">
              {project.title}
            </h3>
            <span className="text-slate-500 font-medium text-sm mt-1">
              {project.role}
            </span>
          </div>

          <p className="text-slate-600 mb-6 italic text-sm leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
            "{project.description}"
          </p>

          <div
            className={`space-y-3 flex flex-col ${
              isEven ? 'md:items-end' : 'md:items-start'
            }`}
          >
            {project.achievements.map((ach, i) => (
              <div
                key={i}
                className={`flex gap-3 text-sm text-slate-700 leading-snug ${
                  isEven ? 'md:flex-row-reverse md:text-right' : 'flex-row text-left'
                }`}
              >
                <CheckCircle2
                  size={16}
                  className="text-teal-500 mt-0.5 shrink-0"
                />
                <span>{ach}</span>
              </div>
            ))}
          </div>

          <div
            className={`mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2 ${
              isEven ? 'md:justify-end' : 'md:justify-start'
            }`}
          >
            {project.skillsUsed.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white text-slate-600 text-xs font-semibold rounded-md border border-slate-200 shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Empty space for the other side */}
      <div className="md:w-1/2"></div>
    </motion.div>
  );
};

export default TimelineItem;
