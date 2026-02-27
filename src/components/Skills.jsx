import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import {
    SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiMysql, SiExpress,
    SiHtml5, SiCss3, SiGit, SiRender, SiVercel,
    SiCplusplus, SiPython, SiOpenjdk, SiPostman, SiGithub, SiJavascript,
} from 'react-icons/si';
import { Database, Cpu, Settings, Globe, BookOpen, Code2 } from 'lucide-react';

const allSkills = [
    // Frontend
    { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <SiCss3 />, color: '#1572B6' },
    { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    // Backend
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#aaaaaa' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    // Programming
    { name: 'Java', icon: <SiOpenjdk />, color: '#007396' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    // Core Subjects
    { name: 'DBMS', icon: <Database />, color: '#4479A1' },
    { name: 'DSA', icon: <Cpu />, color: '#6366f1' },
    { name: 'OOPs', icon: <Settings />, color: '#a855f7' },
    // Tools
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub />, color: '#cccccc' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'VS Code', icon: <Code2 />, color: '#007ACC' },
    { name: 'Render', icon: <SiRender />, color: '#46E3B7' },
    { name: 'Vercel', icon: <SiVercel />, color: '#cccccc' },
];

const SkillCard = ({ skill }) => (
    <div
        className="relative flex-shrink-0 flex flex-col items-center justify-center w-36 h-40 rounded-2xl mx-3 cursor-pointer group"
        style={{
            background: 'var(--skill-card-bg)',
            border: '1px solid var(--skill-card-border)',
        }}
    >
        {/* Glow on hover */}
        <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
            style={{ background: `${skill.color}22` }}
        />

        {/* Icon container */}
        <div
            className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
            style={{
                background: 'rgba(255,255,255,0.07)',
                border: `1px solid ${skill.color}44`,
                boxShadow: `0 0 20px ${skill.color}22`,
                color: skill.color,
            }}
        >
            {React.cloneElement(skill.icon, { size: 40 })}
        </div>

        <span
            className="relative z-10 text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300 text-center px-2"
        >
            {skill.name}
        </span>
    </div>
);

const MarqueeRow = ({ skills, reverse = false, speed = 40 }) => {
    const doubled = [...skills, ...skills];
    return (
        <div className="relative overflow-hidden w-full py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <motion.div
                className="flex"
                animate={{ x: reverse ? ['0%', '50%'] : ['0%', '-50%'] }}
                transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
            >
                {doubled.map((skill, i) => (
                    <SkillCard key={`${skill.name}-${i}`} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    const row1 = allSkills.slice(0, 11);
    const row2 = allSkills.slice(10);

    return (
        <section id="skills" className="py-8 relative bg-slate-100 dark:bg-[#0a0a0f] overflow-hidden transition-colors duration-500">
            {/* Grid background */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />

            {/* Glow orbs */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* CSS vars for theme-aware card styles */}
            <style>{`
                :root .group { --skill-card-bg: rgba(255,255,255,0.8); --skill-card-border: rgba(0,0,0,0.08); }
                .dark .group { --skill-card-bg: rgba(255,255,255,0.04); --skill-card-border: rgba(255,255,255,0.08); }
            `}</style>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Expertise</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold font-outfit text-slate-900 dark:text-white text-center"
                    >
                        My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl text-lg"
                    >
                        Technologies and tools I use to craft modern digital experiences.
                    </motion.p>
                </div>

                {/* Marquee Rows */}
                <MarqueeRow skills={row1} reverse={false} speed={35} />
                <MarqueeRow skills={row2} reverse={true} speed={45} />

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-12 pb-4">
                    <a href="#education">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-slate-400 hover:text-indigo-500 transition-colors duration-300 cursor-pointer"
                        >
                            <ArrowDown size={28} />
                        </motion.div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
