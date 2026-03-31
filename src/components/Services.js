const Services = () => {
    return (
        <>
            <section id="services" className="py-32 bg-brand-black text-white relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(184,155,114,0.08)_0%,transparent_70%)]"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
                        <div className="max-w-xl">
                            <span className="text-[11px] font-bold tracking-[0.35em] text-brand-gold uppercase mb-5 inline-block">
                                Service Pillars
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold">Comprehensive Advisory.</h2>
                        </div>

                        <p className="text-white/60 max-w-sm mb-2">
                            We provide end-to-end support throughout the lifecycle of your acquisition journey.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* CARD 1 */}
                        <div className="p-10 border border-white/5 bg-white/5 transition-all duration-700 relative overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-gold/10 hover:bg-white/10">
                            <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 transition-all duration-500 group-hover:scale-110">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <h4 className="text-xl font-bold mb-4">Target Search</h4>

                            <p className="text-sm text-white/70 leading-relaxed">
                                Multi-channel search strategy including direct outreach to off-market practices in the
                                SE USA and globally.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="p-10 border border-white/5 bg-white/5 transition-all duration-700 relative overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-gold/10 hover:bg-white/10">
                            <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 transition-all duration-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>

                            <h4 className="text-xl font-bold mb-4">Valuation Logic</h4>

                            <p className="text-sm text-white/70 leading-relaxed">
                                We normalize EBITDA and assessment multipliers to ensure you're paying for real value,
                                not seller projections.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="p-10 border border-white/5 bg-white/5 transition-all duration-700 relative overflow-hidden hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-gold/10 hover:bg-white/10">
                            <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 transition-all duration-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
                                </svg>
                            </div>

                            <h4 className="text-xl font-bold mb-4">SBA Financing</h4>

                            <p className="text-sm text-white/70 leading-relaxed">
                                Assistance in building a lender-ready acquisition deck and navigating complex SBA 7(a)
                                loan requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
