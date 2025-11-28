import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Certifications & Credentials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="group relative bg-white border border-slate-200 rounded-xl p-6 hover:border-clinical-400 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                 <Award className="text-clinical-500" size={40} />
              </div>
              
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                  <Award size={20} />
                </div>
              </div>
              
              <h3 className="font-bold text-slate-900 mb-1 pr-8">{cert.name}</h3>
              <p className="text-sm text-slate-500 mb-4 flex-grow">{cert.issuer} • {cert.date}</p>
              
              <a 
                href={cert.link || "#"} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center text-sm font-medium text-clinical-600 hover:text-clinical-800 transition-colors mt-auto"
                onClick={(e) => { if(!cert.link) e.preventDefault(); }}
              >
                Verify Credential <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a 
             href="https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
             target="_blank"
             rel="noreferrer" 
             className="text-slate-500 text-sm hover:text-clinical-600 underline"
           >
             View full verification folder on Google Drive
           </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;