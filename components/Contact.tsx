import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  // IMPORTANT: Replace with your own Formspree endpoint from formspree.io
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/your_unique_id";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I am actively seeking opportunities in Clinical Data Management, Pharmacovigilance, or Clinical Research Coordination. 
              Let's discuss how my skills can contribute to your team's success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    View Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-red-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <span className="text-slate-400">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            {submissionStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full text-center bg-green-900/50 p-8 rounded-lg">
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                <p className="text-slate-300 mt-2">Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-clinical-500 transition-colors" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-clinical-500 transition-colors" placeholder="email@example.com" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                    <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-clinical-500 transition-colors" placeholder="How can I help you?" required></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={submissionStatus === 'submitting'}
                    className="w-full bg-clinical-600 hover:bg-clinical-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed"
                  >
                    {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    {submissionStatus !== 'submitting' && <Send size={16} />}
                  </button>
                  {submissionStatus === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 bg-red-900/50 p-3 rounded-lg mt-4">
                      <XCircle size={20} />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Seema S L. All rights reserved.</p>
          <p className="mt-2">Designed with precision for Clinical Research Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;