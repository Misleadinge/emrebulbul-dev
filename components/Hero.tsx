"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20" />
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary rounded-full blur-[150px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-dark rounded-full blur-[200px] opacity-30" />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#a0a0a0 1px, transparent 1px), linear-gradient(90deg, #a0a0a0 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary">
                        <Sparkles className="w-4 h-4" />
                        Available for opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    Hi, I&apos;m{" "}
                    <span className="gradient-text">Emre Bülbül</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-8"
                >
                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed">
                        <span className="text-foreground font-semibold">Computer Science Graduate</span> from{" "}
                        <span className="text-primary">Sabancı University</span>
                        <br />
                        &amp;{" "}
                        <span className="text-foreground font-semibold">Fullstack Developer</span> @{" "}
                        <span className="text-primary">SollenTechnologies</span>
                    </p>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-text-muted mb-10 max-w-2xl mx-auto"
                >
                    Passionate about building innovative solutions with modern technologies.
                    Experienced in mobile and web development, AI integration, and big data analysis.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center justify-center gap-4 mb-16"
                >
                    <Link
                        href="https://github.com/misleadinge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card-bg border border-accent-dark hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                    >
                        <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span>GitHub</span>
                    </Link>
                    <Link
                        href="https://linkedin.com/in/emre-bulbul"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="animate-float"
                >
                    <Link
                        href="#experience"
                        className="inline-flex flex-col items-center text-text-muted hover:text-foreground transition-colors"
                    >
                        <span className="text-sm mb-2">Scroll to explore</span>
                        <ChevronDown className="w-6 h-6" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
