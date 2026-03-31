const FounderNote = () => {
    return (
        <>
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16">
                    {/* Glass Card */}
                    <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-brand-gold/10 p-12 lg:p-20">
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] -z-10"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                            {/* LEFT IMAGE */}
                            <div className="lg:col-span-4">
                                <div className="relative group">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                                        alt="Principal Advisor"
                                        className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 aspect-3/4 object-cover"
                                    />

                                    {/* Corner Accent */}
                                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold border-8 border-white"></div>
                                </div>
                            </div>

                            {/* RIGHT CONTENT */}
                            <div className="lg:col-span-8 space-y-8">
                                {/* Quote Icon */}
                                <svg className="w-12 h-12 text-brand-gold/20" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M10 8v8h6v-8zm12 0v8h6v-8zM10 18v8h6v-8zm12 0v8h6v-8z" />
                                </svg>

                                {/* Quote */}
                                <h3 className="text-3xl font-bold text-brand-black leading-snug">
                                    "In world-class acquisitions, the best deals aren't found; they are negotiated
                                    through transparency. We are the shield between your ambition and the market's
                                    hidden risks."
                                </h3>

                                {/* Author */}
                                <div>
                                    <p className="text-lg font-bold text-brand-black">Jameson T. Sterling</p>
                                    <p className="text-xs font-bold tracking-[0.2em] text-brand-gold uppercase">
                                        Founding Principal & CFO Advisor
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="pt-8 flex gap-4 flex-wrap">
                                    <div className="px-6 py-3 border border-brand-navy/5 text-[10px] font-bold tracking-widest uppercase text-brand-navy">
                                        Ex-Deloitte Principal
                                    </div>

                                    <div className="px-6 py-3 border border-brand-navy/5 text-[10px] font-bold tracking-widest uppercase text-brand-navy">
                                        CPA · MBA · CFA
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FounderNote;
