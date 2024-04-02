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
    onClick,
}) => {
    return (
        <div
            className={cn("group mb-2 flex flex-row", className)}
            onClick={onClick}
        >
            <Link
                href={href}
                className={cn(
                    active
                        ? "text-foreground"
                        : "text-primary",
                    "align-middle font-semibold leading-loose transition-all duration-300",
                )}
            >
                {children}
                <div
                    className={cn(
                        active
                            ? "w-full bg-foreground"
                            : "w-0 bg-primary group-hover:w-full",
                        "h-0.5 transition-all duration-300 group-hover:visible",
                    )}
                />
            </Link>
        </div>
    );
};

export default Navlink;
