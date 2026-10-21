import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ThemeToggle } from './components/ThemePanel';
import { portfolioData } from './data';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MapPin, BookOpen, Code2, Cpu, Sparkles, Microchip, Wrench, FileText, Code, Link, MonitorPlay, File, GraduationCap, Cloud, Users, LayoutGrid, Award, Image as ImageIcon } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Code2, Cpu, Sparkles, Microchip, Wrench, Cloud, Users, LayoutGrid
};

// Reusable Section Component
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-6 relative z-10 scroll-mt-20">
    <div className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="theme-section font-serif font-semibold mb-5 text-fg flex items-center gap-4"
      >
        {title}
        <span className="flex-1 h-px bg-rule" />
      </motion.h2>
      {children}
    </div>
  </section>
);

export default function App() {
  const { personalInfo, education, publications, experience, skills, projects, achievements } = portfolioData;

  const [selectedTag, setSelectedTag] = useState('All');
  const allTags = ["All", "Simulation", "Vision", "Robotics", "Gen-AI", "Design", "Others"];
  const filteredProjects = selectedTag === 'All' ? projects : projects.filter(p => p.tags?.includes(selectedTag));

  const [pubFilter, setPubFilter] = useState('All');
  const pubFilters = ["All", "Journal", "Conference", "Workshop", "Poster", "Patent", "Peer Review"];
  const filteredPubs = pubFilter === 'All'
    ? publications
    : pubFilter === 'Peer Review'
      ? publications.filter(p => p.role === 'Peer Reviewer')
      : publications.filter(p => p.type === pubFilter && p.role !== 'Peer Reviewer');

  // Peer reviews collapse into one card per venue, shown where that venue first appears.
  const reviewsByVenue = new Map<string, { titles: string[]; years: string[] }>();
  filteredPubs.filter(p => p.role === 'Peer Reviewer').forEach(p => {
    const group = reviewsByVenue.get(p.shortVenue) ?? { titles: [], years: [] };
    group.titles.push(p.title);
    if (!group.years.includes(p.year)) group.years = [...group.years, p.year].sort((a, b) => b.localeCompare(a));
    reviewsByVenue.set(p.shortVenue, group);
  });
  const shownPubs = filteredPubs.filter(p =>
    p.role !== 'Peer Reviewer' || filteredPubs.find(q => q.role === 'Peer Reviewer' && q.shortVenue === p.shortVenue) === p
  );

  const getColumnsClass = (count: number) => {
    if (count === 1) return 'columns-1 max-w-[300px] mx-auto';
    if (count === 2) return 'columns-1 sm:columns-2 max-w-[600px] mx-auto';
    if (count === 3) return 'columns-1 sm:columns-2 md:columns-3 max-w-[900px] mx-auto';
    if (count === 4) return 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 max-w-[1200px] mx-auto';
    // 5 columns leaves the last one empty once balancing fits everything in 4.
    return 'columns-1 sm:columns-2 md:columns-3 lg:columns-4';
  };

  return (
    <div className="min-h-screen relative font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-bar">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-end md:justify-center items-center relative">
          <div className="hidden md:flex gap-7 text-muted">
            <a href="#about" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">About</a>
            <a href="#education" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">Education</a>
            <a href="#experience" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">Experience</a>
            <a href="#publications" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">Publications</a>
            <a href="#projects" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">Projects</a>
            <a href="#achievements" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">Achievements</a>
            <a href="#blogs" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">Blogs</a>
            <a href="#skills" className="hover:text-accent transition-colors uppercase text-xs tracking-widest font-medium">Skills</a>
          </div>
          <div className="md:absolute md:right-6">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center relative z-10 px-6 pt-24 pb-6" id="about">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Left Column: Name & Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-1 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-rule p-1 bg-card mx-auto">
                  <img src="avatar.webp" alt={personalInfo.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h1 className="theme-hero font-serif font-semibold mb-1.5 text-fg whitespace-nowrap overflow-visible tracking-tight">
                    {personalInfo.name}
                  </h1>
                  <h2 className="kicker">
                    Robotics Researcher
                  </h2>
                </div>
              </div>

              <div className="flex justify-center gap-2.5 flex-wrap">
                <a href={`mailto:${personalInfo.email}`} className="icon-btn" title="Email">
                  <Mail size={15} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn">
                  <Linkedin size={15} />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="icon-btn" title="GitHub">
                  <Github size={15} />
                </a>
                {personalInfo.googleScholar && (
                  <a href={personalInfo.googleScholar} target="_blank" rel="noreferrer" className="icon-btn" title="Google Scholar">
                    <GraduationCap size={15} />
                  </a>
                )}
                {personalInfo.researchGate && (
                  <a href={personalInfo.researchGate} target="_blank" rel="noreferrer" className="icon-btn" title="Research Scholar">
                    <BookOpen size={15} />
                  </a>
                )}
                {personalInfo.cv && (
                  <a href={personalInfo.cv} target="_blank" rel="noreferrer" className="icon-btn" title="CV">
                    <FileText size={15} />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right Column: About me */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 md:col-span-2 card p-4 md:p-5 h-full flex flex-col justify-center"
            >
              <h3 className="kicker mb-3">About Me</h3>
              <div className="space-y-3 text-muted leading-relaxed theme-card">
                <p>
                  I'm a first-year <strong className="text-fg font-medium">M.S.E. in Robotics</strong> student at the <strong className="text-fg font-medium">University of Pennsylvania</strong>, researching at the intersection of <strong className="text-fg font-medium">Aerial Robotics</strong>, <strong className="text-fg font-medium">Vision-Language Models (VLMs)</strong>, <strong className="text-fg font-medium">Reinforcement Learning</strong>, and <strong className="text-fg font-medium">Perception & Vision</strong>. I build AI systems for perception-degraded, GPS-denied environments, with experience spanning academia and industry.
                </p>
                <p>
                  I've worked at <strong className="text-fg font-medium">National University of Singapore</strong>, <strong className="text-fg font-medium">KU Leuven</strong>, and <strong className="text-fg font-medium">CSIR-CEERI</strong>, alongside an ML Internship at <strong className="text-fg font-medium">Uber (AI Solutions)</strong>. Outside of research, I enjoy game development and chess.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-50 text-muted"
        >
          <ChevronDown size={16} />
        </motion.div>
      </section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="relative">
          {/* Master Timeline Line */}
          <div className="hidden md:block absolute left-[154px] top-6 bottom-4 w-px bg-rule z-0" />

          <div className="space-y-4">
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
                  <div className="theme-meta font-mono text-muted text-center font-medium bg-card px-1.5 py-1 rounded-md border border-rule whitespace-nowrap hidden md:block">
                    {edu.duration}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center justify-start pt-6 z-10">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full ring-4 ring-bg" />
                </div>

                {/* Right side: Content */}
                <div className="card card-hover p-4 md:p-5 h-fit text-left">
                  <div className="flex flex-row gap-4 items-start mb-2">
                    {edu.image && (
                      <div className="w-[4.5rem] h-[4.5rem] md:w-[5rem] md:h-[5rem] rounded-lg overflow-hidden border border-rule p-0.5 bg-white shrink-0">
                         <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover rounded-md" loading="lazy" />
                      </div>
                    )}
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-1 flex-col md:flex-row md:items-center gap-2">
                        <h3 className="theme-card font-semibold text-fg leading-snug">{edu.degree}</h3>
                        <span className="pill pill-accent md:hidden">{edu.duration}</span>
                      </div>

                      <div className="theme-card text-fg mb-1">
                        {edu.institutionLink ? (
                          <a href={edu.institutionLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline transition-colors">{edu.institution}</a>
                        ) : edu.institution}
                      </div>

                      <div className="text-muted text-xs flex items-center gap-1 mb-2">
                        <MapPin size={12} />{edu.location}
                      </div>

                      {edu.gpa && (
                        <span className="pill self-start">
                          CGPA:&nbsp;<span className="font-semibold text-fg">{edu.gpa}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.achievements.length > 0 && (
                    <ul className="space-y-1.5 mt-3 pt-3 border-t border-rule text-muted theme-body">
                      {edu.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-accent mt-0.5">▹</span>
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
          <div className="hidden md:block absolute left-[154px] top-6 bottom-4 w-px bg-rule z-0" />

          <div className="space-y-4">
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
                  <div className="theme-meta font-mono text-muted text-center font-medium bg-card px-1.5 py-1 rounded-md border border-rule whitespace-nowrap hidden md:block">
                    {exp.duration}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex flex-col items-center justify-start pt-6 z-10">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full ring-4 ring-bg" />
                </div>

                {/* Right side: Content */}
                <div className="card card-hover p-4 md:p-5 h-fit text-left">
                  <div className="flex flex-row gap-4 items-start mb-2">
                    {exp.image && (
                      <div className="w-12 h-12 md:w-14 md:h-14 aspect-square rounded-lg overflow-hidden border border-rule p-0.5 bg-white shrink-0 mt-1">
                         <img src={exp.image} alt={exp.institution} className="w-full h-full object-cover rounded-md" loading="lazy" />
                      </div>
                    )}
                    <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-1 flex-col gap-2">
                          <h3 className="theme-card font-semibold text-accent leading-snug">
                            {exp.role} <span className="text-rule font-light mx-1 hidden md:inline">|</span>{" "}
                            <span className="text-fg block md:inline mt-1 md:mt-0">
                              {exp.institutionLink ? (
                                <a href={exp.institutionLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent hover:underline transition-colors">{exp.institution}</a>
                              ) : exp.institution}
                            </span>
                          </h3>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2 md:hidden">
                          <span className="pill pill-accent">
                            {exp.duration}
                          </span>
                        </div>

                        {exp.location && (
                          <div className="text-muted text-xs flex items-center gap-1">
                            <MapPin size={12} />{exp.location}
                          </div>
                        )}
                    </div>
                  </div>

                  <div className="text-muted theme-body mb-4 mt-3 border-b border-rule pb-3">
                    <span className="font-semibold text-fg font-mono theme-meta uppercase tracking-wider mr-2">
                      {exp.supervisors.length > 1 ? "Supervisors:" : "Supervisor:"}
                    </span>
                    {exp.supervisors.map((s, i) => (
                      <span key={i}>
                        {i > 0 && <span className="text-muted mx-1">&</span>}
                        {s.link ? (
                          <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{s.name}</a>
                        ) : s.name}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {exp.projects.map((proj, pIdx) => (
                      <div key={pIdx}>
                        <h4 className="font-medium text-fg theme-body leading-snug">{proj.title}</h4>
                        {proj.bullets && proj.bullets.length > 0 && (
                          <ul className="space-y-2 w-full mt-2.5">
                            {proj.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="text-muted theme-body leading-relaxed flex items-start gap-2.5 w-full">
                                <span className="text-accent mt-0.5 text-xs font-bold font-mono shrink-0">▹</span>
                                <span className="flex-1 w-0 min-w-0">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                  {exp.techStack && (
                    <div className="mt-4 pt-3 border-t border-rule flex flex-wrap items-center gap-2">
                      <span className="theme-meta uppercase tracking-wider font-semibold text-fg font-mono">Tech Stack:</span>
                      <span className="pill">{exp.techStack}</span>
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
        <div className="flex flex-wrap items-center gap-2 mb-4 justify-start">
          {pubFilters.map((f) => (
            <button
              key={f}
              onClick={() => setPubFilter(f)}
              data-active={pubFilter === f}
              className="filter-btn theme-body"
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {shownPubs.map((pub, idx) => (
            pub.role === 'Peer Reviewer' ? (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card card-hover p-4"
              >
                <div className="flex flex-wrap gap-2 items-center mb-2 uppercase tracking-widest font-semibold">
                  <span className="pill pill-accent">{pub.shortVenue}</span>
                  <span className="pill">{reviewsByVenue.get(pub.shortVenue)!.years.join(' · ')}</span>
                  <span className="pill pill-warn">{pub.role}</span>
                </div>
                <ul className="space-y-1.5 mb-2">
                  {reviewsByVenue.get(pub.shortVenue)!.titles.map((title, i) => (
                    <li key={i} className="theme-card font-semibold text-fg leading-snug flex items-start gap-2.5">
                      <span className="text-accent text-xs mt-0.5 shrink-0">▹</span>
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
                <span className="theme-body font-medium text-accent">{pub.venue}</span>
              </motion.div>
            ) : (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card card-hover p-4 md:p-5"
            >
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-1 w-full order-2 md:order-1">
                  <div className="flex flex-wrap gap-2 items-center mb-2 uppercase tracking-widest font-semibold">
                    <span className="pill pill-accent">{pub.shortVenue}</span>
                    <span className="pill">{pub.year}</span>
                  </div>

                  <h3 className="theme-card font-semibold text-fg mb-2 leading-snug">{pub.title}</h3>
                  <p className="text-muted theme-body mb-2">
                    Authors:{' '}
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
                          <span className={isMe ? 'text-fg font-semibold underline decoration-rule underline-offset-2' : 'text-muted'}>
                            {name}
                          </span>
                        </span>
                      );
                    })}
                  </p>

                  <div className="text-muted theme-body mb-3 flex flex-col gap-0.5">
                    <i>{pub.status}</i>
                    <span className="font-medium text-accent">{pub.venue}</span>
                  </div>

                  {pub.links && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {pub.links.paper && (
                        <a href={pub.links.paper} target="_blank" rel="noopener noreferrer" className="btn-link">
                          <FileText size={13} /> Paper
                        </a>
                      )}
                      {pub.links.poster && (
                        <a href={pub.links.poster} target="_blank" rel="noopener noreferrer" className="btn-link">
                          <ImageIcon size={13} /> Poster
                        </a>
                      )}
                      {pub.links.project && (
                        <a href={pub.links.project} target="_blank" rel="noopener noreferrer" className="btn-link">
                          <Link size={13} /> Project
                        </a>
                      )}
                      {pub.links.code && (
                        <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="btn-link">
                          <Code size={13} /> Code
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {pub.image && (
                  <div className="w-full md:w-48 aspect-[3/2] flex-shrink-0 rounded-lg overflow-hidden border border-rule p-1 bg-white order-1 md:order-2">
                     <img src={pub.image} alt={pub.title} className="w-full h-full object-cover rounded-md" loading="lazy" />
                  </div>
                )}
              </div>
            </motion.div>
            )
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        {/* Project Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-4 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              data-active={selectedTag === tag}
              className="filter-btn theme-body"
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
              className="break-inside-avoid card card-hover p-1 group overflow-hidden"
            >
              <div className="w-full relative bg-head rounded-[0.6rem] overflow-hidden aspect-[4/3]">
                {proj.image ? (
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                ) : (
                  <div className="w-full h-full bg-head" />
                )}
              </div>
              <div className="p-3 flex flex-col gap-2.5 w-full">
                <div className="w-full text-center">
                  <h3 className="theme-card font-semibold text-fg leading-snug">{proj.title}</h3>
                  {proj.description && <p className="theme-body text-muted leading-relaxed mt-1">{proj.description}</p>}
                </div>

                {proj.links && Object.keys(proj.links).length > 0 && (
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {proj.links.paper && (
                      <a href={proj.links.paper} className="btn-link">
                        <FileText size={12} /> Paper
                      </a>
                    )}
                    {proj.links.poster && (
                      <a href={proj.links.poster} className="btn-link">
                        <ImageIcon size={12} /> Poster
                      </a>
                    )}
                    {proj.links.project && (
                      <a href={proj.links.project} className="btn-link">
                        <ExternalLink size={12} /> Project
                      </a>
                    )}
                    {proj.links.code && (
                      <a href={proj.links.code} className="btn-link">
                        <Code size={12} /> Code
                      </a>
                    )}
                    {proj.links.report && (
                      <a href={proj.links.report} className="btn-link">
                        <FileText size={12} /> Report
                      </a>
                    )}
                    {proj.links.presentation && (
                      <a href={proj.links.presentation} className="btn-link">
                        <MonitorPlay size={12} /> Presentation
                      </a>
                    )}
                    {proj.links.pdf && (
                      <a href={proj.links.pdf} className="btn-link">
                        <File size={12} /> PDF
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
        <div className="flex flex-col gap-3">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="card card-hover p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 flex-shrink-0 bg-accent-soft text-accent rounded-lg flex items-center justify-center mt-0.5">
                  <Award size={16} />
                </div>
                <div className="min-w-0">
                  <p className="theme-body font-semibold text-fg leading-snug">{ach.title}</p>
                  <p className="theme-body text-muted mt-0.5">{ach.organizer} · {ach.year}</p>
                </div>
              </div>
              {Object.keys(ach.links).length > 0 && (
                <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                  {ach.links.certificate && (
                    <a href={ach.links.certificate} target="_blank" rel="noopener noreferrer" className="btn-link">
                      <FileText size={12} /> Certificate
                    </a>
                  )}
                  {ach.links.presentation && (
                    <a href={ach.links.presentation} target="_blank" rel="noopener noreferrer" className="btn-link">
                      <MonitorPlay size={12} /> Presentation
                    </a>
                  )}
                  {ach.links.report && (
                    <a href={ach.links.report} target="_blank" rel="noopener noreferrer" className="btn-link">
                      <FileText size={12} /> Report
                    </a>
                  )}
                  {ach.links.project && (
                    <a href={ach.links.project} target="_blank" rel="noopener noreferrer" className="btn-link">
                      <ExternalLink size={12} /> Project
                    </a>
                  )}
                  {ach.links.code && (
                    <a href={ach.links.code} target="_blank" rel="noopener noreferrer" className="btn-link">
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
        <div className="p-5 text-center rounded-xl border border-dashed border-rule flex flex-col items-center justify-center min-h-[100px]">
           <p className="text-muted text-sm font-medium tracking-wide">Coming Soon...</p>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skillGroup, idx) => {
            const Icon = iconMap[skillGroup.icon];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card card-hover p-4 md:p-5 flex flex-col items-center text-center"
              >
                <div className="w-9 h-9 bg-accent-soft text-accent rounded-lg flex items-center justify-center mb-2">
                  {Icon && <Icon size={17} />}
                </div>
                <h3 className="theme-card font-semibold text-fg mb-3 pb-2 border-b border-rule w-full text-center">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="pill cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <footer className="py-8 text-center theme-meta text-muted border-t border-rule mt-6">
        © {new Date().getFullYear()} {personalInfo.name}
      </footer>
    </div>
  );
}
