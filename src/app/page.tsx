import { useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import About from "~/components/pages/About";
import Welcome from "~/components/pages/Welcome";

export default function HomePage() {
    return (
        <main className="flex-none h-screen snap-y snap-mandatory overflow-y-scroll">
            <Welcome />
            <About />
        </main>
    );
}
