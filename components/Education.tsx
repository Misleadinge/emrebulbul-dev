"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const education = [
    {
        institution: "Sabancı University",
        degree: "Bachelor of Science in Computer Science",
        period: "2021 - 2025",
        description: "Studying computer science with focus on software engineering, algorithms, and data structures. Active member of various tech clubs and organizations.",
        icon: GraduationCap,
        color: "primary",
    },
    {
        institution: "42 Kocaeli",
        degree: "Piscine Program",
        period: "2023",
        description: "Intensive peer-to-peer programming bootcamp. Developed strong problem-solving skills through project-based learning in C programming.",
        icon: Award,
        color: "secondary",
    },
    {
        institution: "Bitaksi GO Bootcamp",
        degree: "Go Programming Bootcamp",
        period: "2023",
        description: "Comprehensive bootcamp focused on Go programming language, backend development, and microservices architecture.",
        icon: BookOpen,
        color: "purple",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Education() {
    return (
        <section id="education" className="py-24 relative bg-secondary-bg/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-secondary mb-4">
                        <GraduationCap className="w-4 h-4" />
                        Academic Background
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Education</span> & Training
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        My academic journey and professional development programs
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {education.map((edu, index) => {
                        const Icon = edu.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="glass p-6"
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${edu.color === "primary" ? "bg-primary/20" :
                                        edu.color === "secondary" ? "bg-secondary/20" :
                                            "bg-purple-500/20"
                                    }`}>
                                    <Icon className={`w-7 h-7 ${edu.color === "primary" ? "text-primary" :
                                            edu.color === "secondary" ? "text-secondary" :
                                                "text-purple-500"
                                        }`} />
                                </div>

                                <div className="flex items-center gap-2 text-sm text-text-muted mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{edu.period}</span>
                                </div>

                                <h3 className={`text-xl font-bold mb-2 ${edu.color === "primary" ? "text-primary" :
                                        edu.color === "secondary" ? "text-secondary" :
                                            "text-purple-500"
                                    }`}>
                                    {edu.institution}
                                </h3>
                                <p className="text-foreground font-medium mb-4">{edu.degree}</p>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
