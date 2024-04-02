"use client";

import { Elsie } from "next/font/google";
import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

interface WelcomeMessageProps {}

const variants = {
    morning: ["bg-red-500", "from-red-500 to-red-200"],
    afternoon: ["bg-orange-500", "from-orange-500 to-orange-200"],
    night: ["bg-blue-500", "from-blue-500 to-blue-200"],
};

const getVariant = (
    message: "good morning" | "good afternoon" | "good evening",
    index: 0 | 1,
) => {
    if (message === "good morning") {
        if (index === 0) {
            return variants.morning[0];
        } else {
            return variants.morning[1];
        }
    } else if (message === "good afternoon") {
        if (index === 0) {
            return variants.afternoon[0];
        } else {
            return variants.afternoon[1];
        }
    } else if (message === "good evening") {
        if (index === 0) {
            return variants.night[0];
        } else {
            return variants.night[1];
        }
    }
};

const getMessage = (hour: number) => {
    if (hour > 2 && hour <= 11) {
        return "good morning";
    } else if (hour > 11 && hour <= 16) {
        return "good afternoon";
    } else {
        return "good evening";
    }
};

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({}) => {
    const [message, setMessage] = useState<
        "good morning" | "good afternoon" | "good evening"
    >(getMessage(new Date().getHours()));
    // const [hour, setHour] = useState<number>();

    // useEffect(() => {
    //     setHour(new Date().getHours());
    // }, []);

    // useEffect(() => {
    //     if (hour) {
    //         if (hour > 2 && hour <= 12) {
    //             setMessage("good morning");
    //         } else if (hour > 12 && hour <= 16) {
    //             setMessage("good afternoon");
    //         } else if (hour > 17 || hour <= 2) {
    //             setMessage("good evening");
    //         }
    //     }
    // }, [hour]);

    return (
        <div className="relative w-fit">
            <div
                className={cn(
                    getVariant(message, 0),
                    "absolute h-full w-full opacity-10 blur-3xl",
                )}
            />
            <h1
                className={cn(
                    getVariant(message, 1),
                    "bg-gradient-to-r from-20% bg-clip-text text-4xl md:text-6xl font-bold leading-normal md:leading-normal text-transparent",
                )}
            >
                {message},
            </h1>
        </div>
    );
};

export default WelcomeMessage;
