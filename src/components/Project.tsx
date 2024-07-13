import React, { ReactNode } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/Card";
import Link from "next/link";
import { GithubIcon, LinkIcon } from "lucide-react";
import TechBadge, { technologies } from "./TechBadge";
import { Separator } from "./ui/Separator";

interface ProjectProps {
    children?: ReactNode;
    title: string;
    href: string;
    githubHref: string;
    demoHref?: string;
    description: string;
    technologies: technologies[];
}

const Project: React.FC<ProjectProps> = ({
    children,
    title,
    href,
    githubHref,
    demoHref,
    description,
    technologies,
}) => {
    return (
        <Card className="w-full">
            <CardHeader className="relative">
                <CardTitle className="text-lg md:text-2xl">
                    <Link
                        href={href}
                        className="group overflow-hidden text-ellipsis whitespace-nowrap hover:underline"
                        target="_blank"
                    >
                        {title}
                        <LinkIcon className="visible mb-1 ml-1 inline w-[1em] align-bottom group-hover:visible md:invisible" />
                    </Link>
                </CardTitle>
                <CardDescription className="flex flex-col overflow-hidden text-ellipsis whitespace-nowrap md:w-min">
                    <Link
                        href={githubHref}
                        className="group overflow-hidden text-ellipsis whitespace-nowrap text-sm hover:underline"
                        target="_blank"
                    >
                        {githubHref}
                        <LinkIcon className="visible ml-1 inline w-[1em] align-bottom group-hover:visible md:invisible" />
                    </Link>
                    {demoHref ? (
                        <Link
                            href={demoHref}
                            className="group overflow-hidden text-ellipsis whitespace-nowrap text-sm hover:underline"
                            target="_blank"
                        >
                            {demoHref}
                            <LinkIcon className="visible ml-1 inline w-[1em] align-bottom group-hover:visible md:invisible" />
                        </Link>
                    ) : (
                        ""
                    )}
                </CardDescription>
                <div className="space-x-1 space-y-1">
                    {technologies.map((technology, key) => {
                        return <TechBadge variant={technology} key={key} />;
                    })}
                </div>
            </CardHeader>
            <CardContent>
                <h3>{description}</h3>
            </CardContent>
        </Card>
    );
};

export default Project;
