import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';
import { About } from './components/sections/About.jsx';
import { Certifications } from './components/sections/Certifications.jsx';
import { Contact } from './components/sections/Contact.jsx';
import { Experience } from './components/sections/Experience.jsx';
import { Hero } from './components/sections/Hero.jsx';
import { Projects } from './components/sections/Projects.jsx';
import { Skills } from './components/sections/Skills.jsx';
import { Stats } from './components/sections/Stats.jsx';
import { Timeline } from './components/sections/Timeline.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { LoadingScreen } from './components/layout/LoadingScreen.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { CustomCursor } from './components/ui/CustomCursor.jsx';
import { ParticleField } from './components/ui/ParticleField.jsx';
import { ScrollProgress } from './components/ui/ScrollProgress.jsx';
import { profile } from './data/portfolio.js';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('portfolio-theme');
    return stored ? stored === 'dark' : true;
  });

  const schema = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      email: profile.email,
      url: window.location.origin,
      sameAs: profile.social.map((item) => item.href),
    }),
    [],
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ScrollProgress />
      <CustomCursor />
      <ParticleField />
      <AnimatePresence>{loading ? <LoadingScreen /> : null}</AnimatePresence>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Experience />
        <Certifications />
        <Stats />
        <Contact />
      </motion.main>
      <Footer />
    </>
  );
}
