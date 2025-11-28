import React from 'react';
import { ArrowRight, ChevronDown, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import profileImage from './img/1.jpeg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-clinical-50">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-clinical-100 opacity-30 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-teal-50 opacity-30 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-100 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image / Visual Section - NOW ON LEFT */}
          <div className="flex-1 relative animate-slide-in-left order-1 lg:order-1">
             <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] mx-auto group">
                <div className="absolute inset-0 bg-gradient-to-tr from-clinical-600 to-teal-400 rounded-[2rem] -rotate-6 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30 group-hover:rotate-0"></div>
                <div className="absolute inset-0 border-2 border-clinical-200/50 rounded-[2rem] rotate-3 transition-transform duration-500 group-hover:rotate-0"></div>
                
                {/* 
                  PLACEHOLDER IMAGE 
                  Replace 'src' below with your actual photo URL.
                  The object-position 'top' helps frame headshots better.
                */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={profileImage} 
                    alt="Dr. Seema S L" 
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient for Text Readability if needed, though mostly clear */}
                  <div className="absolute inset-0 bg-gradient-to-t from-clinical-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating Badges */}
                <div className="absolute -right-2 md:-right-6 top-12 bg-white/90 backdrop-blur-sm p-2 md:p-4 rounded-xl shadow-xl z-20 flex items-center gap-2 md:gap-3 animate-float border border-white/50">
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-inner">
                    <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Certified</p>
                    <p className="text-xs md:text-base font-bold text-slate-800">GCP & CDM</p>
                  </div>
                </div>

                <div className="absolute -left-2 md:-left-6 bottom-16 bg-white/90 backdrop-blur-sm p-2 md:p-4 rounded-xl shadow-xl z-20 flex items-center gap-2 md:gap-3 animate-float border border-white/50" style={{ animationDelay: '1.5s' }}>
                  <div className="w-6 h-6 md:w-12 md:h-12 bg-clinical-100 rounded-full flex items-center justify-center text-clinical-600 shadow-inner">
                    <svg className="w-3 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Research</p>
                    <p className="text-xs md:text-base font-bold text-slate-800">Specialist</p>
                  </div>
                </div>
             </div>
          </div>
          
          {/* Text Content - NOW ON RIGHT */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-clinical-100 text-clinical-700 font-medium text-sm shadow-md hover:shadow-lg transition-shadow">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinical-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-clinical-500"></span>
                </span>
                Pharm D Graduate • 76.34% Aggregate
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1] font-serif animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Hello, I am <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-clinical-600 to-teal-500 relative">
                {PERSONAL_INFO.name}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-clinical-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {PERSONAL_INFO.tagline} Empowering clinical trials through robust <strong>Data Management</strong>, <strong>Pharmacovigilance</strong>, and <strong>Regulatory Compliance</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a 
                href="#expertise" 
                className="w-full sm:w-auto px-8 py-4 bg-clinical-600 text-white rounded-xl font-semibold hover:bg-clinical-700 transition-all shadow-lg shadow-clinical-500/30 flex items-center justify-center gap-2 hover:-translate-y-1 hover:scale-105 active:scale-95"
              >
                Explore Expertise
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-clinical-300 hover:text-clinical-600 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-slate-400 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-clinical-600 transition-colors group">
                 <div className="p-2 rounded-full bg-slate-100 group-hover:bg-clinical-50 transition-colors">
                    <Linkedin size={20} />
                 </div>
                 <span className="font-medium text-slate-600">LinkedIn Profile</span>
               </a>
               <div className="h-6 w-px bg-slate-300"></div>
               <span className="text-sm font-medium text-slate-500">Open for CDM, CRC, PV Roles</span>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-300 cursor-pointer hover:text-clinical-500 transition-colors">
        <a href="#about"><ChevronDown size={32} /></a>
      </div>
    </section>
  );
};

export default Hero;
