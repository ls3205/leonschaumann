import { Dot } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { cn } from "~/lib/utils";

interface NavlinkProps {
    href: string;
    className?: string;
    children?: ReactNode;
    active?: boolean;
}

const Navlink: React.FC<NavlinkProps> = ({
    href,
    className,
    children,
    active = false,
}) => {
    return (
        <div className={cn(className, "group mb-2 flex flex-row ")}>
            <Dot
                className={cn(
                    active ? "text-primary" : "text-transparent",
                    "h-full w-[35px] border-b-2 border-transparent",
                )}
            />
            <Link
                href={href}
                className={cn(
                    "flex flex-row border-b-2 border-transparent align-middle font-semibold leading-loose text-primary group-hover:border-primary",
                )}
            >
                {children}
            </Link>
        </div>
    );
};

export default Navlink;
