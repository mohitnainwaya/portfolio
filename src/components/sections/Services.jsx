import React from 'react';
import { services } from '../../data/portfolio.js';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Services"
          title="End-to-end capabilities for teams that want product momentum."
          description="A service model shaped like a senior individual contributor: design-aware, architecture-minded, and focused on outcomes."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.04} variant="scale">
                <article className="group h-full min-h-[250px] rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.08]">
                  <div className="grid h-12 w-12 place-items-center rounded-md border border-white/10 bg-white/[0.08] text-cyan-300 transition duration-300 group-hover:scale-105 group-hover:text-amber-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-[var(--text-strong)]">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
