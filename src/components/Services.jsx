import React from 'react';

export default function Services() {
    return (
        <section id="story" className="bg-darkBg py-24 px-5 lg:px-20 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative lg:order-2">
                    <div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden relative group">
                        <img
                            src="/storyus.jpg"
                            alt="Filosofi Warung Taburai"
                            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent opacity-80 pointer-events-none" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                    </div>
                    {/* Decorative accent */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full -z-10 blur-3xl" />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left lg:order-1">
                    <span className="font-inter text-white/50 tracking-[0.2em] font-medium text-sm mb-4 uppercase">
                        Filosofi Kami
                    </span>
                    <h2 className="font-bebas text-white text-[48px] md:text-[64px] leading-[1.1] mb-8">
                        Cerita Perjalanan<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                            Warung Taburai
                        </span>
                    </h2>

                    <div className="font-inter text-lightGray/80 text-[16px] md:text-[18px] leading-relaxed space-y-6">
                        <p>
                            Berawal dari resep masakan warisan almarhumah ibu tercinta, komika dan kreator Praz Teguh mendirikan Warung Taburai. Tempat ini hadir bukan sekadar rumah makan biasa, melainkan menjadi ruang nostalgia untuk merayakan lezatnya masakan rumahan khas Indonesia.
                        </p>
                        <p>
                            Kami percaya masakan enak lahir dari bumbu yang berani dan proses yang jujur. Kami menyajikan berbagai menu andalan Nusantara, seperti Nasi Ayam Goreng Kecombrang, Nasi Ikan Bakar, Dendeng, hingga Telur Balado dan Paru Goreng—dibuat agar cocok di lidah siapa pun yang memakannya.
                        </p>
                        <p>
                            Kini, Warung Taburai telah berkembang menjadi salah satu rumah makan primadona yang tersebar di banyak kota. Menjadi tempat nongkrong asyik, spot kuliner favorit, serta ruang nyaman bagi siapa saja untuk menikmati santapan nikmat, lengkap dengan segelas Timun Nanas segar, dengan harga yang selalu ramah di kantong.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                        <button className="bg-white text-darkBg px-8 rounded-md font-medium font-inter h-12 flex items-center gap-3 hover:bg-gray-200 transition-transform hover:scale-105 duration-300 w-full sm:w-auto justify-center">
                            <span>Baca Kisah Selengkapnya</span>
                        </button>
                    </div>
                </div>

            </div>

            {/* Background Texture Element */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        </section>
    );
}
