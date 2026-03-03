import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Github, Linkedin, MessageSquare, Bell } from 'lucide-react';
import emailjs from '@emailjs/browser'; const Contact = () => {
    const [result, setResult] = React.useState("");
    const [status, setStatus] = React.useState("idle"); // idle, sending, success, error

    const onSubmit = async (event) => {
        event.preventDefault();
        setStatus("sending");
        setResult("Sending....");
        const form = event.target;

        // Variables that map to your EmailJS templates
        const templateParams = {
            from_name: form.name.value,
            reply_to: form.email.value,
            email: form.email.value,     // Used in the 'To Email' setting
            message: form.message.value,
        };

        // EmailJS Configuration
        const SERVICE_ID = "service_knq4383";
        const PUBLIC_KEY = "KNaStlsrXE-kVMYZI";

        // Template IDs from your screenshots
        const TEMPLATE_ID_NOTIFICATION = "template_o29bpki"; // Contact Us
        const TEMPLATE_ID_AUTOREPLY = "template_9jjrcya";    // Auto-Reply

        try {
            // 1. Send Notification Email to YOU
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_NOTIFICATION,
                templateParams,
                PUBLIC_KEY
            );

            // 2. Send Auto-Reply Email to the VISITOR
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID_AUTOREPLY,
                templateParams,
                PUBLIC_KEY
            );

            setStatus("success");
            setResult("Message Sent Successfully!");
            form.reset();
        } catch (error) {
            console.error("Submission error", error);
            setStatus("error");
            setResult("Something went wrong. Please check your EmailJS IDs and try again.");
        }
    };

    return (
        <section id="contact" className="bg-[#e8eaf6] dark:bg-[#1a1c2e] pt-8 pb-0 px-4 md:px-10 transition-colors duration-300 flex flex-col min-h-screen">
            <div className="container max-w-6xl mx-auto flex flex-col flex-1 items-center">
                <h2 className="section-title dark:text-white text-slate-900">Get in <span className="gradient-text">Touch</span></h2>

                {/* Main White Bubbly Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-[#252841] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative min-h-[600px] transition-colors duration-300"
                >
                    {/* Decorative "Bubbly" Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-white dark:bg-[#252841] rounded-full hidden md:block"></div>
                    <div className="absolute top-1/2 -right-10 w-32 h-32 bg-white dark:bg-[#252841] rounded-full hidden lg:block"></div>
                    <div className="absolute bottom-10 -left-10 w-24 h-24 bg-white dark:bg-[#252841] rounded-full hidden md:block"></div>

                    {/* Left Side: Form */}
                    <div className="flex-1 p-8 md:p-12 relative z-10">
                        <h2 className="text-[#5c6bc0] text-4xl font-bold mb-2 font-outfit">Let's talk</h2>
                        <p className="text-slate-500 mb-6 max-w-sm text-sm">
                            To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly.
                        </p>

                        <form onSubmit={onSubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-[#7986cb] ml-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-[#f0f2ff] dark:bg-[#2e325a] text-slate-700 dark:text-slate-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#7986cb] transition-all placeholder-slate-400 text-sm"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-[#7986cb] ml-2">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-[#f0f2ff] dark:bg-[#2e325a] text-slate-700 dark:text-slate-200 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#7986cb] transition-all placeholder-slate-400 text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-[#7986cb] ml-2">Your Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="3"
                                    className="w-full bg-[#f0f2ff] dark:bg-[#2e325a] text-slate-700 dark:text-slate-200 rounded-2xl px-5 py-3 outline-none focus:ring-2 focus:ring-[#7986cb] transition-all resize-none placeholder-slate-400 text-sm"
                                    placeholder="Type something if you want..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col space-y-4">
                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className={`bg-[#7986cb] hover:bg-[#5c6bc0] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-indigo-200 transition-all flex items-center justify-center space-x-2 text-sm w-fit disabled:opacity-50 disabled:cursor-not-allowed`}
                                >
                                    {status === "sending" ? (
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <Send size={18} />
                                    )}
                                    <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                                </button>

                                {status !== "idle" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`text-sm font-medium ${status === "success" ? "text-green-500" : "text-red-500"}`}
                                    >
                                        {result}
                                    </motion.p>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Illustration & Details */}
                    <div className="lg:w-1/2 bg-white dark:bg-[#252841] p-8 md:p-12 flex flex-col justify-between relative z-10 border-t lg:border-t-0 lg:border-l border-slate-50 dark:border-[#2e325a] transition-colors duration-300">
                        {/* Illustration Area */}
                        <div className="relative flex justify-center items-center py-6">
                            <div className="w-52 h-52 bg-[#f0f2ff] dark:bg-[#2e325a] rounded-full flex items-center justify-center relative">
                                <div className="w-36 h-36 bg-[#c5cae9] dark:bg-[#3f4581] rounded-2xl flex items-center justify-center animate-pulse">
                                    <Mail size={60} className="text-white" />
                                </div>
                                {/* Floating Icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className="absolute top-0 right-0 bg-[#ffd54f] p-3 rounded-full text-white shadow-lg"
                                >
                                    <Send size={20} />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="absolute bottom-4 left-0 bg-[#ec407a] p-3 rounded-full text-white shadow-lg"
                                >
                                    <Bell size={20} />
                                </motion.div>
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 5 }}
                                    className="absolute top-1/4 -left-6 bg-[#5c6bc0] p-3 rounded-full text-white shadow-lg"
                                >
                                    <MessageSquare size={20} />
                                </motion.div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4 mt-6 text-[#7986cb] dark:text-[#9fa8da] text-sm">
                            <div className="flex items-center space-x-4">
                                <MapPin size={24} />
                                <span className="text-slate-600 dark:text-slate-300">Greater Noida, Uttar Pradesh, India</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone size={24} />
                                <span className="text-slate-600 dark:text-slate-300">8005161035</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail size={24} />
                                <span className="text-slate-600 dark:text-slate-300">udayjaiswal788@gmail.com</span>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://github.com/Harsh-jaiswal1202" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Github size={18} /></a>
                            <a href="https://linkedin.com/in/harsh-1202-jaiswal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#0077b5] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"><Linkedin size={18} /></a>
                            <a href="https://x.com/Harshjaiswal788" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.403z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <footer className="mt-auto py-4 text-center text-slate-400">
                    <p>© 2026 HARSH JAISWAL. All Rights Reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
