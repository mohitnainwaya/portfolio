import React from 'react';
import { certifications } from '../../data/portfolio.js';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Courses & Certifications"
          title="Formal training and technical achievements."
          description="Verified certifications and recognized academic accomplishments from Google, IIT Bombay, and full-stack development programs."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08} variant="scale">
                <article className="group h-full rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:text-amber-200">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-semibold uppercase text-cyan-300/80">{item.issuer}</span>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-strong)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
