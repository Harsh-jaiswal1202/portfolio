import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      {/* Desktop Brand Logo (Hidden on Mobile) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-50 hidden md:block">
        <motion.a
          href="#home"
          className="group block relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-40 blur transition duration-300" />
          <img
            src="/logo.png"
            alt="HJ Logo"
            className="relative w-10 h-10 rounded-xl object-contain shadow-lg border-2 border-slate-200 dark:border-slate-800 group-hover:scale-105 transition-transform duration-300"
          />
        </motion.a>
      </div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between w-full md:w-auto p-1.5 rounded-full backdrop-blur-[12px] border transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-slate-900/90 border-slate-200 dark:border-white/10 shadow-xl'
          : 'bg-white/80 dark:bg-black/40 border-slate-200/50 dark:border-white/5'
          }`}
      >
        {/* Mobile Brand Logo */}
        <a href="#home" className="md:hidden block shrink-0 ml-1 group relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-40 blur transition duration-300" />
          <img
            src="/logo.png"
            alt="HJ Logo"
            className="w-8 h-8 rounded-full object-contain relative z-10"
          />
        </a>

        {/* Center Nav Links */}
        <div
          className="flex items-center space-x-1 overflow-x-auto scroll-smooth md:max-w-none px-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.id
                ? 'bg-indigo-600 dark:bg-purple-600/40 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
