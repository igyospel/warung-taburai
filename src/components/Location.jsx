import React, { useState } from 'react';

const outlets = [
    {
        id: 1,
        name: 'Kranji, Bekasi',
        address: 'Jl. Jend. Sudirman No.68, Bekasi',
        mapsQuery: 'Warung+Taburai+Kranji+Bekasi',
        phone: '0812-9832-5001',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 2,
        name: 'Jakarta Timur',
        address: 'East Jakarta City, Jakarta (Jl. Rawa Domba)',
        mapsQuery: 'Warung+Taburai+Jakarta+Timur',
        phone: '0812-9832-5002',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 3,
        name: 'Jakarta Utara',
        address: 'North Jakarta City, Jakarta',
        mapsQuery: 'Warung+Taburai+Jakarta+Utara',
        phone: '0812-9832-5003',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 4,
        name: 'Kemang',
        address: 'South Jakarta City, Jakarta',
        mapsQuery: 'Warung+Taburai+Kemang',
        phone: '0812-9832-5004',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 5,
        name: 'Depok',
        address: 'Depok City, West Java',
        mapsQuery: 'Warung+Taburai+Depok',
        phone: '0812-9832-5005',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 6,
        name: 'Pinang, Tangerang',
        address: 'Tangerang City, Banten',
        mapsQuery: 'Warung+Taburai+Pinang+Tangerang',
        phone: '0812-9832-5006',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 7,
        name: 'Kebon Jeruk',
        address: 'West Jakarta City, Jakarta',
        mapsQuery: 'Warung+Taburai+Kebon+Jeruk',
        phone: '0812-9832-5007',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 8,
        name: 'Bogor',
        address: 'Bogor City, West Java',
        mapsQuery: 'Warung+Taburai+Bogor',
        phone: '0812-9832-5008',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 9,
        name: 'Bandung',
        address: 'Bandung City, West Java',
        mapsQuery: 'Warung+Taburai+Bandung',
        phone: '0812-9832-5009',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    },
    {
        id: 10,
        name: 'Lampung',
        address: 'Lampung',
        mapsQuery: 'Warung+Taburai+Lampung',
        phone: '0812-9832-5010',
        hours: [
            'Sen - Kam: 15:00 - 23:00 WIB',
            'Jum - Sab: 15:00 - 23:30 WIB',
            'Min: 15:00 - 23:00 WIB'
        ]
    }
];

export default function Location() {
    const [selectedOutlet, setSelectedOutlet] = useState(outlets[0]);

    return (
        <section id="location" className="bg-darkBg py-24 px-5 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

                {/* Text & Outlet List Side */}
                <div className="w-full lg:w-1/3 flex flex-col">
                    <h2 className="font-bebas text-white text-[48px] md:text-[64px] leading-none mb-6 text-center lg:text-left">
                        CABANG KAMI
                    </h2>

                    <p className="font-inter text-lightGray text-[18px] mb-8 leading-relaxed text-center lg:text-left">
                        Temukan Warung Taburai terdekat dari lokasimu dan rasakan kehangatannya.
                    </p>

                    <div className="flex-1 bg-black/20 rounded-xl p-4 overflow-y-auto max-h-[500px] border border-white/5 custom-scrollbar">
                        <div className="space-y-3">
                            {outlets.map((outlet) => (
                                <button
                                    key={outlet.id}
                                    onClick={() => setSelectedOutlet(outlet)}
                                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex flex-col gap-2 ${selectedOutlet.id === outlet.id
                                        ? 'bg-darkerBg border-white/20 shadow-lg'
                                        : 'bg-transparent border-transparent hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex justify-between items-center w-full">
                                        <h3 className={`font-inter font-semibold text-lg tracking-wide ${selectedOutlet.id === outlet.id ? 'text-white' : 'text-white/70'}`}>
                                            {outlet.name}
                                        </h3>
                                        {selectedOutlet.id === outlet.id && (
                                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                        )}
                                    </div>
                                    <p className="font-inter text-lightGray/70 text-sm leading-relaxed truncate">
                                        {outlet.address}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Details & Map Side */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    <div className="bg-black/20 p-6 rounded-xl border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div>
                            <h3 className="font-inter font-semibold text-white text-xl mb-2">Warung Taburai - {selectedOutlet.name}</h3>
                            <p className="font-inter text-lightGray/80 text-sm mb-4">
                                {selectedOutlet.address}
                            </p>
                            <div className="font-inter text-lightGray text-sm mb-4">
                                <span className="font-medium text-white/70 block mb-1">Telepon/WhatsApp:</span>
                                <a href={`tel:${selectedOutlet.phone.replace(/-/g, '')}`} className="hover:text-white transition-colors text-lightGray/80">
                                    {selectedOutlet.phone}
                                </a>
                            </div>
                            <div className="font-inter text-lightGray text-sm">
                                <span className="font-medium text-white/70 block mb-1">Jam Operasional:</span>
                                {selectedOutlet.hours.map((hour, idx) => (
                                    <span key={idx} className="block text-lightGray/80">{hour}</span>
                                ))}
                            </div>
                        </div>
                        <a
                            href={`https://www.google.com/maps/search/${selectedOutlet.mapsQuery}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2 bg-white text-darkerBg rounded-md h-12 px-6 font-inter font-medium hover:bg-gray-200 transition-colors shrink-0 w-full sm:w-auto"
                        >
                            <span>Buka di Google Maps</span>
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 relative group bg-gray-900 mt-auto">
                        <iframe
                            key={selectedOutlet.id} // forces iframe to reload when outlet changes
                            src={`https://maps.google.com/maps?q=${selectedOutlet.mapsQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                            className="w-full h-full border-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Lokasi Warung Taburai ${selectedOutlet.name}`}
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
