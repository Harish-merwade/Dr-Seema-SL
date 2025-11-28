import { GraduationCap, Database, ShieldCheck, Activity, Users, FileText, ClipboardList, BookOpen, HeartPulse, Stethoscope, Scale, Languages } from 'lucide-react';
import { Certification, Project, Skill, SpecializationData } from './types';

import cdmResume from './components/pdf/Seema S L CDM.pdf';
import crcResume from './components/pdf/Seema S L CRC.pdf';
import pvResume from './components/pdf/Seema S L PV.pdf';

export const PERSONAL_INFO = {
  name: "Dr. Seema S L",
  title: "Pharm D Graduate | CDM, CRC & PV Specialist",
  tagline: "Bridging clinical expertise with data precision and regulatory compliance.",
  email: "seemasanvi125@gmail.com",
  linkedin: "https://www.linkedin.com/in/dr-seema-s-l-a71030213/",
  location: "India",
  summary: "Pharm D graduate with strong knowledge of pharmacovigilance processes, ICSR handling, and AE/SAE documentation. Skilled in MedDRA terminology, data accuracy, and regulatory compliance. Familiar with GVP, ICH guidelines, and literature screening workflows. Detail-oriented with strong analytical and medical terminology skills. Seeking to contribute to efficient and compliant drug safety operations.",
  achievements: [
    { title: "Project Lead", icon: Users, desc: "Led academic research initiatives & team coordination." },
    { title: "Class Representative", icon: GraduationCap, desc: "Liaison between faculty and students for 6 consecutive years." },
    { title: "COVID-19 Volunteer", icon: Activity, desc: "Frontline service during critical pandemic phases." }
  ],
  languages: ["English (Proficient)", "Kannada (Proficient)", "Hindi (Proficient)"]
};

export const SKILLS: Skill[] = [
  // Tech
  { name: "Safety Databases (ARGUS/ARISg)", proficiency: 75, category: "Tech" },
  { name: "Medidata Rave/Oracle InForm", proficiency: 80, category: "Tech" },
  { name: "PubMed Literature Search", proficiency: 85, category: "Tech" },
  { name: "Microsoft Office Suite", proficiency: 95, category: "Tech" },
  // Core
  { name: "ICSR Processing", proficiency: 90, category: "Core" },
  { name: "AE/SAE Reporting", proficiency: 90, category: "Core" },
  { name: "MedDRA Coding", proficiency: 85, category: "Core" },
  { name: "Causality Assessment", proficiency: 80, category: "Core" },
  { name: "GVP & ICH Regulations", proficiency: 90, category: "Core" },
  { name: "SOP Compliance", proficiency: 95, category: "Core" },
  // Soft
  { name: "Medical Terminology", proficiency: 100, category: "Soft" },
  { name: "Scientific Communication", proficiency: 90, category: "Soft" },
  { name: "Interprofessional Collaboration", proficiency: 95, category: "Soft" },
];

