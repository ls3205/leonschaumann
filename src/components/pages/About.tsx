import React from "react";
import Page from "../Page";
import TechBadge from "../TechBadge";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <Page id="about">
            <div className="absolute left-[5%] top-1/2 w-[90%] -translate-y-1/2 md:left-[30%] md:top-[20%] md:h-1/2 md:w-1/2 md:-translate-y-0">
                <h3>
                    hey, i'm leon, a developer from new york city. i'm 18 and a
                    senior in high school, and i'm looking to gain experience by
                    breaking into the freelance scene. i started programming
                    about 5 years ago with <TechBadge variant="python" />, but
                    over the years I've moved through several different
                    languages and technologies before eventually focusing on web
                    development with <TechBadge variant="nextjs" /> /{" "}
                    <TechBadge variant="react" />.
                </h3>
                <h3 className="mt-16">
                    i primarily offer web development services using{" "}
                    <TechBadge variant="nextjs" />. additionally, I can provide
                    services in other langauges for things other than web
                    development; however, since these languages are not my
                    primary language, i won't promise anything. for more
                    information on what technologies i'm familiar with, see my{" "}
                    <Link
                        href={"#stack"}
                        className="text-primary hover:underline"
                    >
                        tech stack{" "}
                        <LinkIcon className="inline w-[1em] align-bottom" />
                    </Link>{" "}
                    below. additionally, while i can help when it comes to
                    things like hosting websites and databases, i do not offer
                    any hosting services.
                </h3>
            </div>
        </Page>
    );
};

export default About;
