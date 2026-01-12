import { NextRequest, NextResponse } from "next/server";

// Emre's CV data for the AI assistant
const emreData = {
    name: "Emre Bülbül",
    title: "Computer Science Student at Sabancı University & Fullstack Developer",

    skills: {
        languages: ["Go", "Python", "C++", "Dart", "SQL", "JavaScript", "TypeScript"],
        frameworks: ["Flutter", "React", "Next.js", "FastAPI", "Firebase"],
        tools: ["Docker", "Git", "Apache Spark", "Elasticsearch"],
        areas: ["Mobile Development", "Web Development", "Big Data", "Machine Learning", "Blockchain"],
    },

    experience: [
        {
            company: "Sollen Technologies",
            role: "Fullstack Developer",
            focus: "Flutter/Mobile Development",
            description: "Developed cross-platform mobile applications using Flutter, built backend services, and collaborated with UI/UX team.",
        },
        {
            company: "Türkiye İş Bankası",
            role: "AI Developer Intern",
            focus: "AI-integrated Search Engine",
            description: "Developed AI-integrated search engine solutions for internal banking systems with NLP features.",
        },
        {
            company: "TÜBİTAK B3LAB",
            role: "Big Data Analyst Intern",
            focus: "Big Data with Python & Spark",
            description: "Conducted large-scale data analysis using Python and Apache Spark, developed data pipelines.",
        },
    ],

    education: [
        {
            institution: "Sabancı University",
            degree: "Bachelor of Science in Computer Science",
            year: "2021-2025",
        },
        {
            institution: "42 Kocaeli",
            program: "Piscine Program",
            year: "2023",
        },
        {
            institution: "Bitaksi GO Bootcamp",
            focus: "Go Programming",
            year: "2023",
        },
    ],

    projects: [
        {
            name: "Smart Cybersecurity Education Platform",
            description: "An interactive educational platform for teaching cybersecurity concepts through hands-on exercises and simulations.",
            technologies: ["Python", "React", "FastAPI", "Docker"],
        },
        {
            name: "DiSUcord",
            description: "A Discord-like real-time communication application built with Python sockets.",
            technologies: ["Python", "Socket Programming", "Threading", "SQLite"],
        },
        {
            name: "Freelance Hub App",
            description: "A mobile application connecting freelancers with clients with project posting, bidding, and payment features.",
            technologies: ["Flutter", "Firebase", "Cloud Functions", "Stripe"],
        },
    ],

    blockchain: {
        role: "Board Member at SUBCHAIN",
        description: "Active member and board member of SUBCHAIN, Sabancı University's blockchain club.",
    },

    contact: {
        github: "https://github.com/misleadinge",
        linkedin: "https://linkedin.com/in/emre-bulbul",
    },
};

function generateResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    // Skills related questions
    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack") || lowerMessage.includes("know")) {
        return `Emre is proficient in a wide range of technologies!\n\n**Programming Languages:** ${emreData.skills.languages.join(", ")}\n\n**Frameworks & Tools:** ${emreData.skills.frameworks.join(", ")}\n\n**Areas of Expertise:** ${emreData.skills.areas.join(", ")}\n\nHe's particularly strong in mobile development with Flutter and backend development with Go and Python.`;
    }

    // Experience related questions
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("job") || lowerMessage.includes("intern")) {
        const expList = emreData.experience.map(exp =>
            `• **${exp.company}** - ${exp.role}\n  Focus: ${exp.focus}`
        ).join("\n\n");
        return `Here's Emre's professional experience:\n\n${expList}\n\nHe has hands-on experience with mobile development, AI integration, and big data analysis!`;
    }

    // Project related questions
    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("built") || lowerMessage.includes("created")) {
        const projectList = emreData.projects.map(proj =>
            `• **${proj.name}**\n  ${proj.description}\n  Tech: ${proj.technologies.join(", ")}`
        ).join("\n\n");
        return `Here are some of Emre's notable projects:\n\n${projectList}`;
    }

    // Education related questions
    if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("university") || lowerMessage.includes("school") || lowerMessage.includes("degree")) {
        return `**Education:**\n\n• **Sabancı University** - B.Sc. in Computer Science (2021-2025)\n• **42 Kocaeli** - Piscine Program (2023)\n• **Bitaksi GO Bootcamp** - Go Programming (2023)\n\nEmre is currently finishing his CS degree at Sabancı University, one of Turkey's top universities!`;
    }

    // Contact related questions
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("email") || lowerMessage.includes("connect") || lowerMessage.includes("hire")) {
        return `You can reach Emre through:\n\n🔗 **GitHub:** ${emreData.contact.github}\n🔗 **LinkedIn:** ${emreData.contact.linkedin}\n\nFeel free to connect for job opportunities, collaborations, or just to say hi!`;
    }

    // Blockchain related questions
    if (lowerMessage.includes("blockchain") || lowerMessage.includes("crypto") || lowerMessage.includes("web3") || lowerMessage.includes("subchain")) {
        return `Emre is actively involved in the blockchain space!\n\n${emreData.blockchain.description}\n\nHe's particularly interested in smart contracts and Web3 development.`;
    }

    // Who is Emre / About
    if (lowerMessage.includes("who") || lowerMessage.includes("about") || lowerMessage.includes("introduce") || lowerMessage.includes("tell me about")) {
        return `**${emreData.name}** is a ${emreData.title}.\n\nHe's passionate about building innovative solutions with modern technologies, with experience spanning mobile development, AI integration, and big data analysis.\n\nHe's also a Board Member at SUBCHAIN (Sabancı University Blockchain Club) and actively contributes to the tech community.`;
    }

    // Flutter / Mobile
    if (lowerMessage.includes("flutter") || lowerMessage.includes("mobile") || lowerMessage.includes("app")) {
        return `Emre has strong experience in mobile development!\n\nAt **Sollen Technologies**, he worked as a Fullstack Developer focusing on Flutter/Mobile development. He built cross-platform apps, integrated backend services, and worked closely with the UI/UX team.\n\nHe also created the **Freelance Hub App** using Flutter and Firebase.`;
    }

    // Python
    if (lowerMessage.includes("python") || lowerMessage.includes("data") || lowerMessage.includes("spark")) {
        return `Emre has extensive Python experience!\n\nAt **TÜBİTAK B3LAB**, he worked on big data analysis using Python and Apache Spark. He also used Python for the **Smart Cybersecurity Education Platform** and **DiSUcord** projects.\n\nHis Python expertise includes data analysis, machine learning, and backend development.`;
    }

    // Go
    if (lowerMessage.includes("go") || lowerMessage.includes("golang")) {
        return `Emre is skilled in Go programming!\n\nHe completed the **Bitaksi GO Bootcamp** where he learned about:\n• Backend development with Go\n• Microservices architecture\n• Building scalable systems\n\nGo is one of his strongest programming languages!`;
    }

    // Greeting
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage === "yo") {
        return `Hey there! 👋 I'm Emre's AI assistant. I can tell you about his:\n\n• 💼 Work experience\n• 🎓 Education\n• 🚀 Projects\n• 💻 Skills & technologies\n• 📫 Contact information\n\nWhat would you like to know?`;
    }

    // Thank you
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
        return `You're welcome! 😊 If you have any more questions about Emre's background, skills, or projects, feel free to ask. You can also reach out to him directly on GitHub or LinkedIn!`;
    }

    // Default response
    return `I'd be happy to tell you more about Emre! You can ask me about:\n\n• His **skills** and technologies\n• **Work experience** at companies like İş Bankası and TÜBİTAK\n• **Projects** he's built\n• His **education** at Sabancı University\n• How to **contact** him\n\nWhat interests you?`;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { message } = body;

        if (!message || typeof message !== "string") {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        // Simulate API delay for realism
        await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 500));

        const response = generateResponse(message);

        return NextResponse.json({ response });
    } catch {
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
