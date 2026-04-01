const GlobalReach = () => {
    return (
        <>
            <section className="py-32 bg-brand-paper relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[20vw] bg-brand-gold/5 blur-[120px] -z-10 rotate-12"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* LEFT CONTENT */}
                        <div>
                            {/* Label */}
                            <span className="text-[11px] font-bold tracking-[0.35em] text-brand-gold uppercase mb-5 inline-block">
                                Global Access
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl lg:text-5xl font-bold italic text-brand-navy mb-8 font-cormorant">
                                Serving the SE USA & World's Developing Hubs.
                            </h2>

                            {/* Description */}
                            <p className="text-brand-sage leading-relaxed mb-12">
                                While our headquarters are in the Southeast United States, our buyer-side mandate has no
                                borders. We facilitate cross-border practice acquisitions for global professionals
                                looking to enter the US market or expand into emerging hubs.
                            </p>

                            {/* Lists */}
                            <div className="grid grid-cols-2 gap-8">
                                {/* Column 1 */}
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                                        Primary Markets
                                    </div>

                                    <ul className="space-y-2 text-sm text-brand-navy">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-brand-gold"></span>
                                            Georgia · Florida
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-brand-gold"></span>
                                            Carolinas · Tennessee
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-brand-gold"></span>
                                            Texas · Mid-Atlantic
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2 */}
                                <div className="space-y-4">
                                    <div className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                                        Developing Reach
                                    </div>

                                    <ul className="space-y-2 text-sm text-brand-navy">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-brand-gold"></span>
                                            United Kingdom
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-brand-gold"></span>
                                            Southeast Asia
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-brand-gold"></span>
                                            Australia · Canada
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200"
                                alt="Global Connectivity"
                                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-gold/5 rounded-2xl mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GlobalReach;
