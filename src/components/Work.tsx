import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/Card";

interface WorkProps {
    company: string;
    position: string;
    description: string;
    skills: string;
    dates: string;
}

const Work: React.FC<WorkProps> = ({
    company,
    dates,
    description,
    skills,
    position,
}) => {
    return (
        <Card className="w-full border-none bg-background">
            <CardHeader className="relative">
                <CardTitle className="text-lg md:text-2xl">{company}</CardTitle>
                <CardDescription>{position}</CardDescription>
                <CardDescription>{skills}</CardDescription>
                <CardDescription className="absolute right-0">
                    {dates}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {description}
            </CardContent>
        </Card>
    );
};

export default Work;
