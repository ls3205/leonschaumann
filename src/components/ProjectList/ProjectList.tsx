"use client";

import React, { ReactNode, useState } from "react";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { ScrollArea, ScrollBar } from "../ui/ScrollArea";

interface ProjectListProps {
    children?: ReactNode;
}

const ProjectList: React.FC<ProjectListProps> = ({ children }) => {
    const [opened, setOpened] = useState(false);

    return (
        <Card className="h-full w-full">
            {opened ? (
                // <CardContent className="h-full w-full overflow-y-scroll p-4 pb-4 space-y-5 scrollable">
                //     {children}
                // </CardContent>

                <CardContent className="h-full w-full p-0">
                    <ScrollArea className="h-full w-full block">
                        <div className="space-y-5 flex flex-col p-4">
                            {children}
                        </div>
                    </ScrollArea>
                </CardContent>
            ) : (
                <CardContent className="relative h-full w-full overflow-hidden p-4">
                    <div className="h-full w-full space-y-5">{children}</div>
                    <div className="absolute bottom-0 left-0 h-1/4 w-full rounded-lg bg-gradient-to-t from-neutral-950 from-[-10%] to-transparent to-90%">
                        <Button
                            className="absolute bottom-4 left-1/2 -translate-x-1/2"
                            onClick={() => setOpened(true)}
                        >
                            Show More
                        </Button>
                    </div>
                </CardContent>
            )}
        </Card>
    );
};

export default ProjectList;
