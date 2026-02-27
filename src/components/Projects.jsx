import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';

const techColors = {
    'React.js': { bg: '#20232a', text: '#61DAFB', border: '#61DAFB40' },
    'Node.js': { bg: '#1a2f1a', text: '#6cc24a', border: '#6cc24a40' },
    'Express.js': { bg: '#1a1a1a', text: '#aaaaaa', border: '#aaaaaa40' },
    'MongoDB': { bg: '#1a2b1a', text: '#47A248', border: '#47A24840' },
    'FastAPI': { bg: '#0d2929', text: '#009688', border: '#00968840' },
    'Gemini AI': { bg: '#1a1535', text: '#a78bfa', border: '#a78bfa40' },
    'PyTorch': { bg: '#2b1a1a', text: '#EE4C2C', border: '#EE4C2C40' },
    'SpeechBrain': { bg: '#1a1535', text: '#c084fc', border: '#c084fc40' },
    'spaCy': { bg: '#0d1f2d', text: '#09a3d5', border: '#09a3d540' },
    'OpenCV': { bg: '#0d2040', text: '#5c85d6', border: '#5c85d640' },
    'Python': { bg: '#1a2535', text: '#FFD43B', border: '#FFD43B40' },
    'HTML': { bg: '#2b1a0d', text: '#E44D26', border: '#E44D2640' },
    'CSS': { bg: '#0d1a2b', text: '#1572B6', border: '#1572B640' },
    'JavaScript': { bg: '#2b2510', text: '#F7DF1E', border: '#F7DF1E40' },
};

const TechBadge = ({ tech, index }) => {
    const style = techColors[tech] || { bg: '#1e1e2e', text: '#94a3b8', border: '#94a3b840' };
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, type: 'spring', stiffness: 300 }}
            whileHover={{ scale: 1.1, y: -2 }}
            className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold cursor-default"
            style={{
                background: style.bg,
                color: style.text,
                border: `1px solid ${style.border}`,
                boxShadow: `0 0 6px ${style.border}`,
            }}
        >
            {tech}
        </motion.span>
    );
};

const Projects = () => {
    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const projects = [
        {
            title: 'CareerVision AI',
            category: 'AI-Powered Career & Interview Platform',
            description: 'Implemented a full-stack career platform providing personalized career guidance, resume scoring, and mock interview evaluation with analytics dashboard.',
            image: '/careervision.png',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'FastAPI', 'Gemini AI', 'PyTorch', 'SpeechBrain', 'spaCy', 'OpenCV'],
            accent: '#6366f1',
            links: { github: null, external: 'https://careervision.vercel.app/' }
        },
        {
            title: 'HealthEase',
            category: 'Medical Appointment Management System',
            description: 'Built a full-stack medical appointment and prescription management web app using React.js, Node.js, Express.js and MongoDB, implementing modular RESTful APIs and a responsive UI.',
            image: '/healthease.png',
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
            accent: '#10b981',
            links: { github: 'https://github.com/Harsh-jaiswal1202/healthease', external: 'https://healthease-mu.vercel.app/' }
        },
        {
            title: 'SkyView',
            category: 'Weather App',
            description: 'Developed a responsive weather application with real-time data and automatic location detection using React.js and the OpenWeatherMap API including auto-detecting user location, a 5-day forecast, dynamic background changes based on weather, and hourly updates.',
            image: '/skyview.png',
            tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
            accent: '#38bdf8',
            links: { github: 'https://github.com/Harsh-jaiswal1202/skyview-weather', external: 'https://685b9f2dacf12c6bd441cd02--skymet.netlify.app/' }
        },
        {
            title: 'TickTide',
            category: 'To-Do List App',
            description: 'Developed a responsive To-Do List App including powerful productivity features with a clean, interactive UI.',
            image: '/ticktide.png',
            tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
            accent: '#8b5cf6',
            links: { github: 'https://github.com/Harsh-jaiswal1202/todo-list', external: 'https://6866295796f9f6000873830c--ticktide.netlify.app/' }
        }
    ];

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setAtStart(el.scrollLeft <= 10);
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 10);
    };

    const scrollNext = () => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.firstElementChild?.clientWidth + 24 || 380;
        el.scrollBy({ left: cardWidth, behavior: 'smooth' });
    };

    const scrollPrev = () => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = el.firstElementChild?.clientWidth + 24 || 380;
        el.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    };

    return (
        <section id="projects" className="py-8">
            <div className="container">
                {/* Header + Nav buttons */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="section-title dark:text-white text-slate-900 !mb-0">
                        Latest <span className="gradient-text">Work</span>
                    </h2>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={scrollPrev}
                            disabled={atStart}
                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                ${atStart
                                    ? 'border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                                    : 'border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white cursor-pointer hover:shadow-lg hover:shadow-indigo-500/30'
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={scrollNext}
                            disabled={atEnd}
                            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300
                                ${atEnd
                                    ? 'border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                                    : 'border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white cursor-pointer hover:shadow-lg hover:shadow-indigo-500/30'
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Scrollable row — shows 3 at a time */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col flex-shrink-0 w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-indigo-400 dark:hover:border-indigo-500"
                            onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 60px -10px ${project.accent}40`}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = ''}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-indigo-900/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                            className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/25 transition-all hover:scale-110">
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {project.links.external && project.links.external !== '#' && (
                                        <a href={project.links.external} target="_blank" rel="noopener noreferrer"
                                            className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/25 transition-all hover:scale-110">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5">
                                <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-1">
                                    {project.category}
                                </span>
                                <div className="mb-3">
                                    <h3 className="text-lg font-bold font-outfit dark:text-white text-slate-900 group-hover:text-indigo-500 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="h-0.5 w-10 mt-1 rounded-full" style={{ background: project.accent }} />
                                </div>
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.tech.map((tech, i) => (
                                        <TechBadge key={tech} tech={tech} index={i} />
                                    ))}
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {projects.map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12 pb-4">
                <a href="#skills">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-slate-400 hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
                    >
                        <ArrowDown size={28} />
                    </motion.div>
                </a>
            </div>
        </section>
    );
};

export default Projects;
