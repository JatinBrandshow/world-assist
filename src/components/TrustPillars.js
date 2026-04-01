import React from "react";

const TrustPillars = () => {
    return (
        <>
            <section className="py-20 border-y border-brand-navy/5 bg-white">
                <div className="container mx-auto px-6 lg:px-16 overflow-hidden">
                    <div className="flex flex-wrap items-center justify-center lg:justify-between gap-12 opacity-60">
                        {/* Item 1 */}
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">⚖</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-black">
                                    Buyer-Side Focus
                                </span>
                                <span className="text-[9px] text-brand-sage">No broker commissions, ever</span>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-brand-navy/10 hidden lg:block"></div>

                        {/* Item 2 */}
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">✦</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-black">
                                    CPA Expertise
                                </span>
                                <span className="text-[9px] text-brand-sage">16+ years of deal evaluation</span>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-brand-navy/10 hidden lg:block"></div>

                        {/* Item 3 */}
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">▲</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-black">
                                    Post-Close Alpha
                                </span>
                                <span className="text-[9px] text-brand-sage">90-day transition support</span>
                            </div>
                        </div>

                        <div className="w-px h-8 bg-brand-navy/10 hidden lg:block"></div>

                        {/* Item 4 */}
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">◈</span>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-black">
                                    Transparency
                                </span>
                                <span className="text-[9px] text-brand-sage">Fixed price, zero hidden fees</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrustPillars;
