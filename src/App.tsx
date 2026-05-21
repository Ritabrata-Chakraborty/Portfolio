import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { portfolioData } from './data';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin, BookOpen, Code2, Cpu, BrainCircuit, Microchip, Wrench, FileText, Code, Link, MonitorPlay, File, GraduationCap } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Code2, Cpu, BrainCircuit, Microchip, Wrench
};

// Reusable Section Component
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-12 relative z-10 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="theme-section font-semibold mb-8 text-slate-800 tracking-wide"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

export default function App() {
  const { personalInfo, education, publications, experience, skills, projects, achievements } = portfolioData;

  const [selectedTag, setSelectedTag] = useState('All');
  const allTags = ["All", "Simulation", "Vision", "Robotics", "Gen-AI", "CAD/FEM"];
  const filteredProjects = selectedTag === 'All' ? projects : projects.filter(p => p.tags?.includes(selectedTag));

  const [pubFilter, setPubFilter] = useState('All');
  const pubFilters = ["All", "Journal", "Conference", "Patent", "Peer Review"];
  const filteredPubs = pubFilter === 'All'
    ? publications
    : pubFilter === 'Peer Review'
      ? publications.filter(p => p.role === 'Peer Reviewer')
      : publications.filter(p => p.type === pubFilter);

  const getColumnsClass = (count: number) => {
    if (count === 1) return 'columns-1 max-w-[300px] mx-auto';
    if (count === 2) return 'columns-1 sm:columns-2 max-w-[600px] mx-auto';
    if (count === 3) return 'columns-1 sm:columns-2 md:columns-3 max-w-[900px] mx-auto';
    if (count === 4) return 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 max-w-[1200px] mx-auto';
    return 'columns-1 sm:columns-2 md:columns-3 lg:columns-5';
  };

  return (
    <div className="min-h-screen relative font-sans">
      <div className="fixed inset-0 bg-atmosphere pointer-events-none" />
      <BackgroundCanvas />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 border-t-0 bg-opacity-80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-sm font-medium tracking-wide">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full border border-blue-600/30 flex items-center justify-center bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors">
              <span className="text-blue-600 font-bold">RC</span>
            </div>
          </a>
          <div className="hidden md:flex gap-8 text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">About</a>
            <a href="#education" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Education</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Experience</a>
            <a href="#publications" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Publications</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Projects</a>
            <a href="#achievements" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Achievements</a>
            <a href="#blogs" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Blogs</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors uppercase text-xs tracking-widest">Skills</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center relative z-10 px-6 pt-28 pb-20 mt-10 md:mt-0" id="about">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-stretch">
            {/* Left Column: Name & Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-1 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden glass-panel border p-1 shadow-sm bg-white mx-auto">
                  <img src="avatar.webp" alt={personalInfo.name} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div>
                  <h1 className="font-medium mb-2 tracking-wide text-slate-900 uppercase whitespace-nowrap overflow-visible" style={{ fontSize: '1.25rem' }}>
                    {personalInfo.name}
                  </h1>
                  <h2 className="theme-card text-blue-600 font-medium tracking-wide uppercase">
                    Robotics Researcher
                  </h2>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-center gap-3">
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-600 hover:text-blue-600 transition-colors bg-white/60 p-3 rounded-full border border-slate-200 hover:border-blue-300 shadow-sm" title="Email">
                    <Mail size={20} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors bg-white/60 p-3 rounded-full border border-slate-200 hover:border-blue-300 shadow-sm" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors bg-white/60 p-3 rounded-full border border-slate-200 hover:border-blue-300 shadow-sm" title="GitHub">
                    <Github size={20} />
                  </a>
                  {personalInfo.googleScholar && (
                    <a href={personalInfo.googleScholar} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors bg-white/60 p-3 rounded-full border border-slate-200 hover:border-blue-300 shadow-sm" title="Google Scholar">
                      <GraduationCap size={20} />
                    </a>
                  )}
                  {personalInfo.researchGate && (
                    <a href={personalInfo.researchGate} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors bg-white/60 p-3 rounded-full border border-slate-200 hover:border-blue-300 shadow-sm" title="Research Scholar">
                      <BookOpen size={20} />
                    </a>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <a href={personalInfo.portfolio} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 text-white shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] transition-all text-sm font-medium">
                    <ExternalLink size={16} /> Original Portfolio
                  </a>
                  {personalInfo.resume && (
                    <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-slate-200 bg-white/60 text-slate-700 hover:border-blue-300 hover:text-blue-600 hover:bg-white transition-all text-sm font-medium shadow-sm">
                      <FileText size={16} /> Résumé
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Column: About me */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 md:col-span-2 glass-panel p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center"
            >
              <h3 className="theme-section font-mono text-blue-600 mb-6 uppercase tracking-widest">About Me</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed theme-card">
                <p>
                  I am a researcher, engineer, and startup-oriented builder working at the intersection of <strong className="text-slate-900 font-medium">Aerial Robotics</strong>, <strong className="text-slate-900 font-medium">Computer Vision</strong>, and <strong className="text-slate-900 font-medium">Autonomous Navigation</strong>. I develop robust AI systems for perception-degraded and GPS-denied environments, with experience across academia and industry.
                </p>
                <p>
                  I've worked at <strong className="text-slate-900 font-medium">National University of Singapore</strong>, <strong className="text-slate-900 font-medium">KU Leuven</strong>, and <strong className="text-slate-900 font-medium">CSIR-CEERI</strong>, alongside an ML Internship at <strong className="text-slate-900 font-medium">Uber (AI Solutions)</strong>. Incoming <strong className="text-slate-900 font-medium">MSE Robotics student at University of Pennsylvania</strong> (Fall 2026), actively exploring research collaborations and startup opportunities in embodied AI, path planning, embedded intelligence, and multi-agent systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 text-slate-500"
        >
          <ChevronDown size={20} />
        </motion.div>
      </section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="relative">
          {/* Master Timeline Line */}
          <div className="hidden md:block absolute left-[154px] top-6 bottom-4 w-px bg-blue-200 z-0" />
          
          <div className="space-y-6 md:space-y-8">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[130px_48px_1fr] gap-4 md:gap-0 relative z-10"
              >
                {/* Left side: Date */}
                <div className="flex flex-col justify-start pt-4 z-10">
                  <div className="theme-meta font-mono text-slate-500 text-center font-semibold bg-white/60 px-4 py-1 rounded border border-slate-100 hidden md:block">
                    {edu.duration}
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center justify-start pt-6 z-10">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_0_4px_#f0f7fd]" />
                </div>
                
                {/* Right side: Content */}
                <div className="glass-panel p-5 md:p-6 rounded-2xl group hover:border-blue-300 transition-colors h-fit text-left bg-white/40">
                  <div className="flex flex-row gap-4 items-start mb-2">
                    {edu.image && (
                      <div className="w-[5.5rem] h-[5.5rem] md:w-[6.5rem] md:h-[6.5rem] rounded-xl overflow-hidden border border-slate-200 p-0.5 shadow-sm bg-white shrink-0">
                         <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                      </div>
                    )}
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-1 flex-col md:flex-row md:items-center gap-2">
                        <h3 className="theme-card font-semibold text-slate-900 leading-snug">{edu.degree}</h3>
                        <span className="text-xs font-mono text-blue-700 bg-blue-100/50 px-2.5 py-1 rounded-full border border-blue-200 md:hidden">{edu.duration}</span>
                      </div>

                      <div className="theme-card text-slate-800 font-medium mb-1">
                        {edu.institutionLink ? (
                          <a href={edu.institutionLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline transition-colors">{edu.institution}</a>
                        ) : edu.institution}
                      </div>

                      <div className="text-slate-500 text-xs flex items-center gap-1 font-medium mb-2">
                        <MapPin size={12} />{edu.location}
                      </div>

                      {edu.gpa && (
                        <span className="self-start px-3 py-1 bg-white shadow-sm text-xs font-mono text-slate-600 border border-slate-200 rounded-lg font-medium">
                          CGPA: <span className="font-semibold text-slate-800">{edu.gpa}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {edu.achievements.length > 0 && (
                    <ul className="space-y-2 mt-4 pt-4 border-t border-slate-100 text-slate-600 theme-body">
                      {edu.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-blue-500 mt-0.5">▹</span>
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="relative">
          {/* Master Timeline Line */}
          <div className="hidden md:block absolute left-[154px] top-6 bottom-4 w-px bg-blue-200 z-0" />

          <div className="space-y-6 md:space-y-8">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[130px_48px_1fr] gap-4 md:gap-0 relative z-10"
              >
                {/* Left side: Date */}
                <div className="flex flex-col justify-start pt-4 z-10">
                  <div className="theme-meta font-mono text-slate-500 text-center font-semibold bg-white/60 px-4 py-1 rounded border border-slate-100 hidden md:block">
                    {exp.duration}
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center justify-start pt-6 z-10">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_0_4px_#f0f7fd]" />
                </div>
                
                {/* Right side: Content */}
                <div className="glass-panel p-5 md:p-8 rounded-2xl group hover:border-blue-300 transition-colors h-fit text-left bg-white/40">
                  <div className="flex flex-row gap-4 items-start mb-2">
                    {exp.image && (
                      <div className="w-12 h-12 md:w-16 md:h-16 aspect-square rounded-xl overflow-hidden border border-slate-200 p-0.5 shadow-sm bg-white shrink-0 mt-1">
                         <img src={exp.image} alt={exp.institution} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                      </div>
                    )}
                    <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-1 flex-col gap-2">
                          <h3 className="theme-card font-semibold text-blue-700 leading-snug">
                            {exp.role} <span className="text-slate-400 font-light mx-1 hidden md:inline">|</span>{" "}
                            <span className="text-slate-900 block md:inline mt-1 md:mt-0">
                              {exp.institutionLink ? (
                                <a href={exp.institutionLink} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline transition-colors">{exp.institution}</a>
                              ) : exp.institution}
                            </span>
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2 text-[0.8rem] md:hidden">
                          <span className="font-mono text-blue-700 bg-blue-100/50 px-2.5 py-1 rounded-full border border-blue-200">
                            {exp.duration}
                          </span>
                        </div>

                        {exp.location && (
                          <div className="text-slate-500 text-xs flex items-center gap-1 font-medium">
                            <MapPin size={12} />{exp.location}
                          </div>
                        )}
                    </div>
                  </div>
                  
                  <div className="text-slate-700 theme-body mb-6 mt-4 border-b border-blue-100/50 pb-4">
                    <span className="font-bold text-slate-900 font-mono theme-meta uppercase tracking-wider mr-2">
                      {exp.supervisors.length > 1 ? "Supervisors:" : "Supervisor:"}
                    </span>
                    {exp.supervisors.map((s, i) => (
                      <span key={i}>
                        {i > 0 && <span className="text-slate-400 mx-1">&</span>}
                        {s.link ? (
                          <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{s.name}</a>
                        ) : s.name}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {exp.projects.map((proj, pIdx) => (
                      <div key={pIdx}>
                        <h4 className="font-medium text-slate-800 theme-body leading-snug">{proj.title}</h4>
                        {proj.bullets && proj.bullets.length > 0 && (
                          <ul className="space-y-2 w-full mt-2.5">
                            {proj.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="text-slate-600 theme-body leading-relaxed flex items-start gap-2.5 w-full">
                                <span className="text-blue-500 mt-0.5 text-xs font-bold font-mono shrink-0">▹</span>
                                <span className="flex-1 w-0 min-w-0">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {exp.techStack && (
                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                      <span className="theme-meta uppercase tracking-wider font-bold text-slate-900 font-mono">Tech Stack:</span>
                      <span className="theme-meta font-mono text-slate-600 bg-white px-2.5 py-1 rounded border border-slate-200 shadow-sm">{exp.techStack}</span>
                    </div>
                  )}
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications">
        <div className="flex flex-wrap items-center gap-2 mb-6 justify-start">
          {pubFilters.map((f) => (
            <button
              key={f}
              onClick={() => setPubFilter(f)}
              className={`px-3.5 py-1.5 rounded-lg theme-body transition-all font-medium ${
                pubFilter === f
                  ? 'bg-blue-600 text-white shadow-md border border-blue-600'
                  : 'bg-white/80 text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-white shadow-sm'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6">
          {filteredPubs.map((pub, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-5 md:p-6 rounded-2xl group hover:border-blue-300 transition-colors bg-white/40"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-1 w-full order-2 md:order-1">
                  <div className="flex flex-wrap gap-2 items-center mb-3 theme-meta uppercase tracking-widest font-semibold">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 border border-blue-200 shadow-sm">
                      {pub.shortVenue}
                    </span>
                    <span className="text-slate-500 font-mono bg-white px-2.5 py-1 rounded-lg border border-slate-300 shadow-sm">{pub.year}</span>
                    {pub.role && (
                      <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 shadow-sm">
                        {pub.role}
                      </span>
                    )}
                  </div>

                  <h3 className="theme-card font-medium text-slate-900 mb-2 leading-snug">"{pub.title}"</h3>
                  <p className="text-slate-600 theme-body mb-2">
                    {pub.role ? 'Authors:' : 'By:'}{' '}
                    {pub.authors.split(', ').map((part, i) => {
                      const hasAnd = part.startsWith('and ');
                      const name = hasAnd ? part.slice(4) : part;
                      const normalizedName = name.replace(/[\s.]/g, '').toLowerCase();
                      const normalizedSelf = 'R. Chakraborty'.replace(/[\s.]/g, '').toLowerCase();
                      const isMe = normalizedName === normalizedSelf;
                      return (
                        <span key={i}>
                          {i > 0 && ', '}
                          {hasAnd && 'and '}
                          <span className={isMe ? 'text-slate-900 font-semibold' : 'text-slate-600'}>
                            {name}
                          </span>
                        </span>
                      );
                    })}
                  </p>

                  <div className="text-slate-500 theme-body mb-4 flex flex-col gap-0.5">
                    <i>{pub.status}</i>
                    <span className="font-medium text-blue-700">{pub.venue}</span>
                  </div>

                  {pub.links && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {pub.links.paper && (
                        <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all">
                          <FileText size={14} /> Paper
                        </a>
                      )}
                      {pub.links.code && (
                        <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all">
                          <Code size={14} /> Code
                        </a>
                      )}
                      {pub.links.project && (
                        <a href={pub.links.project} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all">
                          <Link size={14} /> Project
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {pub.image && (
                  <div className="w-full md:w-56 aspect-[3/2] flex-shrink-0 rounded-xl overflow-hidden glass-panel border p-1 shadow-sm bg-white order-1 md:order-2">
                     <img src={pub.image} alt={pub.title} className="w-full h-full object-cover rounded-lg" loading="lazy" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        {/* Project Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-6 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg theme-body transition-all font-medium ${
                selectedTag === tag 
                  ? 'bg-blue-600 text-white shadow-md border border-blue-600' 
                  : 'bg-white/80 text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-white shadow-sm'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={`gap-4 space-y-4 ${getColumnsClass(filteredProjects.length)}`}>
          {filteredProjects.map((proj, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="break-inside-avoid glass-panel p-1 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition-all group overflow-hidden"
            >
              <div className="w-full relative bg-slate-100 rounded-[0.85rem] overflow-hidden aspect-[4/3]">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                ) : (
                  <div className="w-full h-full bg-slate-100" />
                )}
              </div>
              <div className="p-4 flex flex-col gap-3 w-full">
                <div className="w-full text-center">
                  <h3 className="theme-card font-semibold text-blue-700 leading-snug">{proj.title}</h3>
                  {proj.description && <p className="theme-body text-slate-600 leading-relaxed mt-1">{proj.description}</p>}
                </div>

                {proj.links && Object.keys(proj.links).length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {proj.links.paper && (
                      <a href={proj.links.paper} className="flex items-center gap-1.5 px-2.5 py-1 border border-blue-200 bg-blue-50/50 rounded text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">
                        <FileText size={12} /> Paper
                      </a>
                    )}
                    {proj.links.code && (
                      <a href={proj.links.code} className="flex items-center gap-1.5 px-2.5 py-1 border border-slate-200 bg-slate-50 rounded text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                        <Code size={12} /> Code
                      </a>
                    )}
                    {proj.links.pdf && (
                      <a href={proj.links.pdf} className="flex items-center gap-1.5 px-2.5 py-1 border border-slate-200 bg-slate-50 rounded text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                        <File size={12} /> PDF
                      </a>
                    )}
                    {proj.links.presentation && (
                      <a href={proj.links.presentation} className="flex items-center gap-1.5 px-2.5 py-1 border border-blue-200 bg-blue-50/50 rounded text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">
                        <MonitorPlay size={12} /> Presentation
                      </a>
                    )}
                    {proj.links.project && (
                      <a href={proj.links.project} className="flex items-center gap-1.5 px-2.5 py-1 border border-slate-200 bg-slate-50 rounded text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                        <ExternalLink size={12} /> Project
                      </a>
                    )}
                    {proj.links.report && (
                      <a href={proj.links.report} className="flex items-center gap-1.5 px-2.5 py-1 border border-blue-200 bg-blue-50/50 rounded text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">
                        <FileText size={12} /> Report
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements">
        <div className="flex flex-col gap-4">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-panel p-5 rounded-2xl bg-white/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 flex-shrink-0 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mt-0.5">
                  <GraduationCap size={16} className="text-amber-600" />
                </div>
                <div className="min-w-0">
                  <p className="theme-body font-semibold text-slate-800 leading-snug">{ach.title}</p>
                  <p className="theme-card text-slate-600 font-normal mt-0.5">{ach.organizer} · {ach.year}</p>
                </div>
              </div>
              {Object.keys(ach.links).length > 0 && (
                <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                  {ach.links.certificate && (
                    <a href={ach.links.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 border border-amber-200 bg-amber-50/50 rounded text-xs font-medium text-amber-700 hover:bg-amber-100 transition-colors">
                      <FileText size={12} /> Certificate
                    </a>
                  )}
                  {ach.links.presentation && (
                    <a href={ach.links.presentation} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 border border-blue-200 bg-blue-50/50 rounded text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">
                      <MonitorPlay size={12} /> Presentation
                    </a>
                  )}
                  {ach.links.report && (
                    <a href={ach.links.report} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 border border-blue-200 bg-blue-50/50 rounded text-xs font-medium text-blue-700 hover:bg-blue-100 transition-colors">
                      <FileText size={12} /> Report
                    </a>
                  )}
                  {ach.links.project && (
                    <a href={ach.links.project} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 border border-slate-200 bg-slate-50 rounded text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                      <ExternalLink size={12} /> Project
                    </a>
                  )}
                  {ach.links.code && (
                    <a href={ach.links.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-2.5 py-1 border border-slate-200 bg-slate-50 rounded text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                      <Code size={12} /> Code
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Blogs */}
      <Section id="blogs" title="Blogs">
        <div className="glass-panel p-8 text-center rounded-2xl bg-white/40 border-dashed border-2 border-slate-200 flex flex-col items-center justify-center min-h-[150px]">
           <p className="text-slate-500 text-sm font-medium tracking-wide">Coming Soon...</p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => {
            const Icon = iconMap[skillGroup.icon];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center hover:border-blue-300 transition-all bg-white/40"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-sm border border-blue-100">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="theme-card font-bold tracking-wide text-slate-800 mb-4 pb-3 border-b border-slate-200 w-full text-center">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-white text-slate-600 theme-meta shadow-sm border border-slate-200 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

    </div>
  );
}
