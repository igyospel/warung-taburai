import React from 'react';

export default function Location() {
    return (
        <section id="location" className="bg-[#050505] py-24 px-5 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Text & Info Side */}
                <div className="w-full lg:w-1/3 flex flex-col text-center lg:text-left">
                    <h2 className="font-bebas text-white text-[48px] md:text-[64px] leading-none mb-6">
                        KUNJUNGI KAMI
                    </h2>

                    <p className="font-inter text-lightGray text-[18px] mb-8 leading-relaxed">
                        Nikmati sendiri suasana kami. Mampir dan nikmati secangkir kopi segar dan sapaan hangat.
                    </p>

                    <div className="space-y-6">
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <h3 className="font-inter font-semibold text-white text-lg tracking-wide uppercase text-white/70">Alamat</h3>
                            <p className="font-inter text-lightGray max-w-[280px] text-sm leading-relaxed">
                                Jl. Rawa Domba, RT.3/RW.16, Duren Sawit, Kec. Duren Sawit, Kota Jakarta Timur 13440
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <h3 className="font-inter font-semibold text-white text-lg tracking-wide uppercase text-white/70">Jam Buka</h3>
                            <p className="font-inter text-lightGray text-sm space-y-1">
                                <span className="block">Sen - Kam: 15:00 - 23:00 WIB</span>
                                <span className="block">Jum - Sab: 15:00 - 23:30 WIB</span>
                                <span className="block">Min: 15:00 - 23:00 WIB</span>
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://www.google.com/maps/place/KoffieQue+Coffee+%26+Eatery/@-6.2455244,106.9163159,16.36z/data=!4m6!3m5!1s0x2e698dd28a09b10f:0x968ec7ff8c763d55!8m2!3d-6.2462073!4d106.9170576!16s%2Fg%2F11vwdxxffy?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-flex items-center justify-center space-x-2 bg-white text-[#050505] rounded-md h-12 px-8 font-inter font-medium hover:bg-gray-200 transition-colors w-max mx-auto lg:mx-0"
                    >
                        <span>Dapatkan Petunjuk Arah</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Map Side */}
                <div className="w-full lg:w-2/3 h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 relative group bg-gray-900">
                    <iframe
                        src="https://maps.google.com/maps?q=KoffieQue+Coffee+%26+Eatery,+Jl.+Rawa+Domba&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="KoffieQue Location"
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                </div>

            </div>
        </section>
    );
}
