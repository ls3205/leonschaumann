"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

interface CursorHighlightProps {}

const CursorHighlight: React.FC<CursorHighlightProps> = ({}) => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <motion.div
            className="invisible fixed left-4 top-4 h-0 w-0 rounded-full bg-primary shadow-[0px_0px_40px_20px] shadow-primary md:visible"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}
        />
    );
};

export default CursorHighlight;
