"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Toaster } from "./ui/Toaster";

interface ProvidersProps {
    children?: ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Toaster />
        </QueryClientProvider>
    );
};

export default Providers;
