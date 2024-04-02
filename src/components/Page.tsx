"use client";

import React, { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
    id: string;
}

const Page: React.FC<PageProps> = ({ children, id }) => {
    return (
        <section id={id} className="h-[100svh] w-full snap-center">
            <div className="relative h-full w-full overflow-x-hidden">{children}</div>
        </section>
    );
};

export default Page;
