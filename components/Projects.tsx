"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, ExternalLink, Shield, MessageSquare, Users, Github, Globe, Database, Brain, Cpu, Film } from "lucide-react";

const allTechnologies = [
    "All",
    "AI/ML",
    "Python",
    "Java",
    "OpenGL",
    "SQL",
    "Verilog",
    "Socket",
    "Android",
];

const projects = [
    {
        title: "Smart Cybersecurity Education Platform",
        description: "A hands-on education platform focused on real-world simulations for SOC analysts, SOC engineers, and forensic experts. Graduation project implementing advanced AI and ML techniques.",
        technologies: ["AI/ML", "Python"],
        icon: Shield,
        color: "primary",
        period: "Jan 2024 - Present",
        course: "Graduation Project",
    },
    {
        title: "DiSUcord App",
        description: "A Discord-like real-time communication application built with Python sockets. Implements server-client communication and channel-based conversation using raw socket programming.",
        technologies: ["Python", "Socket"],
        icon: MessageSquare,
        color: "secondary",
        period: "Sep 2023 - Jan 2024",
        course: "CS408",
    },
    {
        title: "Solar System 3D Model",
        description: "Developed a 3D interactive model of the Solar System using OpenGL. Features realistic planetary movements and lighting effects.",
        technologies: ["OpenGL"],
        icon: Globe,
        color: "purple",
        period: "Sep 2023 - Jan 2024",
        course: "CS405",
    },
    {
        title: "Freelance Hub Mobile App",
        description: "Mobile application connecting freelance workers with clients. Features include project posting, bidding system, in-app messaging, and user profiles.",
        technologies: ["Java", "Android"],
        icon: Users,
        color: "primary",
        period: "Feb - Jun 2023",
        course: "CS310",
    },
    {
        title: "Nature and Pollution Database",
        description: "Comprehensive SQL database with multiple tables addressing environmental pollution data. Implements complex queries and data relationships.",
        technologies: ["SQL"],
        icon: Database,
        color: "secondary",
        period: "Feb - Jun 2023",
        course: "CS306",
    },
    {
        title: "IMDB Rating Predictor",
        description: "Machine learning implementation to predict movie ratings using Random Forest and Gradient Boosting algorithms. Achieved high accuracy through feature engineering.",
        technologies: ["Python", "AI/ML"],
        icon: Film,
        color: "purple",
        period: "Sep 2022 - Jan 2023",
        course: "CS210",
    },
    {
        title: "Elevator Design",
        description: "Verilog code implementation for FPGA boards simulating elevator control systems. Includes state machines and hardware optimization.",
        technologies: ["Verilog"],
        icon: Cpu,
        color: "primary",
        period: "Sep 2022 - Jan 2023",
        course: "CS303",
    },
    {
        title: "Non-coding RNAs Research",
        description: "Research project investigating the link between non-coding RNAs and diseases like breast cancer. Computational biology analysis.",
        technologies: ["Python"],
        icon: Brain,
        color: "secondary",
        period: "Sep 2021 - Jan 2022",
        course: "Proje201",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.9,
        transition: {
            duration: 0.3,
        },
    },
};

export default function Projects() {
    const [activeFilters, setActiveFilters] = useState<string[]>(["All"]);

    const toggleFilter = (tech: string) => {
        if (tech === "All") {
            setActiveFilters(["All"]);
        } else {
            setActiveFilters((prev) => {
                const newFilters = prev.filter((f) => f !== "All");
                if (prev.includes(tech)) {
                    const result = newFilters.filter((f) => f !== tech);
                    return result.length === 0 ? ["All"] : result;
                } else {
                    return [...newFilters, tech];
                }
            });
        }
    };

    const filteredProjects = activeFilters.includes("All")
        ? projects
        : projects.filter((project) =>
            project.technologies.some((tech) => activeFilters.includes(tech))
        );

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-4">
                        <FolderGit2 className="w-4 h-4" />
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Academic and personal projects showcasing my technical skills
                    </p>
                </motion.div>

                {/* Filter Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {allTechnologies.map((tech) => {
                        const isActive = activeFilters.includes(tech);
                        return (
                            <button
                                key={tech}
                                onClick={() => toggleFilter(tech)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                        ? "bg-primary text-white shadow-lg shadow-primary/40"
                                        : "bg-card-bg text-text-muted hover:text-foreground hover:bg-accent-dark"
                                    }`}
                            >
                                {tech}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                            const Icon = project.icon;
                            return (
                                <motion.div
                                    key={project.title}
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout
                                    whileHover={{ y: -8 }}
                                    className="glass overflow-hidden group"
                                >
                                    {/* Project Image Area */}
                                    <div className={`h-48 relative overflow-hidden ${project.color === "primary" ? "bg-gradient-to-br from-primary/20 to-card-bg" :
                                            project.color === "secondary" ? "bg-gradient-to-br from-secondary/20 to-card-bg" :
                                                "bg-gradient-to-br from-purple-500/20 to-card-bg"
                                        }`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Icon className={`w-20 h-20 opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300 ${project.color === "primary" ? "text-primary" :
                                                    project.color === "secondary" ? "text-secondary" :
                                                        "text-purple-500"
                                                }`} />
                                        </div>
                                        {/* Course Badge */}
                                        <div className="absolute top-3 right-3">
                                            <span className="px-2 py-1 text-xs rounded-full bg-black/40 backdrop-blur-sm text-white">
                                                {project.course}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-text-muted mb-3">{project.period}</p>
                                        <p className="text-text-muted text-sm mb-4 line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`px-3 py-1 text-xs rounded-full cursor-pointer transition-all hover:scale-105 ${project.color === "primary" ? "bg-primary/15 text-primary" :
                                                            project.color === "secondary" ? "bg-secondary/15 text-secondary" :
                                                                "bg-purple-500/15 text-purple-500"
                                                        }`}
                                                    onClick={() => toggleFilter(tech)}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* No Results Message */}
                <AnimatePresence>
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-12"
                        >
                            <p className="text-text-muted">No projects match the selected filters.</p>
                            <button
                                onClick={() => setActiveFilters(["All"])}
                                className="mt-4 text-primary hover:underline"
                            >
                                Clear filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
