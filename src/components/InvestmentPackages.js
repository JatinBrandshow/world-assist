const InvestmentPackages = () => {
    return(
        <>
        <section id="packages" className="py-32 bg-brand-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-24">
          <span className="text-[11px] font-bold tracking-[0.35em] text-brand-gold uppercase mb-5 inline-block">
            Investment Packages
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-brand-black">
            Strategic Partnership.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="flex flex-col justify-between bg-white border border-brand-navy/5 p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-black">
                Explorer
              </h3>

              <p className="text-brand-sage text-sm">
                Target search and initial market filtration for the solo-practitioner.
              </p>

              <div className="h-px bg-brand-navy/5"></div>

              <ul className="space-y-4 text-xs font-bold tracking-wide text-brand-navy/60">
                <li className="italic">Search Audit</li>
                <li className="italic">Valuation Review</li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-navy/5">
              <p className="text-3xl font-bold text-brand-black">
                $6,500{" "}
                <span className="text-xs font-normal text-brand-sage">
                  / fixed
                </span>
              </p>
            </div>

          </div>

          {/* CARD 2 (Highlighted) */}
          <div className="relative flex flex-col justify-between bg-white border border-brand-gold/40 ring-1 ring-brand-gold/40 p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

            {/* Badge */}
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-gold text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
              Most Popular
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-black">
                Acquisition Ready
              </h3>

              <p className="text-brand-sage text-sm">
                End-to-end guidance from search to signed Letter of Intent (LOI).
              </p>

              <div className="h-px bg-brand-navy/5"></div>

              <ul className="space-y-4 text-xs font-bold tracking-wide text-brand-navy/60">
                <li className="italic">Full Target Sourcing</li>
                <li className="italic">Negotiation Support</li>
                <li className="italic">LOI Preparation</li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-navy/5">
              <p className="text-3xl font-bold text-brand-black">
                $18,500{" "}
                <span className="text-xs font-normal text-brand-sage">
                  / fixed
                </span>
              </p>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="flex flex-col justify-between bg-white border border-brand-navy/5 p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-black">
                Full Journey
              </h3>

              <p className="text-brand-sage text-sm">
                Comprehensive advisory from initial search to 90 days post-close.
              </p>

              <div className="h-px bg-brand-navy/5"></div>

              <ul className="space-y-4 text-xs font-bold tracking-wide text-brand-navy/60">
                <li className="italic">Closing Support</li>
                <li className="italic">Staff Integration</li>
                <li className="italic">90-Day Advisor</li>
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-navy/5">
              <p className="text-3xl font-bold text-brand-black">
                $45,000{" "}
                <span className="text-xs font-normal text-brand-sage">
                  / fixed
                </span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
        </>
    )
}

export default InvestmentPackages;