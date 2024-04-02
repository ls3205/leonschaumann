"use client";

import React, { useEffect, useState } from "react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/Command";
import {
    AtSignIcon,
    BriefcaseBusinessIcon,
    FolderGit2Icon,
    HomeIcon,
    Layers3Icon,
    UserIcon,
} from "lucide-react";

interface CommandPaletteProps {}

const CommandPalette: React.FC<CommandPaletteProps> = ({}) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    });

    const scrollTo = (id: number) => {
        const element = document.getElementById("main") as HTMLDivElement;
        const position = id * document.documentElement.clientHeight;

        element.scroll({ top: position, behavior: "smooth" });
    };

    const handleHome = () => {
        setOpen(false);
        scrollTo(0);
    };

    const handleAbout = () => {
        setOpen(false);
        scrollTo(1);
    };

    const handleStack = () => {
        setOpen(false);
        scrollTo(2);
    };

    const handleProjects = () => {
        setOpen(false);
        scrollTo(3);
    };

    const handleExperience = () => {
        setOpen(false);
        scrollTo(4);
    };

    const handleContact = () => {
        setOpen(false);
        scrollTo(5);
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="type a command or search..." />
            <CommandList className="z-50">
                <CommandEmpty>no results found.</CommandEmpty>
                <CommandGroup heading="Navigation">
                    <CommandItem onSelect={handleHome}>
                        <HomeIcon className="mr-2 h-4 w-4" />
                        <span>home</span>
                    </CommandItem>
                    <CommandItem onSelect={handleAbout}>
                        <UserIcon className="mr-2 h-4 w-4" />
                        <span>about</span>
                    </CommandItem>
                    <CommandItem onSelect={handleStack}>
                        <Layers3Icon className="mr-2 h-4 w-4" />
                        <span>stack</span>
                    </CommandItem>
                    <CommandItem onSelect={handleProjects}>
                        <FolderGit2Icon className="mr-2 h-4 w-4" />
                        <span>projects</span>
                    </CommandItem>
                    <CommandItem onSelect={handleExperience}>
                        <BriefcaseBusinessIcon className="mr-2 h-4 w-4" />
                        <span>experience</span>
                    </CommandItem>
                    <CommandItem onSelect={handleContact}>
                        <AtSignIcon className="mr-2 h-4 w-4" />
                        <span>contact</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
};

export default CommandPalette;
