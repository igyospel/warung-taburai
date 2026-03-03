import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pictures = [
    '/menu/2024-10-12-8.jpg',
    '/menu/2024-10-12-9.jpg',
    '/menu/2024-10-12-11.jpg',
    '/menu/2024-10-12-12.jpg',
    '/menu/2024-10-12-13.jpg',
    '/menu/2024-10-12-14.jpg',
    '/menu/2024-10-12-15.jpg'
];

export default function FeaturedMenu() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="menu" className="bg-darkBg py-24 px-5 lg:px-20">
            <div className="text-center mb-16">
                <h2 className="font-bebas text-white text-[48px] md:text-[64px] leading-none mb-4">
                    MENU KAMI
                </h2>
                <p className="font-inter text-lightGray text-[18px] max-w-2xl mx-auto">
                    Sekilas tentang keahlian kami sehari-hari. Setiap tuangan, setiap cangkir, menceritakan kisah tentang gairah dan presisi.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
                {pictures.map((pic, index) => (
                    <motion.div
                        key={index}
                        layoutId={`image-wrapper-${index}`}
                        onClick={() => setSelectedImage({ src: pic, index })}
                        className="group relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5 cursor-pointer"
                    >
                        <motion.img
                            layoutId={`image-${index}`}
                            src={pic}
                            alt={`KoffieQue menu image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        {/* Soft overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 pointer-events-none flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-inter font-medium text-sm tracking-wide border border-white/30 px-6 py-2 rounded-full backdrop-blur-md bg-black/40 shadow-lg">
                                Perbesar
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10 cursor-zoom-out"
                    >
                        <button
                            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50 backdrop-blur-md border border-white/10"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <motion.img
                            layoutId={`image-${selectedImage.index}`}
                            src={selectedImage.src}
                            alt="Full screen menu"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl ring-1 ring-white/10"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
