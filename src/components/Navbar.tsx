"use client";

import React, { useEffect, useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const [activeLink, setActiveLink] = useState(0);
    const [vh, setVh] = useState(document.documentElement.clientHeight);

    useEffect(() => {
        const handleResize = () => {
            const calcVh = Math.max(
                document.documentElement.clientHeight || 0,
                window.innerHeight || 0,
            );
            setVh(calcVh);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const element = document.getElementById("main") as HTMLDivElement;

        const handleScroll = () => {
            const position = element?.scrollTop;
            // const scrollSection = Math.floor(position/vh);
            const scrollSection = position / vh;

            setActiveLink(scrollSection);
        };

        element?.addEventListener("scroll", handleScroll);

        return () => element?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed left-[20%] top-[20%] flex h-[60%] w-[140px] flex-col space-y-4">
            <Navlink
                href={""}
                active={activeLink === 0 ? true : false}
                className="mb-8"
            >
                Leon Schaumann
            </Navlink>
            <Navlink href={""} active={activeLink === 1 ? true : false}>
                About
            </Navlink>
            <Navlink href={""} active={activeLink === 2 ? true : false}>
                Stack
            </Navlink>
            <Navlink href={""} active={activeLink === 3 ? true : false}>
                Projects
            </Navlink>
            <Navlink href={""} active={activeLink === 4 ? true : false}>
                Experience
            </Navlink>
            <Navlink href={""} active={activeLink === 5 ? true : false}>
                Contact
            </Navlink>
        </div>
    );
};

export default Navbar;
