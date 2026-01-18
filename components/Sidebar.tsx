"use client";

import React, { useEffect, useState } from "react";
import { Mail, FileDown, Linkedin, Github } from "lucide-react";

const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
];

export function Sidebar() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        id: string
    ) => {
        e.preventDefault();
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                    Abhi Shandilya
                </h1>
                <h2 className="mt-3 text-lg font-medium text-[var(--text-primary)]">
                    Product Builder*
                </h2>
                <p className="mt-4 max-w-xs text-[var(--text-secondary)] leading-relaxed">
                    Building products that make a difference.
                </p>

                <nav className="hidden lg:block mt-16">
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className={`nav-link group flex items-center gap-4 text-xs font-bold uppercase tracking-widest ${activeSection === link.id
                                        ? "text-[var(--text-primary)] active"
                                        : "text-[var(--text-muted)]"
                                        }`}
                                >
                                    <span className="nav-indicator" />
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <ul className="mt-8 flex items-center gap-5">
                <li>
                    <a
                        href="https://www.linkedin.com/in/abhijitshandilya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-6 w-6" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Luridin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="h-6 w-6" />
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:abhijit.shandilya@live.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="Mail"
                    >
                        <Mail className="h-6 w-6" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://drive.google.com/file/d/1AnOCf9swLMSkef9QQkkOHDdGg3NgqVp6/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="Resume Download"
                    >
                        <FileDown className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </header>
    );
}
