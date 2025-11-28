import React, { useState, useRef, useEffect } from 'react';
import { FileDown, ChevronDown, Database, ClipboardList, ShieldCheck } from 'lucide-react';
import { RESUMES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeModal from './ResumeModal';

type ResumeType = 'cdm' | 'crc' | 'pv';

const resumeOptions = [
  { id: 'cdm' as ResumeType, label: 'CDM Resume', icon: Database, file: RESUMES.cdm },
  { id: 'crc' as ResumeType, label: 'CRC Resume', icon: ClipboardList, file: RESUMES.crc },
  { id: 'pv' as ResumeType, label: 'PV Resume', icon: ShieldCheck, file: RESUMES.pv },
];

const ResumeMenu: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState<ResumeType>('cdm');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResumeClick = (resumeType: ResumeType) => {
    setSelectedResume(resumeType);
    setModalOpen(true);
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  if (isMobile) {
    return (
      <>
        <div className="flex flex-col space-y-2">
          <h3 className="px-2 text-sm font-semibold text-slate-500">View Resume</h3>
          {resumeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleResumeClick(option.id)}
              className="flex items-center gap-3 bg-clinical-50 text-clinical-800 px-4 py-3 rounded-xl font-medium shadow-sm hover:bg-clinical-100 transition-colors text-left w-full"
            >
              <option.icon size={20} />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
        <ResumeModal 
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          initialResume={selectedResume}
        />
      </>
    );
  }

  return (
    <>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 bg-clinical-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-clinical-700 transition-all shadow-lg hover:shadow-clinical-500/30 hover:-translate-y-0.5"
        >
          <FileDown size={18} />
          <span>Resume</span>
          <ChevronDown size={16} className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-10"
            >
              <div className="p-2">
                {resumeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleResumeClick(option.id)}
                    className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-slate-700 hover:bg-clinical-50 hover:text-clinical-700 transition-colors group"
                  >
                    <div className="p-2 bg-clinical-100 rounded-md group-hover:bg-clinical-200 transition-colors">
                      <option.icon className="text-clinical-600" size={20} />
                    </div>
                    <div>
                      <span className="font-semibold">{option.label}</span>
                      <span className="text-xs text-slate-500 block">Click to view</span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ResumeModal 
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        initialResume={selectedResume}
      />
    </>
  );
};

export default ResumeMenu;
