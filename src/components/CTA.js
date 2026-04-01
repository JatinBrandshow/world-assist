const CTA = () => {
    return (
        <>
            <section className="py-48 bg-brand-bg relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,155,114,0.05)_0%,transparent_70%)]"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center relative z-10">
                    {/* Heading */}
                    <h2 className="text-5xl lg:text-7xl font-bold text-brand-black mb-12 tracking-tight">
                        Ready to Own Your Future?
                    </h2>

                    {/* Quote */}
                    <p className="text-xl text-brand-sage max-w-2xl mx-auto mb-16 italic font-cormorant">
                        "Don't let a bad acquisition define your next decade. Let's build a legacy together."
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {/* Primary */}
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-12 py-6 text-xs font-semibold tracking-widest uppercase transition-all duration-300 bg-brand-black text-white hover:bg-brand-gold active:scale-95"
                        >
                            Book Discovery Call
                        </a>

                        {/* Outline */}
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-12 py-6 text-xs font-semibold tracking-widest uppercase border border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-all duration-300 active:scale-95"
                        >
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;
