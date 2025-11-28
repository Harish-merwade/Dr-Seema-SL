import React, { useState, useEffect } from 'react';
import { SPECIALIZATIONS } from '../constants';
import { CheckCircle2, ArrowRight, ChevronRight, Layout, Settings, FileSearch, Database } from 'lucide-react';

const Specializations: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SPECIALIZATIONS[0].id);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (id: 'cdm' | 'crc' | 'pv') => {
    if (activeTab === id) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const activeSpec = SPECIALIZATIONS.find(s => s.id === activeTab) || SPECIALIZATIONS[0];

  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-clinical-600 font-semibold tracking-wider uppercase text-sm bg-clinical-50 px-3 py-1 rounded-full">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 font-serif">Specialized Focus Areas</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Deep expertise in managing the full lifecycle of clinical data and safety reporting.
          </p>
        </div>

        {/* Custom Slide Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl shadow-inner relative z-10">
            {SPECIALIZATIONS.map((spec) => (
              <button
                key={spec.id}
                onClick={() => handleTabChange(spec.id)}
                className={`relative px-6 md:px-10 py-3 rounded-xl font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
                  activeTab === spec.id
                    ? 'text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {activeTab === spec.id && (
                  <div className="absolute inset-0 bg-clinical-900 rounded-xl -z-10 animate-fade-in-up" style={{animationDuration: '0.3s'}}></div>
                )}
                <spec.icon size={18} />
                <span className="hidden md:inline">{spec.title}</span>
                <span className="md:hidden">{spec.id.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Slide Content Area */}
        <div className={`transition-all duration-300 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
              
              {/* Left Column: Details & Tech */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 flex-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-clinical-50 rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-clinical-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-clinical-500/30">
                      <activeSpec.icon size={32} />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">{activeSpec.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-8 border-l-4 border-clinical-300 pl-4 italic">
                      {activeSpec.description}
                    </p>
                    
                    <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Settings size={18} className="text-clinical-500" />
                        Key Proficiencies
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {activeSpec.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                            <CheckCircle2 size={18} className="text-teal-500 shrink-0" />
                            <span className="text-slate-700 text-sm font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100">
                       <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Database size={18} className="text-clinical-500" />
                          Technical Stack
                       </h4>
                       <div className="flex flex-wrap gap-2">
                          {activeSpec.techStack.map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-800 text-white text-xs font-bold uppercase rounded-md shadow-md tracking-wide">
                              {tech}
                            </span>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Creative Process Diagram */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white h-full relative overflow-hidden flex flex-col justify-center">
                  
                  {/* Abstract Tech Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(14,165,233,0.3),_transparent_70%)]"></div>
                    <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150 opacity-10">
                       {[...Array(24)].map((_, i) => (
                         <div key={i} className="h-20 bg-white/10 rounded-xl"></div>
                       ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-center mb-12">
                      <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-3">
                        <FileSearch className="text-teal-400" />
                        {activeSpec.processTitle}
                      </h3>
                      <p className="text-slate-400 text-sm">Standard Operating Procedure Workflow</p>
                    </div>

                    <div className="space-y-6">
                      {activeSpec.processSteps.map((step, idx) => (
                        <div key={idx} className="relative group">
                          {/* Connecting Line */}
                          {idx < activeSpec.processSteps.length - 1 && (
                            <div className="absolute left-6 top-10 w-0.5 h-16 bg-gradient-to-b from-teal-500 to-slate-700 z-0"></div>
                          )}
                          
                          <div className="flex items-center gap-6 relative z-10">
                             <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-teal-500 flex items-center justify-center font-bold text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.3)] group-hover:scale-110 transition-transform duration-300">
                               {idx + 1}
                             </div>
                             <div className="flex-1 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2">
                                <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                             </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

export default Specializations;