import React from 'react';

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'Core' | 'Soft' | 'Tech';
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  id?: string;
}

export interface SpecializationData {
  id: 'cdm' | 'crc' | 'pv';
  title: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  techStack: string[];
  processTitle: string;
  processSteps: { title: string; desc: string }[];
}