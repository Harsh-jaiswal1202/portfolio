import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="about" className="py-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative z-10 aspect-square rounded-3xl overflow-hidden glass-card p-4 group">
                            <div className="w-full h-full bg-slate-900/50 dark:bg-slate-900/40 rounded-2xl flex items-center justify-center relative overflow-hidden">
                                {/* Modern Abstract Decoration */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#6366f1,transparent_70%)]" />
                                {/* User Profile Image */}
                                <motion.img
                                    src="/propic.png"
                                    alt="Harsh Jaiswal"
                                    className="w-full h-full object-cover transition-all duration-1000 filter brightness-[1.1] contrast-[1.1] saturate-[1.15] sepia-[0.05]"
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.8, ease: "easeOut" }}
                                />

                                {/* Premium Shine Overlay */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30" />

                                {/* Overlay Gradient - Lightened for Clarity */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                            <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">About Me</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-8 font-outfit text-slate-900 dark:text-white leading-tight">
                            Crafting Digital <span className="gradient-text">Excellence.</span>
                        </motion.h2>

                        <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            <motion.p variants={itemVariants}>
                                Hi, I’m <span className="text-slate-900 dark:text-white font-semibold">Harsh Jaiswal</span>,
                                a passionate <span className="text-indigo-500 font-medium">Software Engineer</span> and
                                <span className="text-purple-500 font-medium"> Full Stack Developer</span> specializing in
                                <span className="underline decoration-indigo-500/30 underline-offset-4"> MERN Stack development</span>.
                                I enjoy building scalable, real-world web applications that solve practical problems and deliver meaningful user experiences.
                            </motion.p>

                            <motion.p variants={itemVariants}>
                                I have hands-on experience developing <span className="text-slate-900 dark:text-white font-medium">production-ready</span> full-stack applications,
                                designing responsive frontend interfaces using <span className="text-indigo-400">React.js</span>,
                                and building secure backend systems with <span className="text-indigo-400">Node.js</span> and <span className="text-indigo-400">Express.js</span>.
                            </motion.p>

                            <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                                <p className="text-base italic">
                                    "My core interest lies in combining <span className="text-indigo-500">software engineering principles</span> with
                                    <span className="text-purple-500"> AI-driven solutions</span>."
                                </p>
                            </motion.div>

                            <motion.p variants={itemVariants} className="text-base text-slate-500 dark:text-slate-500">
                                Alongside development, I actively strengthen my foundation in Data Structures, System Design, and Backend Architecture to build impactful technology products.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 flex items-center space-x-4"
                        >
                            <div className="h-px flex-grow bg-slate-200 dark:bg-white/10" />
                            <div className="flex items-center space-x-3 text-indigo-500">
                                <span className="animate-pulse">🚀</span>
                                <span className="text-sm font-bold uppercase tracking-wider">Currently Seeking Opportunities</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center mt-12 pb-4">
                <a href="#experience">
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

export default About;
