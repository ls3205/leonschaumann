"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import { AlignJustify, Github, Linkedin } from "lucide-react";
import Navlink from "./Navlink";
import Link from "next/link";
import { Separator } from "./ui/Separator";

interface MobileNavbarProps {
    activeLink: number;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ activeLink }) => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="visible absolute left-4 top-4 md:invisible">
                <AlignJustify />
            </SheetTrigger>
            <SheetContent
                className="flex flex-col justify-center"
                side={"left"}
            >
                <Navlink
                    href={"#welcome"}
                    active={activeLink === 0}
                    onClick={() => setOpen(false)}
                >
                    leon schaumann
                </Navlink>
                <Navlink
                    href={"#about"}
                    active={activeLink === 1}
                    onClick={() => setOpen(false)}
                >
                    about
                </Navlink>
                <Navlink
                    href={"#stack"}
                    active={activeLink === 2}
                    onClick={() => setOpen(false)}
                >
                    stack
                </Navlink>
                <Navlink
                    href={"#projects"}
                    active={activeLink === 3}
                    onClick={() => setOpen(false)}
                >
                    projects
                </Navlink>
                <Navlink
                    href={"#experience"}
                    active={activeLink === 4}
                    onClick={() => setOpen(false)}
                >
                    experience
                </Navlink>
                <Navlink
                    href={"#contact"}
                    active={activeLink === 5}
                    onClick={() => setOpen(false)}
                >
                    contact
                </Navlink>
                <Separator />
                <div className="flex flex-row">
                    <Link
                        href={"https://github.com/ls3205"}
                        target="_blank"
                        className="flex basis-1/2 flex-row justify-center text-primary transition-all duration-300 hover:text-foreground"
                        onClick={() => setOpen(false)}
                    >
                        <Github />
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/leon-schaumann/"}
                        target="_blank"
                        className="flex basis-1/2 flex-row justify-center text-primary transition-all duration-300 hover:text-foreground"
                        onClick={() => setOpen(false)}
                    >
                        <Linkedin />
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;
