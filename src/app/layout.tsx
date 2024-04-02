import "~/styles/globals.css";

import { Sometype_Mono } from "next/font/google";
import Navbar from "~/components/Navbar";
import Providers from "~/components/Providers";

const sometype = Sometype_Mono({
    subsets: ["latin"],
});

export const metadata = {
    title: "Leon Schaumann",
    description: "Leon Schaumann's Developer Portfolio",
    icons: [{ rel: "icon", url: "/icon.png", type: "" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${sometype.className}`}>
                <Providers>
                    {children}
                    <Navbar />
                </Providers>
            </body>
        </html>
    );
}
