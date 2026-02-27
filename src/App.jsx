import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import ThemeToggle from './components/ThemeToggle'
import { FileText, ArrowUp } from 'lucide-react'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="bg-white dark:bg-dark min-h-screen text-slate-800 dark:text-slate-200 selection:bg-indigo-500/30 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Floating Elements (Theme Toggle & Back to Top) */}
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-3">
        {showBackToTop && (
          <a
            href="#home"
            title="Back to top"
            className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 animate-fadeIn"
          >
            <ArrowUp size={18} />
          </a>
        )}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      <div className="fixed bottom-6 left-6 md:top-6 md:bottom-auto md:right-6 md:left-auto z-[60]">
        <a
          href="/HarshResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-6 py-2.5 rounded-full border border-slate-900/10 dark:border-white/10 dark:bg-slate-800 bg-slate-900 dark:text-white text-white shadow-2xl hover:scale-105 transition-all duration-300 group"
        >
          <FileText size={16} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
          <span className="text-sm font-semibold tracking-wide">Resume</span>
        </a>
      </div>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
