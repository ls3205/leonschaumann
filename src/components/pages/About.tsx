import React from "react";
import Page from "../Page";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <Page id="about">
            <div className="absolute left-[5%] top-1/2 w-[90%] -translate-y-1/2 md:left-[30%] md:top-[20%] md:h-1/2 md:w-1/2 md:-translate-y-0">
                <h3>
                    hey, i'm leon, a developer from new york city. i'm 18 and a
                    senior in high school, and i'm looking to gain experience by
                    breaking into the freelance scene. i started programming
                    about 5 years ago with python, but over the years I've moved
                    through several different languages and technologies before
                    evetually focusing on web development with next.js/react.
                </h3>
                <h3 className="mt-16">
                    i primarily offer web development services using next.js.
                    additionally, I can provide services in other langauges for
                    things other than web development; however, since these
                    languages are not my primary language, i won't promise
                    anything. for more information on what technologies i'm
                    familiar with, see my tech stack below. additionally, while
                    i can help when it comes to things like hosting websites and
                    databases, i do not offer any hosting services.
                </h3>
            </div>
        </Page>
    );
};

export default About;
