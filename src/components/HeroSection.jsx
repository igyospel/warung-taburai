import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function HeroSection() {
    // Motion values to track mouse position (from -0.5 to 0.5)
    const xPct = useMotionValue(0);
    const yPct = useMotionValue(0);

    // Smooth springs for buttery animation
    const springX = useSpring(xPct, { stiffness: 100, damping: 30 });
    const springY = useSpring(yPct, { stiffness: 100, damping: 30 });

    // 3D rotation for the coffee glass
    const rotateX = useTransform(springY, [-0.5, 0.5], ["20deg", "-20deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-20deg", "20deg"]);
    // Translation for the coffee glass
    const translateX = useTransform(springX, [-0.5, 0.5], ["-60px", "60px"]);
    const translateY = useTransform(springY, [-0.5, 0.5], ["-60px", "60px"]);

    // Parallax translation for the huge text in the back (opposite direction)
    const textTranslateX = useTransform(springX, [-0.5, 0.5], ["40px", "-40px"]);
    const textTranslateY = useTransform(springY, [-0.5, 0.5], ["40px", "-40px"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Relative coordinates
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // percentage -0.5 to 0.5
        xPct.set(mouseX / width - 0.5);
        yPct.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        xPct.set(0);
        yPct.set(0);
    };

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[600px] max-h-[965px] h-screen bg-[#0a0a09] overflow-hidden"
            style={{ perspective: '1200px' }} // Critical for 3D effect
        >
            {/* Decorative “KOFFIEQUE” - Layered behind */}
            <motion.h1
                className="absolute inset-x-0 top-[10%] md:top-[15%] text-center text-[18vw] md:text-[14vw] lg:text-[18vw] mx-auto font-bebas uppercase font-bold text-transparent bg-clip-text z-0 leading-none whitespace-nowrap"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.02) 100%)',
                    x: textTranslateX,
                    y: textTranslateY
                }}
            >
                KOFFIEQUE
            </motion.h1>

            {/* The transparent isolated coffee cup (in front of text) */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pt-20 pointer-events-none">
                <motion.img
                    src="/three_splash_dark.png"
                    alt="Matcha, Coffee Latte, and Milo Splash"
                    className="h-[60%] md:h-[80%] object-contain mix-blend-screen"
                    style={{
                        rotateX,
                        rotateY,
                        x: translateX,
                        y: translateY,
                        filter: 'drop-shadow(0 30px 30px rgba(0,0,0,0.5))'
                    }}
                />
            </div>

            {/* Gradient overlays to frame the scene */}
            <div className="absolute inset-x-0 top-0 gradient-overlay-top pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 gradient-overlay-bottom pointer-events-none z-10" />

            {/* Top Navbar */}
            <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 lg:px-20 py-4 z-20 pointer-events-auto">
                <div className="flex items-center z-50">
                    <img
                        src="/logo-2.png"
                        alt="KoffieQue Logo"
                        className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300"
                    />
                </div>

                <ul className="hidden lg:flex space-x-6 text-lightGray font-inter" style={{ letterSpacing: '-0.32px' }}>
                    {[
                        { name: 'Beranda', href: '#home' },
                        { name: 'Menu', href: '#menu' },
                        { name: 'Cerita Kami', href: '#story' },
                        { name: 'Lokasi', href: '#location' },
                        { name: 'Hubungi Kami', href: '#contact' }
                    ].map((item) => (
                        <motion.li
                            key={item.name}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer hover:text-white transition-colors"
                        >
                            <a href={item.href} className="block w-full h-full">{item.name}</a>
                        </motion.li>
                    ))}
                </ul>

                {/* Removed Sign In and Cart buttons */}
            </nav>

            {/* Bottom CTA area */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col lg:flex-row items-start lg:items-end justify-between px-5 lg:px-20 py-8 gap-6 z-20 pointer-events-auto">
                <div className="flex flex-col gap-4 max-w-[420px]">
                    <p className="font-inter text-white text-[20px] leading-[30px]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Nikmati biji kopi artisan terbaik yang dipanggang dengan sempurna, diracik oleh barista ahli, karena secangkir kopimu setiap hari harus terasa luar biasa.
                    </p>
                    <button className="flex items-center space-x-2 bg-white rounded-md h-12 px-5 border border-lightGray shadow-sm hover:bg-gray-100 transition-colors w-max">
                        <span className="font-medium text-cartDark font-inter">Pesan Sekarang</span>
                        <svg className="w-4 h-4 text-cartDark" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l6 7-6 7" />
                        </svg>
                    </button>
                </div>

                <div className="max-w-[466px]">
                    <h2 className="font-bebas text-white text-[64px] lg:text-[64px] md:text-[60px] sm:text-[48px] leading-none" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Temukan seduhan sempurna yang pas menemani harimu
                    </h2>
                </div>
            </div>
        </section>
    );
}
