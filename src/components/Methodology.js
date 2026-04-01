const Methadology = () => {
    return (
        <>
            <section id="methodology" className="py-20 px-6 lg:px-16">
                <div className="container mx-auto">
                    {/* Heading */}
                    <div className="max-w-xl mb-20">
                        <span className="text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-4 inline-block">
                            Our Methodology
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold">The 4-Step Journey</h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Step 1 */}
                        <div className="relative">
                            <span className="block text-[120px] font-bold leading-none font-jakarta opacity-0">01</span>

                            <span className="absolute top-0 left-0 text-[120px] font-bold text-brand-gold leading-none font-jakarta pointer-events-none opacity-10">
                                01
                            </span>

                            <div className="-mt-14">
                                <h3 className="text-xl font-bold mb-4">Strategic Filter</h3>

                                <p className="text-sm text-brand-sage leading-relaxed">
                                    We audit your capacity and risk appetite to build a precise buyer profile that
                                    filters 95% of noise immediately.
                                </p>

                                <div className="mt-6 w-full h-px bg-brand-navy/5"></div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <span className="block text-[120px] font-bold leading-none font-jakarta opacity-0">02</span>

                            <span className="absolute top-0 left-0 text-[120px] font-bold text-brand-gold leading-none font-jakarta pointer-events-none opacity-10">
                                02
                            </span>

                            <div className="-mt-14">
                                <h3 className="text-xl font-bold mb-4">Market Recon</h3>

                                <p className="text-sm text-brand-sage leading-relaxed">
                                    We search the entire market—including off-market gems—found only through our
                                    proprietary CPA networks.
                                </p>

                                <div className="mt-6 w-full h-px bg-brand-navy/5"></div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <span className="block text-[120px] font-bold leading-none font-jakarta opacity-0">03</span>

                            <span className="absolute top-0 left-0 text-[120px] font-bold text-brand-gold leading-none font-jakarta pointer-events-none opacity-10">
                                03
                            </span>

                            <div className="-mt-14">
                                <h3 className="text-xl font-bold mb-4">Deep Diligence</h3>

                                <p className="text-sm text-brand-sage leading-relaxed">
                                    Beyond the P&amp;L. We audit processes, culture, and client concentration to uncover
                                    the real story behind the numbers.
                                </p>

                                <div className="mt-6 w-full h-px bg-brand-navy/5"></div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative">
                            <span className="block text-[120px] font-bold leading-none font-jakarta opacity-0">04</span>

                            <span className="absolute top-0 left-0 text-[120px] font-bold text-brand-gold leading-none font-jakarta pointer-events-none opacity-10">
                                04
                            </span>

                            <div className="-mt-14">
                                <h3 className="text-xl font-bold mb-4">Structural Close</h3>

                                <p className="text-sm text-brand-sage leading-relaxed">
                                    From SBA financing support to a 90-day post-close roadmap. We ensure you land
                                    running.
                                </p>

                                <div className="mt-6 w-full h-px bg-brand-navy/5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Methadology;
