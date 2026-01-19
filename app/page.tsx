import React from "react";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { Sidebar } from "../components/Sidebar";
import { Spotlight } from "../components/ui/Spotlight";
import { FadeIn } from "../components/ui/FadeIn";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)]">


      {/* Spotlight overlay */}
      <Spotlight />

      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Sidebar */}
          <Sidebar />

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
              <FadeIn>
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
              </FadeIn>
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
                {experience.map((item, index) => (
                  <li key={item.company}>
                    <FadeIn delay={index * 0.1}>
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
                    </FadeIn>
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
                {skills.map((skillGroup, index) => (
                  <li key={skillGroup.category}>
                    <FadeIn delay={index * 0.1}>
                      <div className="card-hover group relative rounded-lg p-4 -mx-4">
                        <h3 className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] mb-3">
                          {skillGroup.category}
                        </h3>
                        {skillGroup.items && skillGroup.items.length > 0 && (
                          <ul className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item, i) => {
                              if (typeof item === "string") {
                                return (
                                  <li
                                    key={item}
                                    className="rounded-full bg-[var(--accent-muted)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                                  >
                                    {item}
                                  </li>
                                );
                              } else {
                                const Icon = item.icon;
                                const isClickable = !!item.url;
                                const Wrapper = isClickable ? "a" : "div";
                                const wrapperProps = isClickable
                                  ? {
                                    href: item.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block p-2 text-2xl text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer",
                                  }
                                  : {
                                    className: "block p-2 text-2xl text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-default",
                                  };

                                return (
                                  <li key={item.name} className="relative group/icon">
                                    {/* @ts-ignore - Dynamic component props */}
                                    <Wrapper
                                      {...wrapperProps}
                                      aria-label={item.name}
                                    >
                                      <Icon className="w-6 h-6" />
                                    </Wrapper>
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-[var(--bg-primary)] bg-[var(--text-primary)] rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-medium z-50">
                                      {item.name}
                                      {/* Arrow */}
                                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--text-primary)]" />
                                    </div>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        )}
                      </div>
                    </FadeIn>
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
                {projects.map((project, index) => (
                  <li key={project.name}>
                    <FadeIn delay={index * 0.1}>
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
                    </FadeIn>
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

