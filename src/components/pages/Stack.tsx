import React from "react";
import Page from "../Page";
import { Separator } from "../ui/Separator";
import TechBadge from "../TechBadge";

interface StackProps {}

const Stack: React.FC<StackProps> = ({}) => {
    return (
        <Page id="stack">
            <div className="absolute left-[5%] top-1/2 flex w-[90%] -translate-y-1/2 flex-col space-y-4 md:left-[30%] md:top-[20%] md:h-1/2 md:w-1/2 md:-translate-y-0 md:flex-row md:space-x-2 md:space-y-0">
                <div className="flex basis-1/3 flex-col items-center space-y-2">
                    <h1 className="relative bg-gradient-to-r from-red-500 from-20% to-red-200 bg-clip-text text-lg font-bold text-transparent underline underline-offset-2 md:mb-4">
                        <div className="absolute h-full w-full bg-red-500 blur-3xl" />
                        frontend
                    </h1>
                    <TechBadge variant="nextjs" size="large" />
                    <TechBadge variant="tailwindcss" size="large" />
                    <TechBadge variant="typescript" size="large" />
                    <TechBadge variant="react" size="large" />
                    <TechBadge variant="html" size="large" />
                    <TechBadge variant="css" size="large" />
                </div>
                <Separator className="h-[1px] w-full md:h-full md:w-[1px]" />
                <div className="flex basis-1/3 flex-col items-center space-y-2 first:mb-4">
                    <h1 className="relative bg-gradient-to-r from-orange-500 from-20% to-orange-200 bg-clip-text text-lg font-bold text-transparent underline underline-offset-2 md:mb-4">
                        <div className="absolute h-full w-full bg-red-500 blur-3xl" />
                        backend
                    </h1>
                    <TechBadge variant="prisma" size="large" />
                    <TechBadge variant="nodejs" size="large" />
                    <TechBadge variant="nextjs" size="large" />
                </div>
                <Separator className="h-[1px] w-full md:h-full md:w-[1px]" />
                <div className="flex basis-1/3 flex-col items-center space-y-2">
                    <h1 className="relative bg-gradient-to-r from-blue-500 from-20% to-blue-200 bg-clip-text text-lg font-bold text-transparent underline underline-offset-2 md:mb-4">
                        <div className="absolute h-full w-full bg-blue-500 blur-3xl" />
                        other
                    </h1>
                    <TechBadge variant="python" size="large" />
                    <TechBadge variant="arduino" size="large" />
                </div>
            </div>
        </Page>
    );
};

export default Stack;
