"use client";
import { useEffect, useState } from "react";
import HalftoneWaves from "@/app/components/halftone-waves";
import RainingLetters from "@/app/components/rainingletters";

export default function Home() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="relative w-full min-h-screen flex flex-col items-center justify-start">
            {/* HalftoneWaves Component - Fades out on scroll */}
            <div
                className="fixed top-0 left-0 w-full h-screen transition-all duration-700"
                style={{
                    opacity: 1 - scrollY / 400,
                    transform: `translateY(${scrollY * 0.3}px)`,
                }}
            >
                <HalftoneWaves />
            </div>

            {/* Indigma Content - Centered */}
            <div className="relative z-10 w-full h-screen flex items-center justify-center">
                <div
                    className="w-96 h-96 bg-black rounded-full flex items-center justify-center"
                    style={{
                        background: "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
                        opacity: 1 - scrollY / 600, // Fade out Indigma as well
                        transform: `translateY(${scrollY * 0.2}px)`, // Adds slight parallax effect
                    }}
                >
                    <div className="text-white text-center drop-shadow-lg">
                        <h1 className="text-6xl font-bold">Indigma</h1>
                        <p className="text-lg mt-2">Innovating the Future</p>
                        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300 transition">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            {/* RainingLetters - Fades in smoothly */}
            <div
                className="relative w-full h-screen transition-all duration-700"
                style={{
                    opacity: Math.min(1, scrollY / 500),
                    transform: `translateY(${Math.max(0, 400 - scrollY)}px)`, // Moves up
                }}
            >
                <RainingLetters />
            </div>
        </main>
    );
}
