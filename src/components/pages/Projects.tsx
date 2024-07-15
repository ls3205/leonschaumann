import React from "react";
import Page from "../Page";
import Expandable from "../Expandable";
import Project from "../Project";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
    return (
        <Page id="projects">
            <div className="absolute left-[5%] top-1/2 h-[85%] w-[90%] -translate-y-1/2 md:left-[30%] md:top-[15%] md:h-3/4 md:w-1/2 md:-translate-y-0">
                <Expandable>
                    <Project
                        title="ESkate Map (work in progress)"
                        href=""
                        githubHref="https://github.com/ls3205/eskate-map"
                        description="a mapping app where eskaters and pev riders can mark hazards for other riders"
                        technologies={[
                            "nextjs",
                            "tailwindcss",
                            "prisma",
                            "postgresql",
                            "typescript",
                            "vercel",
                        ]}
                    />
                    <Project
                        title="leon schaumann"
                        href="https://www.leonschaumann.net/"
                        githubHref="https://github.com/ls3205/leonschaumann"
                        description="my portfolio website"
                        technologies={[
                            "nextjs",
                            "tailwindcss",
                            "typescript",
                            "vercel",
                        ]}
                    />
                    <Project
                        title="2024 assassin"
                        href="https://trevorseniorassassin.vercel.app/"
                        githubHref="https://github.com/ls3205/2024-assassin"
                        description="a management app for my highschool's game of senior assassin"
                        technologies={[
                            "nextjs",
                            "tailwindcss",
                            "prisma",
                            "postgresql",
                            "typescript",
                            "vercel",
                        ]}
                    />
                    <Project
                        title="Musistics"
                        href="https://musistics.vercel.app/"
                        githubHref="https://github.com/ls3205/musistics"
                        description="a spotify statistics app; note: as of 7-13-24, spotify has not yet approved the app for external use"
                        technologies={[
                            "nextjs",
                            "tailwindcss",
                            "spotify",
                            "typescript",
                            "vercel",
                        ]}
                    />
                    <Project
                        title="MinimalDocs"
                        href="https://minimaldocs.vercel.app/"
                        githubHref="https://github.com/ls3205/MinimalDocs"
                        description="a minimalistic text editor"
                        technologies={[
                            "nextjs",
                            "tailwindcss",
                            "prisma",
                            "mysql",
                            "typescript",
                            "vercel",
                        ]}
                    />
                </Expandable>
            </div>
        </Page>
    );
};

export default Projects;
