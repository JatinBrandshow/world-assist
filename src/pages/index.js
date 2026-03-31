import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import MainSection from "@/components/MainSection";
import TrustPillars from "@/components/TrustPillars";
import About from "@/components/About";
import FounderNote from "@/components/FounderNote";
import Methadology from "@/components/Methodology";
import GlobalReach from "@/components/GlobalReach";
import Services from "@/components/Services";
import InvestmentPackages from "@/components/InvestmentPackages";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

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
            <MainSection />
            <TrustPillars />
            <About />
            <FounderNote />
            <Methadology />
            <GlobalReach />
            <Services />
            <InvestmentPackages />
            <FAQ />
            <CTA />
        </>
    );
}
