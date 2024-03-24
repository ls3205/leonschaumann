"use client";

import React, { useState } from "react";
import Page from "../Page";
import { ChevronsDown, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import WelcomeMessage from "../WelcomeMessage";
import Link from "next/link";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = ({}) => {
    const [opacity, setOpacity] = useState(true);

    const handleLeave = () => {
        setOpacity(false);
    };

    return (
        <Page id="welcome">
            <div className="absolute left-[5%] top-1/2 w-[90%] -translate-y-1/2 md:left-[30%] md:top-[20%] md:h-1/2 md:w-3/4 md:-translate-y-0">
                <WelcomeMessage />
                <h3>
                    my name is leon schaumann, a developer from{" "}
                    <Link
                        href={"https://www.google.com/search?q=New+York+City"}
                        target="_blank"
                        className="text-primary hover:underline"
                    >
                        new york{" "}
                        <MapPin className="inline w-[1em] align-bottom" />
                    </Link>
                    .
                </h3>
                <h3 className="mt-2">it's great to meet you.</h3>
            </div>

            <motion.div
                onViewportLeave={handleLeave}
                className={cn(
                    opacity ? "opacity-80" : "opacity-0",
                    `absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col`,
                )}
            >
                <h1 className="w-full text-center">scroll to begin</h1>
                <div className="flex flex-row justify-between align-middle">
                    <ChevronsDown />
                    <ChevronsDown />
                    <ChevronsDown />
                </div>
            </motion.div>
        </Page>
    );
};

export default Welcome;
