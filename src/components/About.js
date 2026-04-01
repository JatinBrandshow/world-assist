import React from "react";

const About = () => {
    return (
        <>
            <section id="about" className="py-32 bg-brand-paper relative">
                <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-brand-gold uppercase mb-4 inline-block">
                            The WA Difference
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                            We are built to be your <span className="italic text-brand-gold font-cormorant">unfair advantage</span>.
                        </h2>

                        <div className="space-y-6 text-brand-sage leading-relaxed">
                            <p>
                                Acquiring an accounting practice is one of the most consequential decisions of your
                                career. Most advisors in this space represent the seller, incentivized to close quickly
                                at the highest price.
                            </p>

                            <p className="font-bold text-brand-black">We flipped the model.</p>

                            <p>
                                WA exists exclusively for the buyer. We dig into the data that sellers try to
                                hide—client retention risks, staff contract loopholes, and overinflated multipliers. Our
                                mission is to ensure that the firm you buy today is the firm you’re proud to own ten
                                years from now.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                            alt="Consultation"
                            className="rounded-2xl shadow-xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Floating Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white/70 backdrop-blur-xl p-8 border border-white/50 max-w-70 shadow-lg">
                            <p className="text-[32px] font-bold text-brand-gold leading-none mb-2">1,200+</p>

                            <p className="text-xs font-bold tracking-widest uppercase text-brand-black">
                                Practices Evaluated Globally
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
