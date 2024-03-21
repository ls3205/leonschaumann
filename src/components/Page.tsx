"use client"

import { MotionValue, useScroll, useTransform } from "framer-motion";
import React, { ReactNode, useRef } from "react";

interface PageProps {
    children?: ReactNode;
}

const useParallax = (value: MotionValue<number>, distance: number) => {
    return useTransform(value, [0, 1], [-distance, distance]);
};

const Page: React.FC<PageProps> = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="min-h-screen w-full snap-center">
            <div ref={ref} className="h-full w-full">
                {children}
            </div>
        </section>
    );
};

export default Page;
