"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiGo, SiPython, SiCplusplus, SiJavascript, SiDotnet,
    SiLinux, SiGnubash, SiApachespark, SiAndroidstudio, SiMongodb,
    SiQt, SiBlender, SiAdobephotoshop, SiAdobeaftereffects,
    SiAnaconda, SiDocker, SiGit, SiPostman
} from "react-icons/si";
import { FaMicrochip, FaDatabase, FaCode, FaMemory, FaCube } from "react-icons/fa";
import { BsCpu } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

const filterCategories = ["All", "Languages", "Frontend", "Backend", "Tools", "Platforms"];

const skills = [
    {
        name: "Go",
        category: "Backend",
        icon: SiGo,
        color: "#00ADD8",
    },
    {
        name: "Python",
        category: "Backend",
        icon: SiPython,
        color: "#3776AB",
    },
    {
        name: "C++",
        category: "Languages",
        icon: SiCplusplus,
        color: "#00599C",
    },
    {
        name: "SQL",
        category: "Backend",
        icon: FaDatabase,
        color: "#F29111",
    },
    {
        name: "JavaScript",
        category: "Frontend",
        icon: SiJavascript,
        color: "#F7DF1E",
    },
    {
        name: "C#",
        category: "Backend",
        icon: SiDotnet,
        color: "#512BD4",
    },
    {
        name: "Verilog",
        category: "Languages",
        icon: FaMicrochip,
        color: "#FF6B35",
    },
    {
        name: "System Verilog",
        category: "Languages",
        icon: BsCpu,
        color: "#E94560",
    },
    {
        name: "C",
        category: "Languages",
        icon: FaCode,
        color: "#A8B9CC",
    },
    {
        name: "Assembly",
        category: "Languages",
        icon: FaMemory,
        color: "#6E4C13",
    },
    {
        name: "Linux",
        category: "Platforms",
        icon: SiLinux,
        color: "#FCC624",
    },
    {
        name: "Bash",
        category: "Platforms",
        icon: SiGnubash,
        color: "#4EAA25",
    },
    {
        name: "Spark",
        category: "Backend",
        icon: SiApachespark,
        color: "#E25A1C",
    },
    {
        name: "Android Studio",
        category: "Frontend",
        icon: SiAndroidstudio,
        color: "#3DDC84",
    },
    {
        name: "MongoDB",
        category: "Backend",
        icon: SiMongodb,
        color: "#47A248",
    },
    {
        name: "QT",
        category: "Frontend",
        icon: SiQt,
        color: "#41CD52",
    },
    {
        name: "Anaconda",
        category: "Tools",
        icon: SiAnaconda,
        color: "#44A833",
    },
];

const tools = [
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.2,
        },
    },
};

export default function Skills() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredSkills = activeFilter === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeFilter);

    return (
        <section id="skills" className="py-24 relative bg-secondary-bg/30">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Skills & <span className="gradient-text">Tools</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {filterCategories.map((category) => {
                        const isActive = activeFilter === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                    ? "bg-primary text-white shadow-lg shadow-primary/40"
                                    : "bg-card-bg text-text-muted hover:text-foreground hover:bg-accent-dark"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    layout
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="glass p-6 flex flex-col items-center text-center group cursor-pointer"
                                >
                                    <div
                                        className="mb-4 group-hover:scale-110 transition-transform duration-300"
                                        style={{ color: skill.color }}
                                    >
                                        <Icon className="w-12 h-12" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                                    <p className="text-xs text-text-muted">
                                        {skill.category}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* No Results Message */}
                <AnimatePresence>
                    {filteredSkills.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center py-12"
                        >
                            <p className="text-text-muted">No skills match the selected filter.</p>
                            <button
                                onClick={() => setActiveFilter("All")}
                                className="mt-4 text-primary hover:underline"
                            >
                                Clear filter
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Development Tools Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-bold text-center mb-8">
                        Development Tools
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {tools.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="glass p-6 flex flex-col items-center text-center group cursor-pointer"
                                >
                                    <div
                                        className="mb-3 group-hover:scale-110 transition-transform duration-300"
                                        style={{ color: tool.color }}
                                    >
                                        <Icon className="w-10 h-10" />
                                    </div>
                                    <p className="font-medium text-sm">{tool.name}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
