import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/Card";
import TechBadge, { technologies } from "./TechBadge";

interface WorkProps {
    company: string;
    position: string;
    description: string;
    skills: string;
    dates: string;
    technologies: technologies[];
}

const Work: React.FC<WorkProps> = ({
    company,
    dates,
    description,
    skills,
    position,
    technologies,
}) => {
    return (
        <Card className="w-full border-none bg-background">
            <CardHeader className="relative">
                <CardTitle className="text-lg md:text-2xl">{company}</CardTitle>
                <CardDescription>{position}</CardDescription>
                <div className="space-x-1 space-y-1">
                    {technologies.map((technology, key) => {
                        return <TechBadge variant={technology} key={key} />;
                    })}
                </div>
                <CardDescription className="absolute right-0">
                    {dates}
                </CardDescription>
            </CardHeader>
            <CardContent>{description}</CardContent>
        </Card>
    );
};

export default Work;
