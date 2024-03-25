import React from "react";
import Page from "../Page";
import { Separator } from "../ui/Separator";

interface StackProps {}

const Stack: React.FC<StackProps> = ({}) => {
    return (
        <Page id="stack">
            <div className="absolute left-[5%] top-1/2 flex w-[90%] -translate-y-1/2 flex-col space-y-4 md:left-[30%] md:top-[20%] md:h-1/2 md:w-1/2 md:-translate-y-0 md:flex-row md:space-x-2 md:space-y-0">
                <div className="flex basis-1/3 flex-col items-center space-y-2">
                    <h1 className="text-primary underline underline-offset-2 md:mb-4">
                        frontend
                    </h1>
                    <h3>next.js</h3>
                    <h3>tailwindcss</h3>
                    <h3>typescript</h3>
                    <h3>react</h3>
                    <h3>html</h3>
                    <h3>css</h3>
                </div>
                <Separator className="h-[1px] w-full md:h-full md:w-[1px]" />
                <div className="flex basis-1/3 flex-col items-center space-y-2 first:mb-4">
                    <h1 className="text-primary underline underline-offset-2 md:mb-4">
                        backend
                    </h1>
                    <h3>prisma</h3>
                    <h3>node.js</h3>
                    <h3>next.js</h3>
                </div>
                <Separator className="h-[1px] w-full md:h-full md:w-[1px]" />
                <div className="flex basis-1/3 flex-col items-center space-y-2">
                    <h1 className="text-primary underline underline-offset-2 md:mb-4">
                        other
                    </h1>
                    <h3>python</h3>
                    <h3>arduino</h3>
                </div>
            </div>
        </Page>
    );
};

export default Stack;
