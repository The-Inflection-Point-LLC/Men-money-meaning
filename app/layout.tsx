import type { Metadata } from "next";
import { Epilogue as FontSans } from "next/font/google";
import "../styles/globals.css";
import "video-react/dist/video-react.css";
import { cn } from "../lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "MitchDickey",
    description:
        "relationships are fundamental to human existence. This is for everybody who has a relationship that could be improved. Tiered services so that you can find the right level of engagement or participation for you. Based on rigorous science across many disciplines. workshops, coaching, mini courses. high quality. Reasonable cost, accessible to everyone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                {children}
                <Toaster />
            </body>
        </html>
    );
}
