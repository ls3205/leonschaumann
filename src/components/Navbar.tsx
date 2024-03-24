"use client";

import React, { useEffect, useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const [activeLink, setActiveLink] = useState(0);

    useEffect(() => {
        const element = document.getElementById("main") as HTMLDivElement;

        const handleScroll = () => {
            const position = element?.scrollTop;
            const scrollSection = Math.round(
                position / document.documentElement.clientHeight,
            );

            console.log(scrollSection);

            setActiveLink(scrollSection);
        };

        element?.addEventListener("scroll", handleScroll);

        return () => element?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed left-[20%] top-[20%] z-50 flex h-[60%] w-[140px] flex-col space-y-4">
            <Navlink href={""} active={activeLink === 0} className="mb-8">
                leon schaumann
            </Navlink>
            <Navlink href={""} active={activeLink === 1}>
                about
            </Navlink>
            <Navlink href={""} active={activeLink === 2}>
                stack
            </Navlink>
            <Navlink href={""} active={activeLink === 3}>
                projects
            </Navlink>
            <Navlink href={""} active={activeLink === 4}>
                experience
            </Navlink>
            <Navlink href={""} active={activeLink === 5}>
                contact
            </Navlink>
        </div>
    );
};

export default Navbar;
