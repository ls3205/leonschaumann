"use client";

import React, { useEffect, useState } from "react";
import Navlink from "./Navlink";
import { motion } from "framer-motion";
import { ChevronsDown, Github, Linkedin } from "lucide-react";
import { Separator } from "./ui/Separator";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { Button } from "./ui/Button";

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

            setActiveLink(scrollSection);
        };

        element?.addEventListener("scroll", handleScroll);

        return () => element?.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="invisible fixed top-[20%] z-50 flex flex-row md:visible md:left-[10%] xl:left-[15%]">
                <div className="flex w-[140px] flex-col space-y-4">
                    <Navlink href={"#welcome"} active={activeLink === 0}>
                        leon schaumann
                    </Navlink>
                    <Navlink href={"#about"} active={activeLink === 1}>
                        about
                    </Navlink>
                    <Navlink href={"#stack"} active={activeLink === 2}>
                        stack
                    </Navlink>
                    <Navlink href={"#projects"} active={activeLink === 3}>
                        projects
                    </Navlink>
                    <Navlink href={"#experience"} active={activeLink === 4}>
                        experience
                    </Navlink>
                    <Navlink href={"#contact"} active={activeLink === 5}>
                        contact
                    </Navlink>
                    <Separator />
                    <div className="flex flex-row">
                        <Link
                            href={"https://github.com/ls3205"}
                            target="_blank"
                            className="flex basis-1/2 flex-row justify-center text-primary transition-all duration-300 hover:text-foreground"
                        >
                            <Github />
                        </Link>
                        <Link
                            href={"https://www.linkedin.com/in/leon-schaumann/"}
                            target="_blank"
                            className="flex basis-1/2 flex-row justify-center text-primary transition-all duration-300 hover:text-foreground"
                        >
                            <Linkedin />
                        </Link>
                    </div>
                </div>
                <Separator
                    orientation="vertical"
                    className="ml-4 h-auto bg-primary opacity-50"
                />
            </div>

            <MobileNavbar activeLink={activeLink} />
        </>
    );
};

export default Navbar;
