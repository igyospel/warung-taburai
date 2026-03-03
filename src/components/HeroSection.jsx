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
                    src="/coffenew1_transparent.png"
                    alt="Iced Coffee Latte"
                    className="h-[60%] md:h-[80%] object-contain mix-blend-normal"
                    style={{
                        rotateX,
                        rotateY,
                        x: translateX,
                        y: translateY,
                        filter: 'drop-shadow(0 30px 30px rgba(0,0,0,0.9))'
                    }}
                />
            </div>

            {/* Gradient overlays to frame the scene */}
            <div className="absolute inset-x-0 top-0 gradient-overlay-top pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 gradient-overlay-bottom pointer-events-none z-10" />

            {/* Top Navbar */}
            <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 lg:px-20 py-4 z-20 pointer-events-auto">
                <div className="flex items-center space-x-2">
                    {/* Coffee cup icon */}
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" className="hidden" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z M6 1v3 M10 1v3 M14 1v3" />
                    </svg>
                    <span className="hidden md:inline-block font-inter font-medium text-white text-[24px]">KoffieQue</span>
                </div>

                <ul className="hidden lg:flex space-x-6 text-lightGray font-inter" style={{ letterSpacing: '-0.32px' }}>
                    {['Home', 'Menu', 'Our Story', 'Locations', 'Contact Us'].map((item) => (
                        <li key={item} className="cursor-pointer hover:text-white transition-colors">
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-4">
                    <a href="#" className="hidden md:inline-block text-[#FBFBFD] font-inter hover:text-white transition-colors">
                        Sign In
                    </a>
                    <button className="flex items-center space-x-2 bg-white rounded-md px-4 h-12 shadow-sm hover:bg-gray-100 transition-colors">
                        <svg className="w-4 h-4 text-cartDark" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M6 6h15l-1.5 9h-13z" />
                            <circle cx="9" cy="20" r="1" />
                            <circle cx="18" cy="20" r="1" />
                        </svg>
                        <span className="font-medium text-cartDark font-inter">Cart</span>
                    </button>
                </div>
            </nav>

            {/* Bottom CTA area */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col lg:flex-row items-start lg:items-end justify-between px-5 lg:px-20 py-8 gap-6 z-20 pointer-events-auto">
                <div className="flex flex-col gap-4 max-w-[420px]">
                    <p className="font-inter text-white text-[20px] leading-[30px]" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Savor the finest artisan beans roasted to perfection, crafted by expert baristas, because your daily cup should feel extraordinary.
                    </p>
                    <button className="flex items-center space-x-2 bg-white rounded-md h-12 px-5 border border-lightGray shadow-sm hover:bg-gray-100 transition-colors w-max">
                        <span className="font-medium text-cartDark font-inter">Order Now</span>
                        <svg className="w-4 h-4 text-cartDark" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l6 7-6 7" />
                        </svg>
                    </button>
                </div>

                <div className="max-w-[466px]">
                    <h2 className="font-bebas text-white text-[64px] lg:text-[64px] md:text-[60px] sm:text-[48px] leading-none" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Find the perfect brew that fits your journey
                    </h2>
                </div>
            </div>
        </section>
    );
}
