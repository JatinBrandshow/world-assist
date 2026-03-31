import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import NavBar from "@/components/NavBar";
import MainSection from "@/components/MainSection";
import TrustPillars from "@/components/TrustPillars";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <>
            <CustomCursor />
            <NavBar />
            <MainSection />
            <TrustPillars />
        </>
    );
}
