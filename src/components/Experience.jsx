import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowDown } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Full Stack Web Developer Intern',
            company: 'Instlytics Consulting LLP',
            period: 'Jul 2025 - Oct 2025',
            location: 'Remote',
            description: 'Assisted in developing and maintaining scalable full-stack web applications. Contributed to building responsive user interfaces with React and creating robust backend RESTful APIs using Node.js and Express.',
            tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript']
        }
    ];

    return (
        <section id="experience" className="py-8 relative bg-[#f8fafc] dark:bg-[#0f111a] overflow-hidden transition-colors duration-500">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden object-cover opacity-30 dark:opacity-20 hidden md:block">
                <div className="absolute top-1/4 -right-64 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 max-w-5xl mx-auto px-4 md:px-0">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title dark:text-white text-slate-900 mb-4">
                            Professional <span className="gradient-text">Experience</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            My journey in building software, leading to my current expertise in full-stack development and AI integrations.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px md:w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent" />

                    <div className="space-y-12 block">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="relative flex flex-col md:flex-row items-center w-full max-w-4xl"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-12 -ml-1.5 md:-ml-3 w-3 h-3 md:w-6 md:h-6 rounded-full bg-indigo-500 border-2 md:border-4 border-[#f8fafc] dark:border-[#0f111a] shadow-lg shadow-indigo-500/40 z-10" />

                                {/* Content Card container */}
                                <div className="w-full pl-8 md:pl-28 pr-0 md:pr-4">
                                    <div className="group relative bg-white dark:bg-slate-900 p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 md:hover:translate-x-2 cursor-default">

                                        {/* Glow Effect behind card on hover */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500 -z-10" />

                                        <div className="flex flex-col md:items-start gap-1 mb-4">
                                            <h3 className="text-xl md:text-2xl font-bold font-outfit text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                                                <Briefcase size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4 mb-4 text-xs font-medium text-slate-500 dark:text-slate-400 md:justify-start">
                                            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                                <Calendar size={14} className="text-indigo-500" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                                <MapPin size={14} className="text-indigo-500" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 md:text-left">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-4 md:justify-start">
                                            {exp.tech.map((tech, i) => (
                                                <span key={i} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Connector indicator arrow (visible strictly on md+) */}
                                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-t border-l border-slate-200 dark:border-slate-800 rotate-45 z-20 -left-2 border-t-0 border-l-0 border-r border-b group-hover:border-indigo-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-16 pb-4">
                    <a href="#projects">
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

export default Experience;
