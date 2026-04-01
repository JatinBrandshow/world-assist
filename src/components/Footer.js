const Footer = () => {
    return (
        <>
            <footer className="py-16 px-6 lg:px-16 border-t border-[#1e293b]/5 bg-brand-paper">
                <div className="max-w-7xl mx-auto">
                    {/* TOP */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                        {/* Logo */}
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold tracking-tighter text-brand-black">WA</span>
                            <span className="text-[10px] text-brand-sage mt-2">
                                The International Buyer-Side Advisory.
                            </span>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-xs font-bold tracking-widest uppercase text-brand-navy">
                            {/* Column 1 */}
                            <div className="flex flex-col gap-4">
                                <span className="text-brand-gold">Menu</span>

                                <a href="#about" className="hover:text-brand-gold transition-colors">
                                    About
                                </a>

                                <a href="#methodology" className="hover:text-brand-gold transition-colors">
                                    Approach
                                </a>
                            </div>

                            {/* Column 2 */}
                            <div className="flex flex-col gap-4">
                                <span className="text-brand-gold">Solutions</span>

                                <a href="#services" className="hover:text-brand-gold transition-colors">
                                    Services
                                </a>

                                <a href="#packages" className="hover:text-brand-gold transition-colors">
                                    Pricing
                                </a>
                            </div>

                            {/* Column 3 */}
                            <div className="flex flex-col gap-4">
                                <span className="text-brand-gold">Trust</span>

                                <a href="#" className="hover:text-brand-gold transition-colors">
                                    Privacy
                                </a>

                                <a href="#" className="hover:text-brand-gold transition-colors">
                                    Terms
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div className="pt-8 border-t border-[#1e293b]/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[10px] text-brand-sage italic">
                            © 2026 THE WORLD ASSIST LLC. SE USA & Global Headquarters.
                        </p>

                        <p className="text-[10px] text-brand-sage uppercase tracking-widest">Designed by WA Internal</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
