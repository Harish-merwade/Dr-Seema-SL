import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Award, BookOpen, GraduationCap, User, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-clinical-50 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-clinical-600 font-semibold tracking-wider uppercase text-sm">Professional Profile</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 font-serif">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Main Text */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-clinical-50/50 p-8 rounded-2xl border border-clinical-100 relative">
              {/* Quote Mark Decoration */}
              <div className="absolute -top-4 -left-2 text-6xl text-clinical-200 font-serif leading-none opacity-50">“</div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif relative z-10">
                Hello, I am <span className="text-clinical-700">{PERSONAL_INFO.name}</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed text-justify relative z-10">
                {PERSONAL_INFO.summary}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all hover:border-clinical-200">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={120} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <GraduationCap className="text-clinical-600" />
                Education Background
              </h3>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Doctor of Pharmacy (Pharm D)</h4>
                <p className="text-slate-600 font-medium text-sm mb-3">The Oxford College of Pharmacy, Bengaluru</p>
                <div className="flex flex-wrap gap-4 mt-3">
                   <span className="inline-flex items-center px-3 py-1 bg-teal-50 text-teal-700 text-sm font-bold rounded-full border border-teal-100">
                     <Award size={14} className="mr-1"/> 76.34% Aggregate
                   </span>
                   <span className="inline-flex items-center px-3 py-1 bg-slate-50 text-slate-600 text-sm font-medium rounded-full border border-slate-200">
                     <BookOpen size={14} className="mr-1"/> 2019–2025
                   </span>
                </div>
                <div className="mt-5 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm">
                  <p className="font-semibold text-slate-700 mb-1">Key Workshop:</p>
                  <p className="text-slate-600">"Pharmacovigilance" conducted by EDUFABRICA at Indian Institute of Science (IISc), Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements & Languages Grid */}
          <div className="flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
             
             {/* Achievements */}
             <div className="mb-2">
               <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                 <User className="text-clinical-600" size={24}/>
                 Leadership & Impact
               </h3>
               <p className="text-slate-500">Demonstrated commitment beyond academics.</p>
             </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PERSONAL_INFO.achievements.map((item, index) => (
                <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${index === 0 ? 'bg-slate-900 text-white border-slate-800 col-span-1 sm:col-span-2' : 'bg-white text-slate-800 border-slate-100'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${index === 0 ? 'bg-white/10 text-teal-300' : 'bg-clinical-50 text-clinical-600'}`}>
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className={`text-sm ${index === 0 ? 'text-slate-400' : 'text-slate-500'}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
             <div className="mt-4">
               <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                 <Languages className="text-clinical-600" size={24}/>
                 Languages Known
               </h3>
               <div className="flex flex-wrap gap-3">
                 {PERSONAL_INFO.languages.map((lang, idx) => (
                   <span key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-medium shadow-sm">
                     {lang}
                   </span>
                 ))}
               </div>
             </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;