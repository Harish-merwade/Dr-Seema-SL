import React from 'react';
import { SKILLS } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

const Skills: React.FC = () => {
  // Filter for radar chart data (Core & Soft skills fit best)
  const radarData = SKILLS.filter(s => s.category !== 'Tech').map(s => ({
    subject: s.name.split(" ")[0], // Shorten name for chart
    A: s.proficiency,
    fullMark: 100,
  }));

  const categories = ['Core', 'Tech', 'Soft'] as const;

  return (
    <section id="expertise" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Technical & Clinical Proficiency</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A balanced skillset bridging medical knowledge with data management tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Chart Section */}
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-center mb-4 text-slate-700">Competency Distribution</h3>
            <div className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#0284c7"
                    strokeWidth={2}
                    fill="#0ea5e9"
                    fillOpacity={0.3}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Skill Lists */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat} className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 ${cat === 'Tech' ? 'md:col-span-2' : ''}`}>
                <h3 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">{cat} Competencies</h3>
                <div className="space-y-4">
                  {SKILLS.filter(s => s.category === cat).map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-end mb-1">
                        <span className="text-slate-700 font-medium text-sm">{skill.name}</span>
                        <span className="text-slate-400 text-xs">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${cat === 'Core' ? 'bg-clinical-500' : cat === 'Tech' ? 'bg-teal-500' : 'bg-indigo-500'}`}
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;