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
                        title="leon schaumann"
                        href="https://www.leonschaumann.net/"
                        githubHref="https://github.com/ls3205/leonschaumann"
                        description="my portfolio website"
                        technologies={["nextjs", "tailwindcss", "vercel"]}
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
                            "vercel"
                        ]}
                    />
                    <Project
                        title="Musistics"
                        href="https://musistics.vercel.app/"
                        githubHref="https://github.com/ls3205/musistics"
                        description="a spotify statistics app"
                        technologies={["nextjs", "tailwindcss", "spotify", "vercel"]}
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
                            "vercel"
                        ]}
                    />
                </Expandable>
            </div>
        </Page>
    );
};

export default Projects;
