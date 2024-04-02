import React from "react";
import Page from "../Page";
import TechBadge from "../TechBadge";
import { LinkIcon, MapPin } from "lucide-react";
import Link from "next/link";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <Page id="about">
            <div className="absolute left-[5%] top-1/2 w-[90%] -translate-y-1/2 md:left-[30%] md:top-[20%] md:h-1/2 md:w-1/2 md:-translate-y-0">
                <h3 className="text-sm md:text-base">
                    hey, my name's leon, nice to meet you. i'm a full stack web
                    developer from{" "}
                    <Link
                        href={"https://www.google.com/search?q=New+York+City"}
                        target="_blank"
                        className="text-primary hover:underline"
                    >
                        new york{" "}
                        <MapPin className="inline w-[1em] align-bottom" />
                    </Link>
                    . a little bit of my history as a developer: i started
                    around 2018 by creating little visual art projects and games
                    in{" "}
                    <Link
                        href={"https://p5js.org/"}
                        about="_blank"
                        className="text-primary hover:underline"
                    >
                        p5.js{" "}
                        <LinkIcon className="inline w-[1em] align-bottom" />
                    </Link>{" "}
                    and{" "}
                    <Link
                        href={"https://processing.org/"}
                        about="_blank"
                        className="text-primary hover:underline"
                    >
                        processing{" "}
                        <LinkIcon className="inline w-[1em] align-bottom" />
                    </Link>{" "}
                    for a class. i quickly transitioned to creating more
                    complicated projects in <TechBadge blur variant="python" />{" "}
                    and <TechBadge blur variant="javascript" /> with{" "}
                    <TechBadge blur variant="nodejs" />. over the following
                    years, i moved through experimenting with various different
                    languages until settling on web development with{" "}
                    <TechBadge blur variant="nextjs" />/
                    <TechBadge blur variant="react" />
                </h3>
                <h3 className="mt-8 text-sm md:text-base">
                    i offer freelance web development services primarily in{" "}
                    <TechBadge blur variant="nextjs" />. i do accept work in
                    other languages and applications than web development;
                    however, it is not my strong suit. for more information for
                    more information on what technologies i'm familiar with, see
                    my{" "}
                    <Link
                        href={"#stack"}
                        className="text-primary hover:underline"
                    >
                        tech stack{" "}
                        <LinkIcon className="inline w-[1em] align-bottom" />
                    </Link>
                    .{" "}
                </h3>
                <h3 className="mt-8 text-sm md:text-base">
                    <span className="inline text-primary">
                        i do not offer hosting.
                    </span>{" "}
                    i can, however, advise and assist in the setup of the
                    hosting service depending on the complexity of what is
                    required. i deploy my <TechBadge blur variant="nextjs" />{" "}
                    projects on{" "}
                    <Link
                        href={"https://vercel.com/home"}
                        target="_blank"
                        className="group text-primary"
                    >
                        <TechBadge
                            blur
                            variant="vercel"
                            className="group-hover:bg-primary"
                        />
                        <LinkIcon className="inline w-[1em] align-bottom" />
                    </Link>{" "}
                    because of the simplicity of their deployment pipeline and
                    it is what i would recommend for most.
                </h3>
            </div>
        </Page>
    );
};

export default About;
