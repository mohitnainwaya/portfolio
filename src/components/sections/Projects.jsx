import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/portfolio.js';
import { MagneticButton } from '../ui/MagneticButton.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';
import { TiltCard } from '../ui/TiltCard.jsx';

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Projects"
          title="Full-Stack & Mechanical Engineering Projects"
          description="Technical applications, web platforms, and engineering simulations built with modern software frameworks and CAD simulation tools."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              className={project.featured ? 'lg:col-span-1' : ''}
              variant="scale"
            >
              <TiltCard className="h-full">
                <article className={`group project-card ${project.featured ? 'min-h-[650px]' : 'min-h-[560px]'}`}>
                  <div className="relative h-72 overflow-hidden rounded-lg border border-white/10 sm:h-80">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.78))]" />
                    <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/35 px-3 py-2 text-xs font-semibold uppercase text-white/80 backdrop-blur-xl">
                      {project.featured ? 'Featured' : 'Technical Work'}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl font-semibold text-[var(--text-strong)]">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-[var(--text-muted)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {(project.github || project.live) ? (
                      <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                        {project.github ? (
                          <MagneticButton href={project.github} target="_blank" rel="noreferrer" variant="secondary" icon={Github} className="w-full sm:w-auto">
                            GitHub
                          </MagneticButton>
                        ) : null}
                        {project.live ? (
                          <MagneticButton href={project.live} target="_blank" rel="noreferrer" icon={ExternalLink} className="w-full sm:w-auto">
                            Live Demo
                          </MagneticButton>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
