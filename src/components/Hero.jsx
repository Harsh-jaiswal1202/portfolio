import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { SiLinkedin, SiGithub, SiX } from 'react-icons/si';

// Letter-by-letter animation component
const AnimatedText = ({ text, className, delay = 0 }) => {
    const letters = text.split('');
    return (
        <span className={className}>
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + i * 0.05, duration: 0.3, ease: 'easeOut' }}
                    className="inline-block"
                    style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </span>
    );
};

// Typewriter effect
const Typewriter = ({ words }) => {
    const [currentWord, setCurrentWord] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let timeout;
        const word = words[currentWord];
        if (typing) {
            if (displayed.length < word.length) {
                timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
            } else {
                setCurrentWord((prev) => (prev + 1) % words.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, typing, currentWord, words]);

    return (
        <span>
            {displayed}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-0.5 h-5 bg-indigo-500 ml-0.5 align-middle"
            />
        </span>
    );
};

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full"></div>

            <div className="container relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-left pl-8 md:pl-14"
                    >
                        {/* Welcome tagline */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="h-px w-8 bg-indigo-500" />
                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.25em]">
                                Welcome to My Portfolio
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <h1 className="font-outfit font-black text-slate-900 dark:text-white leading-tight mb-2">
                            <span className="block text-3xl md:text-4xl mb-1 text-slate-500 dark:text-slate-400 font-medium">
                                <AnimatedText text="Hi, I am" delay={0.4} />
                            </span>
                            <span className="block text-5xl md:text-7xl">
                                <AnimatedText text="Harsh" delay={0.7} className="text-slate-900 dark:text-white" />
                                {' '}
                                <AnimatedText text="Jaiswal" delay={1.1} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" />
                            </span>
                        </h1>

                        {/* Typewriter Role */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-4 font-medium"
                        >
                            <Typewriter words={['Software Engineer', 'Full Stack Developer', 'UI Designer', 'Gen AI Developer', 'Problem Solver']} />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.9, duration: 0.6 }}
                            className="text-sm md:text-base text-slate-500 dark:text-slate-400 mb-8 max-w-md leading-relaxed"
                        >
                            Software Engineer and Full Stack Developer specializing in MERN stack development with experience building scalable production-ready web applications.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="#projects">
                                <button className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/25 group">
                                    View Work
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                            <a href="#contact">
                                <button className="px-8 py-4 glass-card rounded-full font-semibold transition-all hover:border-indigo-500/50 dark:text-white text-slate-900">
                                    Contact Me
                                </button>
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.3, duration: 0.5 }}
                            className="flex items-center gap-4 mt-8"
                        >
                            <span className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">Find me on</span>
                            <div className="h-px flex-1 max-w-[40px] bg-slate-200 dark:bg-slate-700" />
                            {[
                                { icon: <SiLinkedin size={20} />, href: 'https://linkedin.com/in/harsh-1202-jaiswal', label: 'LinkedIn', color: '#0A66C2', target: '_blank' },
                                { icon: <SiGithub size={20} />, href: 'https://github.com/Harsh-jaiswal1202', label: 'GitHub', color: '#333', target: '_blank' },
                                { icon: <SiX size={20} />, href: 'https://x.com/Harshjaiswal788', label: 'Twitter', color: '#000', target: '_blank' },
                                { icon: <Mail size={20} />, href: 'https://mail.google.com/mail/?view=cm&to=udayjaiswal788@gmail.com', label: 'Gmail', color: '#EA4335', target: '_blank' },
                            ].map((social, i) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.target}
                                    rel="noopener noreferrer"
                                    title={social.label}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.4 + i * 0.1, type: 'spring', stiffness: 300 }}
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-transparent transition-all duration-300"
                                    style={{ '--hover-color': social.color }}
                                    onMouseEnter={e => { e.currentTarget.style.color = social.color; e.currentTarget.style.background = social.color + '15'; e.currentTarget.style.borderColor = social.color + '50'; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = ''; e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = ''; }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-shrink-0 flex justify-center mt-10 md:mt-0"
                    >
                        <div className="relative">
                            {/* Outer glow ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-3 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #06B6D4, #6366f1)',
                                    opacity: 0.4,
                                    filter: 'blur(8px)',
                                }}
                            />
                            {/* Static border ring */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 opacity-60" />
                            {/* Image */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full overflow-hidden border-4 border-white dark:border-slate-900">
                                <img
                                    src="/profileimage.png"
                                    alt="Harsh Jaiswal"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-indigo-500', 'to-purple-600', 'flex', 'items-center', 'justify-center');
                                        e.target.parentElement.innerHTML = '<span class="text-7xl">👨‍💻</span>';
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="flex justify-center mt-16"
                >
                    <a href="#about">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-slate-400 hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
                        >
                            <ArrowDown size={28} />
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
