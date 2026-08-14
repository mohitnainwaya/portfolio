import React from 'react';
import { Reveal } from './Reveal.jsx';

export function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';

  return (
    <Reveal className={`mb-12 flex max-w-3xl flex-col ${alignment}`}>
      <span className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold uppercase text-cyan-200 shadow-glow dark:border-white/10 dark:bg-white/[0.06] dark:text-cyan-200 light-token">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
