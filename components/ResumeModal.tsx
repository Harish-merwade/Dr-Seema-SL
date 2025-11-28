import React, { useState, useEffect } from 'react';
import { X, Download, Database, ClipboardList, ShieldCheck } from 'lucide-react';
import { RESUMES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

type ResumeType = 'cdm' | 'crc' | 'pv';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialResume: ResumeType;
}

const resumeData = {
  cdm: { label: 'CDM', file: RESUMES.cdm, icon: Database },
  crc: { label: 'CRC', file: RESUMES.crc, icon: ClipboardList },
  pv: { label: 'PV', file: RESUMES.pv, icon: ShieldCheck },
};

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, initialResume }) => {
  const [activeResume, setActiveResume] = useState<ResumeType>(initialResume);

  useEffect(() => {
    setActiveResume(initialResume);
  }, [initialResume]);

  useEffect(() => {
    // Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to re-enable scroll
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentResume = resumeData[activeResume];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Header */}
            <header className="flex items-center justify-between p-4 border-b border-slate-200 shrink-0">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-slate-800">View Resume</h2>
                <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1">
                  {(Object.keys(resumeData) as ResumeType[]).map((key) => {
                    const IconComponent = resumeData[key].icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveResume(key)}
                        className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                          activeResume === key
                            ? 'bg-clinical-600 text-white shadow'
                            : 'text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent size={14} />
                          {resumeData[key].label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={currentResume.file}
                  download={`Seema-SL-Resume-${currentResume.label}.pdf`}
                  className="flex items-center gap-2 bg-clinical-600 text-white px-4 py-2 rounded-full font-medium hover:bg-clinical-700 transition-all text-sm"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </header>

            {/* Body */}
            <div className="flex-grow bg-slate-50">
              <object
                data={currentResume.file}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <div className="flex flex-col items-center justify-center h-full text-slate-500 p-8 text-center">
                  <p className="font-semibold">It appears you don't have a PDF plugin for this browser.</p>
                  <p className="text-sm mt-1">No problem, you can still download the file.</p>
                  <a href={currentResume.file} download={`Seema-SL-Resume-${currentResume.label}.pdf`} className="mt-4 bg-clinical-100 text-clinical-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-clinical-200 transition-colors">
                    Download PDF
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
