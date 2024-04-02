import React, { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

interface ProjectProps {
    children?: ReactNode;
    title: string;
    href: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({
    children,
    title,
    href,
    description,
}) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-lg md:text-2xl">{title}</CardTitle>
                <CardDescription className="overflow-hidden text-ellipsis whitespace-nowrap">
                    <Link
                        href={href}
                        className="group text-sm hover:underline overflow-hidden text-ellipsis whitespace-nowrap"
                        target="_blank"
                    >
                        {href}
                        <LinkIcon className="visible md:invisible inline w-[1em] align-bottom group-hover:visible" />
                    </Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <h3>{description}</h3>
            </CardContent>
        </Card>
    );
};

export default Project;
