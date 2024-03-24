import "~/styles/globals.css";

import { Inter, Sometype_Mono } from "next/font/google";
import Navbar from "~/components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const sometype = Sometype_Mono({
    subsets: ["latin"],
})

export const metadata = {
    title: "Create T3 App",
    description: "Generated by create-t3-app",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${sometype.className}`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
