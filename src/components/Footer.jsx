import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-5 lg:px-20 text-lightGray font-inter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                {/* Brand & Newsletter */}
                <div className="lg:col-span-2">
                    <div className="flex items-center space-x-2 mb-6">
                        <svg
                            className="w-8 h-8 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="hidden" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z M6 1v3 M10 1v3 M14 1v3" />
                        </svg>
                        <span className="font-bebas text-white text-[32px] tracking-wide leading-none">
                            KOFFIEQUE
                        </span>
                    </div>
                    <p className="max-w-md text-lightGray/70 leading-relaxed mb-6">
                        Discover a curated selection of premium artisan roasts. We're dedicated to delivering an unparalleled coffee experience every day.
                    </p>
                    <form className="flex w-full max-w-sm">
                        <input
                            type="email"
                            placeholder="Subscribe for updates"
                            className="w-full bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-white outline-none focus:border-white/30 transition-colors placeholder:text-lightGray/40"
                        />
                        <button className="bg-white text-darkBg px-6 rounded-r-lg font-medium hover:bg-lightGray transition-colors">
                            Join
                        </button>
                    </form>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6 flex items-center space-x-2">
                        <span>Explore</span>
                    </h4>
                    <ul className="space-y-4 text-lightGray/70">
                        {['Menu', 'Our Story', 'Wholesale', 'Careers', 'Locations'].map((item) => (
                            <li key={item}>
                                <a href="#" className="hover:text-white transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact</h4>
                    <ul className="space-y-4 text-lightGray/70">
                        <li>123 Artisan Avenue, Coffee District, NY 10001</li>
                        <li>
                            <a href="tel:+18005550199" className="hover:text-white transition-colors">
                                +1 (800) 555-0199
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hello@koffieque.com" className="hover:text-white transition-colors">
                                hello@koffieque.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Legal */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-sm text-lightGray/50 gap-4">
                <span>© 2026 KoffieQue Roasters. All rights reserved.</span>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Health Guidelines</a>
                </div>
            </div>
        </footer>
    );
}
