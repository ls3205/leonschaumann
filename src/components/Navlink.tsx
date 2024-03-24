import { Dot } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface NavlinkProps {
    href: string;
    className?: string;
    children?: ReactNode;
    active?: boolean;
    onClick?: () => void;
}

const Navlink: React.FC<NavlinkProps> = ({
    href,
    className,
    children,
    active = false,
    onClick
}) => {
    return (
        <div className={cn("group mb-2 flex flex-row", className)} onClick={onClick}>
            {/* <Dot
                className={cn(
                    active ? "text-foreground" : "text-transparent",
                    "h-full w-[35px] border-b-2 border-transparent transition-all duration-300",
                )}
            /> */}
            <Link
                href={href}
                className={cn(
                    active ? "text-foreground border-foreground" : "text-primary border-transparent group-hover:border-primary",
                    "flex flex-row border-b-2 align-middle font-semibold leading-loose transition-all duration-300",
                )}
            >
                {children}
            </Link>
        </div>
    );
};

export default Navlink;
