import React, { useState } from "react";

const questions = [
    {
        q: "Why do you only represent the buyer?",
        a: "Neutrality is our greatest asset. By refusing seller commissions, we have zero incentive to ignore red flags. Our only goal is to ensure you don't overpay for a practice that doesn't fit your culture.",
    },
    {
        q: "What defines your $3M Target Firm range?",
        a: "Typically, we focus on practices with annual revenues between $500k and $3M. This range allows for manageable cultural transitions while providing enough EBITDA to support SBA financing and a principal's salary.",
    },
    {
        q: "Do you handle the legal contracts?",
        a: "We are advisory experts, not law firms. We prepare the business terms for the LOI and definitive agreements, which your legal counsel then formalizes. We stay in the room to ensure the business intent isn't lost in the legal boilerplate.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <>
            <section id="faq" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* LEFT */}
                    <div className="lg:col-span-5">
                        <span className="text-[11px] font-bold tracking-[0.35em] text-brand-gold uppercase mb-5 inline-block">
                            Common Inquiries
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-brand-black">Handling the Details.</h2>

                        <p className="text-brand-sage leading-relaxed">
                            We understand that acquisitions involve complex high-stakes decisions. Here are the most
                            common questions our clients ask during their initial discovery phase.
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-7 space-y-6">
                        {questions.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border-b border-brand-navy/10 pb-6 cursor-pointer"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                >
                                    {/* Question */}
                                    <div className="flex items-center justify-between gap-4 group">
                                        <h4 className="text-lg font-bold text-brand-black transition-colors group-hover:text-brand-gold">
                                            {item.q}
                                        </h4>

                                        <span
                                            className={`text-brand-gold text-2xl transition-transform duration-300 ${
                                                isOpen ? "rotate-45" : ""
                                            }`}
                                        >
                                            +
                                        </span>
                                    </div>

                                    {/* Answer */}
                                    {isOpen && <p className="mt-4 text-sm text-brand-sage leading-relaxed">{item.a}</p>}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
