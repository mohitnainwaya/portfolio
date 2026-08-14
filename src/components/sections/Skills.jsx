import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolio.js';
import { Reveal } from '../ui/Reveal.jsx';
import { SectionHeader } from '../ui/SectionHeader.jsx';

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Capabilities & Engineering Toolkit"
          description="Directly supported by academic coursework at DTU, practical project engineering, and operations experience."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.category} delay={index * 0.04} variant="scale" className="xl:col-span-1">
                <motion.article
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? 0.5 : -0.5 }}
                  className="group relative h-full min-h-[280px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/30 hover:bg-white/[0.08]"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.color}`} />
                  <div className="flex items-center justify-between gap-4">
                    <div className={`grid h-12 w-12 place-items-center rounded-md bg-gradient-to-br ${group.color} text-slate-950 shadow-glow`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-xs uppercase text-[var(--text-subtle)]">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--text-strong)]">{group.category}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/10 bg-black/[0.16] px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition duration-300 group-hover:border-white/20 group-hover:text-[var(--text-strong)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-5 right-5 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.26),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
