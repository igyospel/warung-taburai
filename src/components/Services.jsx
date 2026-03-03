import React from 'react';

const services = [
    {
        title: 'Artisan Roasts',
        description: 'We source the finest beans globally and roast them to perfection for a rich, complex flavor in every cup.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
    {
        title: 'Expert Baristas',
        description: 'Our passionate baristas treat every extraction as an art form, guaranteeing the perfect pour.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        title: 'Cozy Atmosphere',
        description: 'A warm, inviting space with cinematic lighting, perfect for deep work or catching up with friends.',
        icon: (
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section className="bg-darkBg py-24 px-5 lg:px-20 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="font-bebas text-white text-[48px] md:text-[64px] leading-none mb-4">
                    THE ART OF COFFEE
                </h2>
                <p className="font-inter text-lightGray/80 text-[18px] max-w-2xl mx-auto">
                    We believe in honest ingredients, meticulous preparation, and spaces that inspire. Beyond just a drink, it's a daily ritual.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#0a0a0a] p-10 rounded-2xl border border-white/5 hover:-translate-y-2 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                            {service.icon}
                        </div>
                        <h3 className="font-inter text-white text-2xl font-semibold mb-3">
                            {service.title}
                        </h3>
                        <p className="font-inter text-lightGray/70 leading-relaxed max-w-sm">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
