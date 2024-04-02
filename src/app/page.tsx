import About from "~/components/pages/About";
import Contact from "~/components/pages/Contact";
import Experience from "~/components/pages/Experience";
import Projects from "~/components/pages/Projects";
import Stack from "~/components/pages/Stack";
import Welcome from "~/components/pages/Welcome";

export default function HomePage() {
    return (
        <div id="main" className="flex-none min-h-[100svh] h-[100svh] snap-y snap-mandatory overflow-y-scroll scroll-smooth">
            <Welcome />
            <About />
            <Stack />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}
