"use client";

import React, { useState, useEffect } from "react";

const MainSection = () => {
    const [current, setCurrent] = useState(0);

    const slides = [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    ];

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    return (
        <>
            <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-16 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-brand-gold/5 blur-[120px] -z-10 animate-float"></div>

                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#b89b72] bg-brand-gold/5">
                            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-gold uppercase">
                                Premier Buyer-Side Advisory
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-6xl lg:text-[5.5rem] leading-[1.05] font-jakarta font-bold text-brand-black">
                            You Found the <br />
                            <span className="text-brand-gold italic font-cormorant font-medium">Right Firm.</span>{" "}
                            <br />
                            <span className="inline-block relative">
                                Now Own It.
                                <svg
                                    className="absolute -bottom-2 right-0 w-32 h-4 text-brand-gold/20"
                                    viewBox="0 0 100 20"
                                >
                                    <path
                                        d="M0,15 Q25,5 50,15 T100,15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                </svg>
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-brand-sage max-w-xl leading-relaxed">
                            WA provides expert guidance for accounting practice acquisitions. From first evaluation to
                            successful close — we ensure your legacy starts on solid ground.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center gap-6">
                            <a
                                href="#packages"
                                className="inline-flex items-center justify-center px-10 py-5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 bg-brand-black text-white hover:bg-brand-gold active:scale-95"
                            >
                                Start Your Journey
                            </a>

                            <a
                                href="#services"
                                className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-brand-navy hover:text-brand-gold transition-colors"
                            >
                                View Methodology
                                <svg
                                    className="w-5 h-5 transition-transform group-hover:translate-x-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-brand-navy/5">
                            <div>
                                <p className="text-3xl font-jakarta font-bold text-brand-black">16+</p>
                                <p className="text-[10px] font-bold tracking-widest text-brand-sage uppercase">
                                    Years Experience
                                </p>
                            </div>

                            <div className="sm:border-x border-brand-navy/5 sm:px-8">
                                <p className="text-3xl font-jakarta font-bold text-brand-black">100%</p>
                                <p className="text-[10px] font-bold tracking-widest text-brand-sage uppercase">
                                    Buyer-Side Focused
                                </p>
                            </div>

                            <div>
                                <p className="text-3xl font-jakarta font-bold text-brand-black">$3M</p>
                                <p className="text-[10px] font-bold tracking-widest text-brand-sage uppercase">
                                    Target Range
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative w-full aspect-4/5 bg-brand-paper rounded-2xl overflow-hidden shadow-2xl group">
                            {/* Slides */}
                            {slides.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt="slide"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                        current === index ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                />
                            ))}

                            {/* Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition z-50"
                            >
                                ‹
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md border border-white flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-white transition z-50"
                            >
                                ›
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
                                {slides.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1 rounded-full transition-all duration-300 ${
                                            current === i ? "w-8 bg-brand-gold" : "w-2 bg-white/30"
                                        }`}
                                    />
                                ))}
                            </div>

                            {/* Glass Card */}
                            <div className="absolute bottom-12 left-8 right-8 bg-white/70 backdrop-blur-xl p-6 border border-white/50 shadow-xl z-30">
                                <p className="text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-2">
                                    Our commitment
                                </p>
                                <p className="text-xl italic text-brand-navy leading-relaxed">
                                    "Buyer-Side Only — Always. Our loyalty is to you. Full stop."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainSection;
