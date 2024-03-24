"use client";

import React, { ReactNode } from "react";

interface PageProps {
    children?: ReactNode;
    id: string;
}

const Page: React.FC<PageProps> = ({ children, id }) => {
    return (
        <section id={id} className="min-h-screen w-full snap-center">
            <div className="relative h-screen w-full">{children}</div>
        </section>
    );
};

export default Page;
