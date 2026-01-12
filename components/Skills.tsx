"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const filterCategories = ["All", "Languages", "Tools", "Platforms", "Creative"];

const skills = [
    {
        name: "Go",
        category: "Languages",
        icon: "🔵",
        color: "secondary",
    },
    {
        name: "Python",
        category: "Languages",
        icon: "🐍",
        color: "primary",
    },
    {
        name: "C++",
        category: "Languages",
        icon: "⚡",
        color: "purple",
    },
    {
        name: "SQL",
        category: "Languages",
        icon: "🗄️",
        color: "secondary",
    },
    {
        name: "JavaScript",
        category: "Languages",
        icon: "💛",
        color: "primary",
    },
    {
        name: "C#",
        category: "Languages",
        icon: "💜",
        color: "purple",
    },
    {
        name: "Verilog",
        category: "Languages",
        icon: "🔌",
        color: "secondary",
    },
    {
        name: "System Verilog",
        category: "Languages",
        icon: "⚙️",
        color: "primary",
    },
    {
        name: "C",
        category: "Languages",
        icon: "🔵",
        color: "purple",
    },
    {
        name: "Assembly",
        category: "Languages",
        icon: "🔧",
        color: "secondary",
    },
    {
        name: "Linux",
        category: "Platforms",
        icon: "🐧",
        color: "primary",
    },
    {
        name: "Bash",
        category: "Platforms",
        icon: "💻",
        color: "secondary",
    },
    {
        name: "Spark",
        category: "Tools",
        icon: "⚡",
        color: "primary",
    },
    {
        name: "Xilinx Vivado",
        category: "Tools",
        icon: "🔬",
        color: "purple",
    },
    {
        name: "Android Studio",
        category: "Tools",
        icon: "🤖",
        color: "secondary",
    },
    {
        name: "MongoDB",
        category: "Tools",
        icon: "🍃",
        color: "primary",
    },
    {
        name: "QT",
        category: "Tools",
        icon: "🎨",
        color: "secondary",
    },
    {
        name: "Blender",
        category: "Creative",
        icon: "🎭",
        color: "primary",
    },
    {
        name: "Cinema 4D",
        category: "Creative",
        icon: "🎬",
        color: "purple",
    },
    {
        name: "Photoshop",
        category: "Creative",
        icon: "🖼️",
        color: "secondary",
    },
    {
        name: "After Effects",
        category: "Creative",
        icon: "🎞️",
        color: "primary",
    },
    {
        name: "Anaconda",
        category: "Tools",
        icon: "🐍",
        color: "secondary",
    },
    {
        name: "Spyder",
        category: "Tools",
        icon: "🕷️",
        color: "purple",
    },
];

const tools = [
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
    { name: "VS Code", icon: "💻" },
    { name: "Postman", icon: "📮" },
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
                        {filteredSkills.map((skill) => (
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
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                                <p className={`text-xs ${skill.color === "primary" ? "text-primary" :
                                    skill.color === "secondary" ? "text-secondary" :
                                        "text-purple-500"
                                    }`}>
                                    {skill.category}
                                </p>
                            </motion.div>
                        ))}
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

                {/* Tools & Technologies Section */}
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
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="glass p-6 flex flex-col items-center text-center group cursor-pointer"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {tool.icon}
                                </div>
                                <p className="font-medium text-sm">{tool.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
