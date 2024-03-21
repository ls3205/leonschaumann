"use client"

import React, { useState } from "react";
import Page from "../Page";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

interface WelcomeProps {}

const Welcome: React.FC<WelcomeProps> = ({}) => {
    const [opacity, setOpacity] = useState(true)

    const handleLeave = () => {
        setOpacity(false)
    }

    return (
        <Page>
            Welcome

            <motion.div onViewportLeave={handleLeave} className={cn(opacity ? 'opacity-80' : 'opacity-0', `absolute bottom-10 left-1/2 flex flex-col`)}>
                <h1 className="w-full text-center">Scroll to Begin</h1>
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
