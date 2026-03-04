import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pictures = [
    '/menu/SaveClip.App_566190364_18083798294057320_7033915474214939346_n.jpg',
    '/menu/SaveClip.App_572732899_18091736314850705_119498029439047957_n.jpg',
    '/menu/SaveClip.App_573211520_18081903677046188_6840224848781492840_n.jpg',
    '/menu/SaveClip.App_580210434_18537214801034332_1916179799570411448_n.jpg',
    '/menu/SaveClip.App_580553491_18046463618681367_3510774611409290936_n.jpg',
    '/menu/SaveClip.App_588127788_17863944201457959_3863618912384363784_n.jpg',
    '/menu/SaveClip.App_625018424_17910168297302600_7742273806030688714_n.jpg'
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
                    Mulai dari Ayam Goreng Kecombrang, Paru Goreng, Dendeng, hingga kesegaran Es Timun Nanas. Sajian khas rumahan yang dijamin bikin kangen.
                </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
                {pictures.map((pic, index) => (
                    <motion.div
                        key={index}
                        layoutId={`image-wrapper-${index}`}
                        onClick={() => setSelectedImage({ src: pic, index })}
                        className="group relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl bg-darkerBg border border-white/5 cursor-pointer"
                    >
                        <motion.img
                            layoutId={`image-${index}`}
                            src={pic}
                            alt={`Warung Taburai menu image ${index + 1}`}
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
