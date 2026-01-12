"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MessageSquare,
    X,
    Send,
    Bot,
    User,
    Loader2,
    Sparkles
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

const suggestedQuestions = [
    "What are your main skills?",
    "Tell me about your experience",
    "What projects have you worked on?",
    "How can I contact you?",
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Hi! I'm Emre's AI assistant. Ask me anything about his skills, experience, or projects!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input.trim(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input.trim() }),
            });

            const data = await response.json();

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.response,
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch {
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "Sorry, I encountered an error. Please try again!",
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestedQuestion = (question: string) => {
        setInput(question);
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                id="chat"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary hover:bg-primary/90 shadow-lg animate-pulse-glow ${isOpen ? "hidden" : "flex"
                    }`}
                aria-label="Open chat"
            >
                <MessageSquare className="w-6 h-6 text-white" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] max-h-[80vh] glass overflow-hidden flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-accent-dark">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                                        <Image src="/avatar.png" alt="Emre's AI Twin" width={40} height={40} className="object-cover" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card-bg" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Emre&apos;s AI Twin</h3>
                                    <p className="text-xs text-text-muted">Ask me anything!</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-lg hover:bg-accent-dark transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5 text-text-muted" />
                            </button>
                        </div>

                        {/* Under Construction Alert */}
                        <div className="bg-primary/10 border-l-4 border-primary px-4 py-3 mx-4 mt-2 rounded-lg">
                            <div className="flex items-start gap-2">
                                <span className="text-primary text-lg">🚧</span>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-primary mb-1">Under Construction</p>
                                    <p className="text-xs text-text-muted">
                                        This AI assistant is still being developed. Responses may be limited or not fully accurate yet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""
                                        }`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${message.role === "user"
                                            ? "bg-primary"
                                            : "border-2 border-primary"
                                            }`}
                                    >
                                        {message.role === "user" ? (
                                            <User className="w-4 h-4 text-white" />
                                        ) : (
                                            <Image src="/avatar.png" alt="AI Twin" width={32} height={32} className="object-cover" />
                                        )}
                                    </div>
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.role === "user"
                                            ? "bg-primary text-white rounded-br-md"
                                            : "bg-accent-dark rounded-bl-md"
                                            }`}
                                    >
                                        {message.role === "assistant" ? (
                                            <div className="text-sm leading-relaxed chat-markdown">
                                                <ReactMarkdown>{message.content}</ReactMarkdown>
                                            </div>
                                        ) : (
                                            <p className="text-sm leading-relaxed">{message.content}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
                                        <Image src="/avatar.png" alt="AI Twin" width={32} height={32} className="object-cover" />
                                    </div>
                                    <div className="bg-accent-dark rounded-2xl rounded-bl-md px-4 py-3">
                                        <Loader2 className="w-5 h-5 animate-spin text-text-muted" />
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Questions */}
                        {messages.length <= 2 && (
                            <div className="px-4 pb-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-4 h-4 text-secondary" />
                                    <span className="text-xs text-text-muted">Try asking:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {suggestedQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSuggestedQuestion(question)}
                                            className="text-xs px-3 py-1.5 rounded-full bg-accent-dark hover:bg-primary/30 text-text-muted hover:text-foreground transition-all"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <form
                            onSubmit={handleSubmit}
                            className="p-4 border-t border-accent-dark"
                        >
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 rounded-xl bg-accent-dark text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="p-2 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                    aria-label="Send message"
                                >
                                    <Send className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
