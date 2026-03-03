import React from 'react';

const menuItems = [
    {
        id: 1,
        name: 'Artisan Latte',
        category: 'Hot Espresso',
        price: '$5.50',
        img: '/menu1.png',
        specs: ['Whole Milk', 'Double Shot', 'Vanilla'],
    },
    {
        id: 2,
        name: 'V60 Pour Over',
        category: 'Filter Coffee',
        price: '$6.00',
        img: '/menu2.png',
        specs: ['Single Origin', 'Light Roast', 'Fruity'],
    },
    {
        id: 3,
        name: 'Iced Latte',
        category: 'Cold Brew',
        price: '$5.00',
        img: '/coffee_hero.png',
        specs: ['Oat Milk', 'Ice Cubes', 'Caramel'],
    },
];

export default function FeaturedMenu() {
    return (
        <section className="bg-darkBg py-24 px-5 lg:px-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="font-bebas text-white text-[48px] md:text-[64px] leading-none mb-2">
                        EXPLORE OUR MENU
                    </h2>
                    <p className="font-inter text-lightGray text-[18px] max-w-md">
                        Handpicked premium beans designed for excellence, flavor, and an unmatched coffee experience.
                    </p>
                </div>
                <button className="hidden md:inline-flex items-center space-x-2 text-white border-b border-white pb-1 font-inter hover:text-lightGray transition-colors">
                    <span>View Full Menu</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l6 7-6 7" />
                    </svg>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="group bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-500 flex flex-col"
                    >
                        {/* Image Container */}
                        <div className="relative h-[250px] overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                                <span className="font-inter text-white text-xs font-medium tracking-wide">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-inter text-white text-xl font-semibold leading-tight pr-4">
                                    {item.name}
                                </h3>
                                <span className="font-inter text-white font-medium text-lg shrink-0">
                                    {item.price}
                                </span>
                            </div>

                            {/* Specs */}
                            <div className="flex items-center gap-3 mb-8 flex-wrap">
                                {item.specs.map((spec, i) => (
                                    <span
                                        key={i}
                                        className="font-inter text-lightGray/80 text-sm bg-white/5 px-3 py-1 rounded-md"
                                    >
                                        {spec}
                                    </span>
                                ))}
                            </div>

                            {/* Action */}
                            <button className="mt-auto w-full py-3 rounded-lg border border-white/10 text-white font-inter font-medium hover:bg-white hover:text-darkBg transition-all duration-300">
                                Order Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <button className="md:hidden mt-8 w-full flex justify-center items-center space-x-2 text-white border border-white/20 rounded-lg py-4 font-inter hover:bg-white/5 transition-colors">
                <span>View Full Menu</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l6 7-6 7" />
                </svg>
            </button>
        </section>
    );
}
