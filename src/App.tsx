import React, { useState } from 'react';
import { Menu, X, Mail, Linkedin, GraduationCap, MapPin, Award as AwardIcon } from 'lucide-react';
import { data } from './data';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Publications', href: '#publications' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-red-200 selection:text-red-900">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white border-b border-slate-200 shadow-sm z-50 fixed top-0 w-full">
        <div className="text-red-900 font-bold text-xl tracking-tight font-serif">{data.profile.name}</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600 uppercase tracking-wider">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="hover:text-red-900 cursor-pointer transition-colors">{link.name}</a>
          ))}
          <a href="#contact" className="hover:text-red-900 cursor-pointer transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[69px] left-0 w-full bg-white shadow-md border-b border-slate-100 py-4 flex flex-col items-center space-y-4 z-40">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-red-900 uppercase tracking-wider w-full text-center py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="text-sm font-medium text-slate-600 hover:text-red-900 uppercase tracking-wider w-full text-center py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 pt-[69px]">
        {/* Sidebar (Hero / Contact / About) */}
        <aside id="about" className="w-full md:w-[320px] bg-red-900 text-white p-8 flex flex-col md:fixed md:h-[calc(100vh-69px)] md:overflow-y-auto shrink-0 z-10">
          <div>
            <div className="w-32 h-32 rounded-full mb-6 border-4 border-red-700 mx-auto flex items-center justify-center overflow-hidden shadow-inner bg-red-800">
              <img src="/manthan-1.jpeg" alt="Dr. Manthan Jethwani" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h2 className="text-2xl font-bold mb-1 text-center font-serif">{data.profile.name.replace('Dr. ', '')}</h2>
            <p className="text-red-100 text-[11px] text-center uppercase tracking-widest mb-6 opacity-80">{data.profile.designation}</p>
            
            <div className="space-y-4 text-sm leading-relaxed opacity-90 border-t border-red-800 pt-6">
              <p>{data.profile.about}</p>
              <div className="bg-red-800 p-4 rounded-lg italic text-red-100 text-xs leading-relaxed">
                "{data.profile.tagline}"
              </div>
            </div>
          </div>

          <div id="contact" className="space-y-3 mt-8 border-t border-red-800 pt-6">
            <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 text-xs hover:text-red-200 transition-colors">
              <span className="w-6 h-6 bg-red-800 flex items-center justify-center rounded"><Mail size={12} /></span>
              <span className="truncate">{data.contact.email}</span>
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs hover:text-red-200 transition-colors">
              <span className="w-6 h-6 bg-red-800 flex items-center justify-center rounded"><Linkedin size={12} /></span>
              <span className="truncate">LinkedIn Profile</span>
            </a>
            <a href={data.contact.googleScholar} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs hover:text-red-200 transition-colors">
              <span className="w-6 h-6 bg-red-800 flex items-center justify-center rounded"><GraduationCap size={12} /></span>
              <span className="truncate">Google Scholar</span>
            </a>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-6 h-6 bg-red-800 flex items-center justify-center rounded shrink-0"><MapPin size={12} /></span>
              <span>{data.contact.office}</span>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 md:p-10 md:ml-[320px] grid grid-cols-1 md:grid-cols-2 gap-10 content-start bg-slate-50">
          
          {/* Research Interests */}
          <section id="research" className="md:col-span-2">
            <h3 className="text-red-900 text-lg font-bold mb-4 uppercase tracking-tighter border-b pb-1 font-serif">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {data.researchInterests.map((interest, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-slate-200 text-xs rounded-full text-slate-600 shadow-sm hover:border-red-300 transition-colors cursor-default">
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section id="publications" className="space-y-4 md:col-span-1">
            <h3 className="text-red-900 text-lg font-bold border-b pb-1 font-serif">Selected Publications</h3>
            <ul className="space-y-4 text-sm">
              {data.publications.map((pub, idx) => (
                <li key={idx} className="border-l-2 border-red-100 pl-4">
                  <div className="font-semibold text-slate-800">{pub.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{pub.venue}, {pub.year}</div>
                </li>
              ))}
            </ul>
          </section>

          {/* Teaching */}
          <section id="teaching" className="space-y-4 md:col-span-1">
            <h3 className="text-red-900 text-lg font-bold border-b pb-1 font-serif">Teaching</h3>
            <div className="grid grid-cols-1 gap-3">
              {data.courses.map((course, idx) => (
                <div key={idx} className="p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="text-xs font-bold text-slate-700">{course.title}</div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-1">{course.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Timeline */}
          <section id="experience" className="space-y-4 md:col-span-1">
            <h3 className="text-red-900 text-lg font-bold border-b pb-1 font-serif">Professional Timeline</h3>
            <div className="space-y-4">
              {data.experience.map((exp, idx) => (
                <div key={idx} className={`relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full ${idx === 0 ? 'before:bg-red-900' : 'before:bg-slate-300'}`}>
                  <div className="text-xs font-bold text-slate-800">{exp.position}{exp.organization ? `, ${exp.organization}` : ''}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{exp.years}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="space-y-4 md:col-span-1">
            <h3 className="text-red-900 text-lg font-bold border-b pb-1 font-serif">Awards</h3>
            <div className="space-y-3">
              {data.awards.map((award, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <AwardIcon className="text-amber-500 w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-800">{award.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{award.organization ? `${award.organization} ` : ''}({award.year})</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer inside main content to align correctly */}
          <footer className="md:col-span-2 mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest gap-2">
            <span>© {new Date().getFullYear()} {data.profile.name}</span>
            <div className="flex gap-4 text-center sm:text-right">
              <span>{data.profile.university}</span>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}
