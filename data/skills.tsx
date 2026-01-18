import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiConfluence,
    SiFigma,
    SiFramer,
    SiGit,
    SiJira,
    SiMiro,
    SiNotion,
    SiReplit,
    SiPostgresql,
    SiTableau,
    SiVercel,
} from "react-icons/si";
import { RiCursorFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import {
    BrainCircuit,
    Repeat,
    ChartBar,
    Handshake,
    Rocket,
    ClipboardList,
    Palette,
} from "lucide-react";

export type SkillItem =
    | string
    | {
        name: string;
        icon: React.ComponentType<{ className?: string }>;
        url?: string;
    };

export interface SkillGroup {
    category: string;
    items: SkillItem[];
}

export const skills: SkillGroup[] = [
    {
        category: "Domain",
        items: [
            {
                name: "AI/ML",
                icon: BrainCircuit,
                // url: undefined implies non-clickable
            },
            {
                name: "Agile",
                icon: Repeat,
            },
            {
                name: "Data Analysis",
                icon: ChartBar,
            },
            {
                name: "Pre Sales",
                icon: Handshake,
            },
            {
                name: "Product Development",
                icon: Rocket,
            },
            {
                name: "Product Management",
                icon: ClipboardList,
            },
            {
                name: "UI/UX",
                icon: Palette,
            },
        ],
    },
    {
        category: "Tools and Platforms",
        items: [
            {
                name: "Aha!",
                icon: FaLaptopCode,
                url: "https://www.aha.io/",
            },
            {
                name: "Adobe Illustrator",
                icon: SiAdobeillustrator,
                url: "https://www.adobe.com/products/illustrator.html",
            },
            {
                name: "Adobe Photoshop",
                icon: SiAdobephotoshop,
                url: "https://www.adobe.com/products/photoshop.html",
            },
            {
                name: "Confluence",
                icon: SiConfluence,
                url: "https://www.atlassian.com/software/confluence",
            },
            {
                name: "Cursor",
                icon: RiCursorFill,
                url: "https://cursor.sh/",
            },
            {
                name: "Figma",
                icon: SiFigma,
                url: "https://www.figma.com/",
            },
            {
                name: "Framer",
                icon: SiFramer,
                url: "https://www.framer.com/",
            },
            {
                name: "Git",
                icon: SiGit,
                url: "https://git-scm.com/",
            },
            {
                name: "Jira",
                icon: SiJira,
                url: "https://www.atlassian.com/software/jira",
            },
            {
                name: "Miro",
                icon: SiMiro,
                url: "https://miro.com/",
            },
            {
                name: "Notion",
                icon: SiNotion,
                url: "https://www.notion.so/",
            },
            {
                name: "Replit",
                icon: SiReplit,
                url: "https://replit.com/",
            },
            {
                name: "SQL",
                icon: SiPostgresql,
                url: "https://www.postgresql.org/",
            },
            {
                name: "Tableau",
                icon: SiTableau,
                url: "https://www.tableau.com/",
            },
            {
                name: "Vercel",
                icon: SiVercel,
                url: "https://vercel.com/",
            },
        ],
    },
];
