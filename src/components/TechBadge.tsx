import React from "react";
import {
    SiArduino,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReact,
    SiSpotify,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { Badge } from "./ui/Badge";
import { cn } from "~/lib/utils";

interface TechBadgeProps {
    variant: technologies;
    size?: "large" | "normal";
    className?: string;
    blur?: boolean;
}

export type technologies =
    | "nextjs"
    | "tailwindcss"
    | "prisma"
    | "postgresql"
    | "mysql"
    | "spotify"
    | "vercel"
    | "html"
    | "css"
    | "xsl"
    | "xml"
    | "javascript"
    | "typescript"
    | "ajax"
    | "react"
    | "nodejs"
    | "python"
    | "arduino";

const variants = {
    nextjs: {
        icon: <SiNextdotjs className="mr-2" />,
        title: "next.js",
        className: "bg-neutral-700 text-white",
    },
    tailwindcss: {
        icon: <SiTailwindcss className="mr-2" />,
        title: "tailwindcss",
        className: "bg-sky-500 text-white",
    },
    prisma: {
        icon: <SiPrisma className="mr-2" />,
        title: "prisma",
        className: "bg-sky-700 text-white",
    },
    postgresql: {
        icon: <SiPostgresql className="mr-2" />,
        title: "postgresql",
        className: "bg-sky-900 text-white",
    },
    mysql: {
        icon: <SiMysql className="mr-2" />,
        title: "mysql",
        className: "bg-sky-950 text-white",
    },
    spotify: {
        icon: <SiSpotify className="mr-2" />,
        title: "spotify api",
        className: "bg-green-600 text-neutral-700",
    },
    vercel: {
        icon: <SiVercel className="mr-2" />,
        title: "vercel",
        className: "bg-neutral-800 text-white",
    },
    html: {
        icon: <SiHtml5 className="mr-2" />,
        title: "html",
        className: "bg-orange-600 text-white",
    },
    css: {
        icon: <SiCss3 className="mr-2" />,
        title: "css",
        className: "bg-sky-600 text-white",
    },
    xsl: {
        icon: <BsFiletypeXml className="mr-2" />,
        title: "xsl",
        className: "bg-green-500 text-neutral-700",
    },
    xml: {
        icon: <BsFiletypeXml className="mr-2" />,
        title: "xml",
        className: "bg-orange-300 text-white",
    },
    javascript: {
        icon: <SiJavascript className="mr-2" />,
        title: "javascript",
        className: "bg-yellow-200 text-neutral-800",
    },
    typescript: {
        icon: <SiTypescript className="mr-2" />,
        title: "typescript",
        className: "bg-blue-500 text-white",
    },
    ajax: {
        icon: <SiJavascript className="mr-2" />,
        title: "ajax",
        className: "bg-sky-500 text-white",
    },
    react: {
        icon: <SiReact className="mr-2" />,
        title: "react",
        className: "bg-sky-300 text-neutral-800",
    },
    nodejs: {
        icon: <SiNodedotjs className="mr-2" />,
        title: "node.js",
        className: "bg-green-600 text-white",
    },
    python: {
        icon: <SiPython className="mr-2" />,
        title: "python",
        className: "bg-sky-700 text-white",
    },
    arduino: {
        icon: <SiArduino className="mr-2" />,
        title: "arduino",
        className: "bg-teal-700 text-white",
    },
};

const TechBadge: React.FC<TechBadgeProps> = ({
    variant,
    size = "normal",
    className,
    blur = false,
}) => {
    return (
        <Badge
            variant={size === "normal" ? "noHover" : "large"}
            className={cn("relative", className, variants[variant].className)}
        >
            {blur ? (
                <div
                    className={cn(
                        "absolute -z-50 h-full w-full blur-2xl",
                        variants[variant].className,
                    )}
                />
            ) : (
                ""
            )}
            {variants[variant].icon}
            {variants[variant].title}
        </Badge>
    );
};

export default TechBadge;
