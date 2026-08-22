import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Brain, Eye, MessageSquare, Network, Database, Users, GraduationCap, MapPin, Linkedin, Mail, Award as AwardIcon, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { data } from './data';
import ResponsiveHeroBanner from './components/ui/responsive-hero-banner';

const getIconForInterest = (interest: string) => {
  if (interest.includes("Vision")) return <Eye size={24} />;
  if (interest.includes("Language")) return <MessageSquare size={24} />;
  if (interest.includes("Explainable") || interest.includes("Responsible")) return <Network size={24} />;
  if (interest.includes("Data")) return <Database size={24} />;
  if (interest.includes("Human")) return <Users size={24} />;
  return <Brain size={24} />;
};

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      <ResponsiveHeroBanner 
        badgeLabel="Latest"
        badgeText="Pioneering AI & Machine Learning Research"
        title="Pioneering AI"
        titleLine2="Achievements"
        description="Explore my portfolio showcasing advanced research in artificial intelligence, academic achievements, and specialized systems."
        primaryButtonText="View Portfolio"
        primaryButtonHref="#research"
        secondaryButtonText="Contact Me"
        secondaryButtonHref="#contact"
        ctaButtonText="WhatsApp Me"
        ctaButtonHref="https://wa.me/917990700545"
        partnersTitle="Affiliations & Recognitions"
        navLinks={[
            { label: "Home", href: "#", isActive: true },
            { label: "About", href: "#about" },
            { label: "Research", href: "#research" },
            { label: "Publications", href: "#publications" },
            { label: "Teaching", href: "#teaching" }
        ]}
      />

      {/* AI SERVICES (Expertise) */}
      <section id="research" className="py-24 px-8 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">AI services</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              {data.profile.name} offers advanced research and mentorship in cutting-edge AI and machine learning domains.
            </p>
          </motion.div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {data.researchInterests.map((interest, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="flex flex-col gap-5">
                <div className="w-14 h-14 rounded-full bg-[#4a72d4] flex items-center justify-center text-white shadow-md">
                  {getIconForInterest(interest)}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">{interest}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-8 bg-white border-y border-slate-200 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-sm font-bold tracking-widest uppercase text-blue-600">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            "{data.profile.tagline}"
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {data.profile.about}
          </p>
        </motion.div>
      </section>

      {/* PUBLICATIONS & TEACHING */}
      <section id="publications" className="py-24 px-8 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Publications */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Selected Publications</h2>
            <div className="space-y-6">
              {data.publications.map((pub, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="font-semibold text-lg text-slate-900 mb-2 leading-snug">{pub.title}</div>
                  <div className="text-sm text-slate-600 mb-1">{pub.authors}</div>
                  <div className="text-sm font-medium text-blue-600">{pub.venue}, {pub.year}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
               <a href={data.contact.googleScholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider">
                 View Google Scholar <ChevronRight size={16} />
               </a>
            </div>
          </motion.div>

          {/* Teaching */}
          <motion.div id="teaching" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Teaching</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.courses.map((course, idx) => (
                <div key={idx} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <GraduationCap size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{course.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{course.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* EXPERIENCE & AWARDS */}
      <section id="experience" className="py-24 px-8 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
             <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Professional Timeline</h2>
             <div className="space-y-8">
              {data.experience.map((exp, idx) => (
                <div key={idx} className={`relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full ${idx === 0 ? 'before:bg-blue-600' : 'before:bg-slate-300'}`}>
                  <h4 className="text-xl font-bold text-slate-900">{exp.position}</h4>
                  {exp.organization && <div className="text-slate-600 mt-1">{exp.organization}</div>}
                  <div className="text-sm font-medium text-slate-400 mt-2 uppercase tracking-wider">{exp.years}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Awards & Honors</h2>
            <div className="space-y-6">
              {data.awards.map((award, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-[#f8fafc] rounded-xl border border-slate-100">
                  <AwardIcon className="text-amber-500 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-slate-900">{award.title}</h4>
                    {award.organization && <p className="text-slate-600 mt-1">{award.organization}</p>}
                    <p className="text-sm font-medium text-blue-600 mt-2">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="bg-slate-100 text-slate-900 pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-200 pb-16">
          <div className="lg:col-span-2">
            <div className="font-bold text-3xl tracking-tighter mb-4">Dr. Jethwani</div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-8">
               {data.profile.department}<br/>
               {data.profile.university}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 tracking-wide uppercase text-sm">Contact Info</h4>
            <div className="space-y-4 text-sm text-slate-700">
              <a href={`mailto:${data.contact.email}`} className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <Mail size={16} className="text-blue-500" />
                {data.contact.email}
              </a>
              <a href="tel:+917990700545" className="flex items-center gap-3 hover:text-blue-600 transition-colors">
                <Phone size={16} className="text-blue-500" />
                +91 7990700545
              </a>
              <a href="https://wa.me/917990700545" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-colors">
                <MessageCircle size={16} className="text-[#25D366]" />
                WhatsApp Me
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" />
                {data.contact.office}
              </div>
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-6 tracking-wide uppercase text-sm">Socials</h4>
             <div className="flex gap-4">
                <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href={data.contact.googleScholar} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <GraduationCap size={18} />
                </a>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 uppercase tracking-widest gap-4 text-center">
          <div>© {new Date().getFullYear()} {data.profile.name}</div>
          <div>All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
