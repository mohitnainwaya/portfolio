import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { experience } from '../../data/portfolio.js';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Experience"
          title="Internships & Industry Operations"
          description="Hands-on experience in automotive manufacturing operations, quality control protocols, and Lean process optimization."
        />

        <div className="mx-auto max-w-4xl">
          {experience.map((role, index) => (
            <Reveal key={role.company} delay={index * 0.08} variant="scale">
              <article className="h-full rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]">
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-[linear-gradient(135deg,#22d3ee,#34d399,#f59e0b)] text-base font-bold text-slate-950 shadow-glow">
                    {role.logo}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-cyan-200">{role.company}</p>
                    <h3 className="mt-1 text-2xl font-semibold text-[var(--text-strong)]">{role.role}</h3>
                    <p className="mt-1 text-sm text-[var(--text-subtle)]">{role.duration}</p>
                  </div>
                </div>
                <p className="mt-6 text-base leading-8 text-[var(--text-muted)]">{role.summary}</p>
                <div className="mt-6 grid gap-3">
                  {role.responsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-black/[0.12] p-4">
                      <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={18} />
                      <p className="text-sm leading-6 text-[var(--text-muted)]">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
