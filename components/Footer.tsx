"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="py-12 border-t border-accent-dark">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Left - Branding */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-xl font-bold gradient-text mb-2">Emre Bülbül</h3>
                        <p className="text-text-muted text-sm">
                            Computer Science Graduate & Fullstack Developer
                        </p>
                    </motion.div>

                    {/* Center - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <Link
                            href="https://github.com/misleadinge"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass hover:bg-primary/20 transition-all group"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                        </Link>
                        <Link
                            href="https://linkedin.com/in/emre-bulbul"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass hover:bg-secondary/20 transition-all group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 text-text-muted group-hover:text-secondary transition-colors" />
                        </Link>
                        <Link
                            href="mailto:emrebulbul22@gmail.com"
                            className="p-3 rounded-xl glass hover:bg-purple-500/20 transition-all group"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5 text-text-muted group-hover:text-purple-500 transition-colors" />
                        </Link>
                    </motion.div>

                    {/* Right - Back to Top */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        onClick={scrollToTop}
                        className="p-3 rounded-xl glass hover:bg-primary/20 transition-all group"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors" />
                    </motion.button>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-8 pt-8 border-t border-accent-dark text-center"
                >
                    <p className="text-text-muted text-sm flex items-center justify-center gap-1">
                        Made with <Heart className="w-4 h-4 text-primary inline" /> by Emre Bülbül
                        <span className="mx-2">•</span>
                        © {year ?? 2026} All rights reserved
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
