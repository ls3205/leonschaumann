import React from "react";
import Page from "../Page";
import Expandable from "../Expandable";
import Work from "../Work";
import { Separator } from "../ui/Separator";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = ({}) => {
    return (
        <Page id="experience">
            <div className="absolute left-[5%] top-1/2 h-[85%] w-[90%] -translate-y-1/2 md:left-[30%] md:top-[15%] md:h-3/4 md:w-1/2 md:-translate-y-0">
                <Expandable>
                    <Work
                        company="freelance"
                        dates="jan. 2024 - current"
                        position="freelance full stack developer"
                        skills="next.js, tailwindcss, prisma, typescript"
                        technologies={["nextjs", "tailwindcss", "prisma", "typescript"]}
                        description="providing freelance web development services."
                    />
                    <Separator />
                    <Work
                        company="e-Serve AG"
                        dates="jun. 2023 - oct. 2023"
                        position="full stack intern"
                        skills="html, css, xsl, xml, javascript"
                        technologies={["html", "css", "xsl", "xml", "javascript"]}
                        description="proposed, planned, and helped lead a full overhaul of the internal design tool; extrapolated features implemented on the internal tool to be used on the client-side product."
                    />
                    <Separator />
                    <Work
                        company="e-Serve AG"
                        dates="jun. 2022 - aug. 2022"
                        position="back end intern"
                        skills="javascript, xsl, html, ajax, xml"
                        technologies={["javascript", "xsl", "html", "ajax", "xml"]}
                        description="eliminated extraneous and out-of-date packages from use in the portal infrastructure system; optimized the client-server ajax request system."
                    />
                </Expandable>
            </div>
        </Page>
    );
};

export default Experience;
