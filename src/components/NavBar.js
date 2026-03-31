"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-5 flex items-center justify-between pointer-events-none transition-all duration-300">
                {/* Background */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-brand-navy/[0.03] shadow-[0_4px_30px_rgba(0,0,0,0.03),0_10px_50px_rgba(184,155,114,0.05)] -z-10"></div>

                {/* Left */}
                <div className="flex items-center gap-12 pointer-events-auto">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tighter text-brand-black">
                            THE WORLD ASSIST LLC
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="#about"
                            className="relative text-sm font-medium text-brand-sage hover:text-brand-black transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-brand-gold after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                            About
                        </Link>

                        <Link
                            href="#methodology"
                            className="relative text-sm font-medium text-brand-sage hover:text-brand-black transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-brand-gold after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                            Methodology
                        </Link>

                        <Link
                            href="#services"
                            className="relative text-sm font-medium text-brand-sage hover:text-brand-black transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-brand-gold after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                            Services
                        </Link>

                        <Link
                            href="#packages"
                            className="relative text-sm font-medium text-brand-sage hover:text-brand-black transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-brand-gold after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                        >
                            Packages
                        </Link>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    <Link
                        href="#"
                        className="hidden sm:flex inline-flex items-center justify-center px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 bg-brand-black text-white hover:bg-brand-gold active:scale-95 rounded-full"
                    >
                        Free Discovery Call
                    </Link>

                    {/* Mobile Button */}
                    <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-brand-navy">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-[60] bg-white transition-transform duration-700 ease-in-out lg:hidden flex flex-col justify-center p-12 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close */}
                <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-brand-navy p-2">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Links */}
                <div className="space-y-8">
                    <Link
                        href="#about"
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-bold text-brand-black hover:text-brand-gold transition-colors duration-300"
                    >
                        Narrative
                    </Link>

                    <Link
                        href="#methodology"
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-bold text-brand-black hover:text-brand-gold transition-colors duration-300"
                    >
                        Methodology
                    </Link>

                    <Link
                        href="#services"
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-bold text-brand-black hover:text-brand-gold transition-colors duration-300"
                    >
                        Services
                    </Link>

                    <Link
                        href="#packages"
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-bold text-brand-black hover:text-brand-gold transition-colors duration-300"
                    >
                        Investment
                    </Link>

                    <Link
                        href="#faq"
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-bold text-brand-black hover:text-brand-gold transition-colors duration-300"
                    >
                        FAQ
                    </Link>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 pt-12 border-t border-brand-navy/5">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-4">Start Here</p>

                    <a
                        href="https://calendly.com"
                        target="_blank"
                        className="inline-flex items-center justify-center w-full py-5 text-sm font-semibold tracking-widest uppercase transition-all duration-300 bg-brand-black text-white hover:bg-brand-gold active:scale-95"
                    >
                        Discovery Call
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavBar;
