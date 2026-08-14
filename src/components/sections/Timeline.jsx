import React from 'react';
import { timeline } from '../../data/portfolio.js';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Timeline() {
  return (
    <section id="timeline" className="section-shell">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Timeline & Education"
          title="Academic & Professional Milestones"
          description="Chronological journey across DTU engineering degree, Sona Comstar internship, NPTEL IIT Bombay certification, and secondary schooling."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(45,212,191,0.65),rgba(251,113,133,0.55),transparent)] md:left-1/2" />
          <div className="grid gap-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const left = index % 2 === 0;
              return (
                <Reveal key={`${item.year}-${item.title}`} variant={left ? 'left' : 'right'} delay={index * 0.06}>
                  <div className={`relative grid gap-5 pl-16 md:grid-cols-2 md:pl-0 ${left ? '' : ''}`}>
                    <div className={`${left ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                      <article className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-md bg-cyan-300 px-3 py-1 text-sm font-bold text-slate-950">{item.year}</span>
                          <span className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase text-[var(--text-subtle)]">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="mt-5 text-xl font-semibold text-[var(--text-strong)]">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                      </article>
                    </div>
                    <div className="absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-md border border-cyan-300/30 bg-[var(--bg)] text-cyan-300 shadow-glow md:left-1/2 md:-translate-x-1/2">
                      <Icon size={18} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
