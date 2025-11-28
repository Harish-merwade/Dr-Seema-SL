import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Specializations from './components/Specializations';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Specializations />
        <Experience />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;