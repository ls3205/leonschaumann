import React from "react";
import Page from "../Page";
import Expandable from "../Expandable";
import Project from "../Project";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
    return (
        <Page id="projects">
            <div className="absolute left-[5%] h-[85%] top-1/2 w-[90%] -translate-y-1/2 md:left-[30%] md:top-[15%] md:h-3/4 md:w-1/2 md:-translate-y-0">
                <Expandable>
                    <Project title="leon schaumann" href="https://www.leonschaumann.net/" description="my portfolio website" />
                    <Project title="2024 assassin" href="https://trevorseniorassassin.vercel.app/" description="a management app for my highschool's game of senior assassin" />
                    <Project title="Musistics" href="https://musistics.vercel.app/" description="a spotify statistics app" />
                    <Project title="MinimalDocs" href="https://minimaldocs.vercel.app/" description="a minimalistic text editor" />
                </Expandable>
            </div>
        </Page>
    )
};

export default Projects;
