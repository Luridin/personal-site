"use client";

import React, { useEffect, useState } from "react";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import {Mail, FileDown } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Spotlight effect
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)]">
      {/* Spotlight overlay */}
      <div className="spotlight pointer-events-none fixed inset-0 z-30" aria-hidden="true" />
      
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                Abhi Shandilya
              </h1>
              <h2 className="mt-3 text-lg font-medium text-[var(--text-primary)]">
                Product Builder*
              </h2>
              <p className="mt-4 max-w-xs text-[var(--text-secondary)] leading-relaxed">
                Building products that make a difference.
              </p>

              <nav className="hidden lg:block mt-16">
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`nav-link group flex items-center gap-4 text-xs font-bold uppercase tracking-widest ${
                          activeSection === link.id
                            ? "text-[var(--text-primary)] active"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        <span className="nav-indicator" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ul className="mt-8 flex items-center gap-5">
              <li>
                <a
                  href="https://www.linkedin.com/in/abhijitshandilya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="LinkedIn"
                >
                  
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Luridin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:abhijit.shandilya@live.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Mail"
                >
                  <Mail className="h-6 w-6"/>
                  {/* <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6.5h18a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5zm0 1.5 9 6 9-6H3zm0 8h18V9.5l-9 6-9-6V16z" />
                  </svg> */}
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1AnOCf9swLMSkef9QQkkOHDdGg3NgqVp6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Resume Download"
                >
                  <FileDown className="h-6 w-6"/>
                  {/* <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 6.5h18a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5zm0 1.5 9 6 9-6H3zm0 8h18V9.5l-9 6-9-6V16z" />
                  </svg> */}
                </a>
              </li>
            </ul>
          </header>

          {/* Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--bg-primary)]/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
                  About
                </h2>
              </div>
              <h2 className="hidden lg:block text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">
                About
              </h2>
              <div className="text-[var(--text-secondary)] space-y-4">
                <p>
                I’m a product builder with 10+ years of experience across the full product lifecycle.
                </p>
                <p>
                    Currently at{" "}
                    <span className="
                        font-semibold
                        text-[var(--text-primary)]
                        animate-[pulse_2s_ease-in-out_1]
                      ">
                      Stats Perform
                    </span>
                    , I’m leading the end-to-end development of an AI/ML-powered LineUp tool that helps Product Operations capture game data faster, reduce user turnaround time, and lower operational costs.
                </p>  
                <p>
                I like to stay hands-on, build thoughtfully, and focus on good design that actually fixes UX problems and delivers real results.
                </p>
                <p>
                Outside of work, you’ll usually find me traveling, sketching and design, trekking, working out, cooking, or getting humbled by the next hyped-up rogue-like game. 
                </p>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--bg-primary)]/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
                  Experience
                </h2>
              </div>
              <h2 className="hidden lg:block text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">
                Experience
              </h2>
              <ul className="space-y-4">
                {experience.map((item) => (
                  <li key={item.company}>
                    <div className="card-hover group relative rounded-lg p-4 -mx-4">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] shrink-0 sm:w-28">
                          {item.period}
                        </span>
                        <div>
                          <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                            {item.role} · {item.company}
                          </h3>
                          {item.description && (
                            <p className="mt-2 text-sm text-[var(--text-secondary)]">
                              {item.description}
                            </p>
                          )}
                          {item.technologies && (
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <li
                                  key={tech}
                                  className="rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                                >
                                  {tech}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="skills" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--bg-primary)]/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
                  Skills
                </h2>
              </div>
              <h2 className="hidden lg:block text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">
                Skills
              </h2>
              <ul className="space-y-4">
                {skills.map((skillGroup) => (
                  <li key={skillGroup.category}>
                    <div className="card-hover group relative rounded-lg p-4 -mx-4">
                      <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] mb-3">
                        {skillGroup.category}
                      </h3>
                      {skillGroup.items && skillGroup.items.length > 0 && (
                        <ul className="flex flex-wrap gap-2">
                          {skillGroup.items.map((item) => (
                            <li
                              key={item}
                              className="rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
              <div className="sticky top-0 z-20 -mx-6 mb-4 bg-[var(--bg-primary)]/75 px-6 py-5 backdrop-blur lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">
                  Projects
                </h2>
              </div>
              <h2 className="hidden lg:block text-sm font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">
                Projects
              </h2>
              <ul className="space-y-4">
                {projects.map((project) => (
                  <li key={project.name}>
                    <div className="card-hover group block rounded-lg p-4 -mx-4">
                      <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] flex items-center gap-1">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        {project.description}
                      </p>
                      {project.technologies && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
