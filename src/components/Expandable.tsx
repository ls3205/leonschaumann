"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "./ui/Button";
import { ScrollArea } from "./ui/ScrollArea";

interface ExpandableProps {
    children?: ReactNode;
}

const Expandable: React.FC<ExpandableProps> = ({ children }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className="h-full w-full">
            {opened ? (
                <div className="h-full w-full p-0">
                    <ScrollArea className="h-full w-full block">
                        <div className="space-y-5 flex flex-col p-4">
                            {children}
                            <Button className="w-min ml-auto mr-auto" onClick={() => setOpened(false)}>
                                Collapse
                            </Button>
                        </div>
                    </ScrollArea>
                </div>
            ) : (
                <div className="relative h-full w-full overflow-hidden p-4">
                    <div className="h-full w-full space-y-5">{children}</div>
                    <div className="absolute bottom-0 left-0 h-1/4 w-full rounded-lg bg-gradient-to-t from-background from-[-10%] to-transparent to-90%">
                        <Button
                            className="absolute bottom-4 left-1/2 -translate-x-1/2"
                            onClick={() => setOpened(true)}
                        >
                            Show More
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Expandable;
