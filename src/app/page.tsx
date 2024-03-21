import { useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import About from "~/components/pages/About";
import Contact from "~/components/pages/Contact";
import Experience from "~/components/pages/Experience";
import Projects from "~/components/pages/Projects";
import Stack from "~/components/pages/Stack";
import Welcome from "~/components/pages/Welcome";

export default function HomePage() {
    return (
        <div id="main" className="flex-none h-screen snap-y snap-mandatory overflow-y-scroll ">
            <Welcome />
            <About />
            <Stack />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}
