import React from 'react';

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
                    <div
                        key={index}
                        className="group relative aspect-square md:aspect-[4/5] overflow-hidden rounded-xl bg-[#0a0a0a] border border-white/5"
                    >
                        <img
                            src={pic}
                            alt={`Coffee gallery image ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        {/* Soft overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
                    </div>
                ))}
            </div>
        </section>
    );
}
