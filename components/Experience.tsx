"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Fullstack Developer",
        company: "Sollen Technologies",
        location: "Remote",
        period: "2024",
        description: "Developed cross-platform mobile applications using Flutter. Built and maintained backend services. Collaborated with UI/UX team to implement responsive and intuitive user interfaces.",
        technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
        color: "primary",
    },
    {
        title: "AI Developer Intern",
        company: "Türkiye İş Bankası",
        location: "Istanbul, Turkey",
        period: "2024",
        description: "Developed AI-integrated search engine solutions for internal banking systems. Implemented natural language processing features to enhance user search experience.",
        technologies: ["Python", "NLP", "Machine Learning", "Elasticsearch"],
        color: "secondary",
    },
    {
        title: "Big Data Analyst Intern",
        company: "TÜBİTAK B3LAB",
        location: "Kocaeli, Turkey",
        period: "2023",
        description: "Conducted large-scale data analysis using Python and Apache Spark. Developed data pipelines for processing and analyzing research datasets.",
        technologies: ["Python", "Apache Spark", "Big Data", "Data Analysis"],
        color: "purple",
    },
];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-4">
                        <Briefcase className="w-4 h-4" />
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        My professional journey through various roles and industries
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`glass p-6 md:p-8 border-l-4 ${exp.color === "primary" ? "border-l-primary" :
                                    exp.color === "secondary" ? "border-l-secondary" :
                                        "border-l-purple-500"
                                }`}
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <Building2 className={`w-5 h-5 ${exp.color === "primary" ? "text-primary" :
                                        exp.color === "secondary" ? "text-secondary" :
                                            "text-purple-500"
                                    }`} />
                                <span className={`font-semibold text-lg ${exp.color === "primary" ? "text-primary" :
                                        exp.color === "secondary" ? "text-secondary" :
                                            "text-purple-500"
                                    }`}>
                                    {exp.company}
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-3">{exp.title}</h3>

                            <div className="flex flex-wrap gap-4 text-sm text-text-muted mb-4">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {exp.period}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {exp.location}
                                </span>
                            </div>

                            <p className="text-text-muted mb-4">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-xs rounded-full bg-accent-dark text-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