export const SPECIALIZATIONS: SpecializationData[] = [
  {
    id: 'cdm',
    title: "Clinical Data Management",
    icon: Database,
    description: "Expertise in the end-to-end data lifecycle, from ensuring accurate data collection to final database lock, strictly adhering to regulatory standards.",
    skills: [
      "Data Cleaning & Query Management",
      "eCRF Data Entry & Validation",
      "Data Validation Checks (DVCs)",
      "Discrepancy Management",
      "Data Mapping (Basic)",
      "CDMP Basic Knowledge"
    ],
    techStack: ["Medidata Rave", "Oracle InForm", "Veeva Vault", "Excel"],
    processTitle: "CDM Process Flow",
    processSteps: [
      { title: "Data Collection", desc: "eCRF Entry & Source Verification" },
      { title: "Validation", desc: "DVCs, Edit Checks & Recon" },
      { title: "Discrepancy Mgmt", desc: "Query Generation & Resolution" },
      { title: "DB Lock", desc: "Quality Audit & Final Archival" }
    ]
  },
  {
    id: 'crc',
    title: "Clinical Research Coordinator",
    icon: ClipboardList,
    description: "Proficient in managing site operations with a focus on protocol compliance, patient recruitment, informed consent administration, and adherence to safety monitoring protocols.",
    skills: [
      "Protocol Compliance & SOP Adherence",
      "Informed Consent Process Understanding",
      "ADR & SAE/AE Identification & Reporting",
      "CRF/eCFR Data Entry & Handling",
      "Ethics Committee Submission Basics",
      "Regulatory Compliance & ICH-GCP"
    ],
    techStack: ["EMR Systems", "Site Master File (SMF)", "Subject Logs"],
    processTitle: "Site Management Workflow",
    processSteps: [
      { title: "Start-Up & Ethics", desc: "Site Selection, IRB Submission & Approval" },
      { title: "Recruitment & Consent", desc: "Screening, ICF Process & Enrollment" },
      { title: "Study Conduct", desc: "Protocol Adherence, Safety & CRF Entry" },
      { title: "Close-Out", desc: "Data Reconciliation & Archiving" }
    ]
  },
  {
    id: 'pv',
    title: "Pharmacovigilance",
    icon: ShieldCheck,
    description: "Strong knowledge of pharmacovigilance processes, ICSR handling, and AE/SAE documentation. Skilled in MedDRA terminology and data accuracy.",
    skills: [
      "ICSR Processing & Case Triage",
      "AE/SAE Reporting & Documentation",
      "MedDRA Coding (Basic)",
      "Causality Assessment (Basic)",
      "Safety Database (ARGUS/ARISg) - Basic",
      "SOP Compliance & Quality Review"
    ],
    techStack: ["ARGUS Safety", "ARISg", "PubMed", "MedDRA Browser", "Excel"],
    processTitle: "ICSR Processing Workflow",
    processSteps: [
      { title: "Receipt & Triage", desc: "Validity Check & Prioritization" },
      { title: "Data Entry", desc: "Patient, Product, Event Details" },
      { title: "Assessment", desc: "MedDRA Coding & Causality" },
      { title: "Reporting", desc: "Regulatory Submission (FDA/EMA)" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Assessment of factors affecting QoL",
    role: "Main Academic Project",
    period: "2023",
    description: "Assessment of factors affecting quality of life and effect of patient counselling on treatment adherence among chronic renal failure patients undergoing hemodialysis.",
    skillsUsed: ["Structured Data Collection", "Patient Counselling", "Data Accuracy", "Confidentiality"],
    achievements: [
      "Conducted structured data collection and clinical documentation.",
      "Assisted in patient counselling, therapeutic monitoring, and outcome assessment.",
      "Ensured accuracy, confidentiality, and completeness of recorded data."
    ]
  },
  {
    title: "Bevacizumab-induced Bowel Perforation",
    role: "Author - Safety Case Report",
    period: "2022",
    description: "Authored a detailed safety case report documenting a serious adverse event (SAE) for publication.",
    skillsUsed: ["Medical Writing", "Causality Assessment", "Literature Review", "SAE Reporting"],
    achievements: [
      "Documented a rare SAE: Bevacizumab-induced bowel perforation.",
      "Performed causality assessment using Naranjo Probability Scale.",
      "Conducted extensive literature review to support findings.",
      "Collaborated with clinical team for accurate medical history documentation."
    ]
  },
  {
    title: "Clinical Pharmacist Internship",
    role: "Oxford Medical College, Hospital & Research Centre",
    period: "09/2024 - 11/2025",
    description: "Rotations: General Medicine (6 months), General Surgery (2 months), Orthopedics (2 months), Obstetrics & Gynecology (2 months), Pharmacy (intermediate exposure).",
    skillsUsed: ["Medication Review", "Patient Counseling", "ADR Monitoring", "Evidence-based Guidance"],
    achievements: [
      "Reviewed patient medical records to identify allergies and contraindications for safe medication use.",
      "Counseled patients on medication safety, usage, and potential side effects.",
      "Monitored treatment outcomes, reporting adverse effects to enhance patient care.",
      "Provided evidence-based drug guidance to clinicians and patients, enhancing medication safety and treatment outcomes.",
      "Collaborated with healthcare teams to refine patient treatment plans based on medication reviews."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Pharmacovigilance and Casualty Assessment Workshop", 
    issuer: "Edufabrica (IISc Bangalore)", 
    date: "Jan 2025",
    link: "https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
  },
  { 
    name: "Principles of Clinical Pharmacology", 
    issuer: "NIH", 
    date: "Nov 2025",
    link: "https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
  },
  { 
    name: "Introduction to MedDRA", 
    issuer: "MSSO", 
    date: "Nov 2025",
    link: "https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
  },
  { 
    name: "Basic & Advanced Medical Coding", 
    issuer: "MSSO", 
    date: "Nov 2025",
    link: "https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
  },
  { 
    name: "Good Clinical Practice (ICH-GCP)", 
    issuer: "NIDA Clinical Trials Network", 
    date: "May 2025",
    link: "https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
  },
  { 
    name: "ICH-GCP E6 (R3)", 
    issuer: "The Global Health Network", 
    date: "Nov 2025",
    link: "https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
  },
  { 
    name: "Intro to Principles & Practice of Clinical Research", 
    issuer: "NIH", 
    date: "Nov 2025",
    link: "https://drive.google.com/drive/folders/16bDqX1eFOGdG-7tToSA9yrktQUxCERPY"
  }
];

export const RESUMES = {
  cdm: cdmResume,
  crc: crcResume,
  pv: pvResume,
};