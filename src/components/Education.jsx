import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, ArrowDown } from 'lucide-react';

const educationData = [
    {
        year: '2022 – 2026',
        degree: 'Bachelor of Technology — CSE',
        school: 'G. L. Bajaj Institute of Technology and Management',
        location: 'Greater Noida, UP',
        duration: '2022 – 2026',
        description: 'Pursuing B.Tech in Computer Science Engineering, specializing in full-stack web development, DSA, DBMS, and object-oriented programming.',
        color: '#06B6D4',
        icon: '🎓',
    },
    {
        year: '2021',
        degree: 'Intermediate',
        school: 'B N S D Inter College',
        location: 'Kanpur, UP',
        duration: '2021',
        description: 'Pursued PCM (Physics, Chemistry, Mathematics) with Computer Science, laying the groundwork for engineering.',
        color: '#6366f1',
        icon: '📚',
    },
    {
        year: '2019',
        degree: 'High School',
        school: 'B N S D Inter College',
        location: 'Kanpur, UP',
        duration: '2019',
        description: 'Completed high school education with a strong foundation in Science, Mathematics, and Computer applications.',
        color: '#a855f7',
        icon: '🏫',
    },
];

const TimelineCard = ({ edu, index }) => {
    const isLeft = index % 2 === 0;

    return (
        <div className="relative flex items-center md:justify-center w-full mb-10 md:mb-16">
            {/* The dot on the line */}
            <div className="absolute left-4 md:left-1/2 -ml-4 md:-ml-0 md:-translate-x-1/2 z-20 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.1, type: 'spring', stiffness: 300 }}
                    className="w-8 h-8 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xs md:text-2xl shadow-xl border-2"
                    style={{
                        background: `${edu.color}22`,
                        borderColor: edu.color,
                        boxShadow: `0 0 20px ${edu.color}55, 0 0 40px ${edu.color}22`,
                    }}
                >
                    {edu.icon}
                </motion.div>
            </div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                className={`w-full md:w-5/12 group pl-10 pr-0 md:px-0 ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
            >
                {/* Connector line from dot to card */}
                <div
                    className={`hidden md:block absolute top-7 w-[8%] h-px ${isLeft ? 'right-[50%] translate-x-0' : 'left-[50%] translate-x-0'}`}
                    style={{ background: `linear-gradient(to ${isLeft ? 'left' : 'right'}, ${edu.color}99, transparent)` }}
                />

                <div
                    className="relative rounded-2xl p-5 md:p-6 transition-all duration-500 group-hover:-translate-y-2"
                    style={{
                        background: 'var(--edu-card-bg, rgba(255,255,255,0.85))',
                        border: `1px solid ${edu.color}33`,
                        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                    }}
                >
                    {/* Top glow on hover */}
                    <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(135deg, ${edu.color}0a, transparent)` }}
                    />

                    {/* Year badge */}
                    <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3"
                        style={{ background: `${edu.color}1a`, color: edu.color, border: `1px solid ${edu.color}33` }}
                    >
                        <Calendar size={11} />
                        {edu.duration}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-outfit">{edu.degree}</h3>
                    <p className="text-sm font-semibold mb-2" style={{ color: edu.color }}>{edu.school}</p>

                    <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
                        <MapPin size={11} />
                        {edu.location}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{edu.description}</p>

                    {/* Bottom accent */}
                    <div
                        className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: `linear-gradient(to right, transparent, ${edu.color}, transparent)` }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

const Education = () => {
    return (
        <section id="education" className="py-8 relative bg-white dark:bg-[#0a0a0f] overflow-hidden">
            {/* Grid bg */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }} />
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

            <style>{`
                :root { --edu-card-bg: rgba(255,255,255,0.85); }
                .dark { --edu-card-bg: rgba(255,255,255,0.03); }
            `}</style>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Journey</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold font-outfit text-slate-900 dark:text-white"
                    >
                        My <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl text-lg"
                    >
                        The academic milestones that shaped my engineering journey.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 origin-top"
                        style={{ background: 'linear-gradient(to bottom, transparent, #6366f1, #06B6D4, transparent)' }}
                    />

                    {/* Cards */}
                    {educationData.map((edu, index) => (
                        <TimelineCard key={index} edu={edu} index={index} />
                    ))}

                    {/* End dot */}
                    <div className="relative h-10 flex md:justify-center mt-6">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="absolute left-4 md:left-1/2 -ml-3 md:-ml-0 md:-translate-x-1/2 w-6 h-6 md:w-10 md:h-10 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center"
                            style={{ boxShadow: '0 0 20px #6366f155' }}
                        >
                            <GraduationCap size={16} className="text-indigo-400 hidden md:block" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12 pb-4">
                <a href="#contact">
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

export default Education;
