import React from 'react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-5 lg:px-20 text-lightGray font-inter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                {/* Brand & Newsletter */}
                <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                        <img
                            src="/logo-2.png"
                            alt="KoffieQue Logo"
                            className="h-8 sm:h-10 md:h-12 w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                    <p className="max-w-md text-lightGray/70 leading-relaxed mb-6">
                        Dapatkan kabar terbaru, seasonal menu, dan momen spesial langsung ke inbox kamu.
                    </p>
                    <form className="flex w-full max-w-sm">
                        <input
                            type="email"
                            placeholder="Berlangganan untuk info terbaru"
                            className="w-full bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-white outline-none focus:border-white/30 transition-colors placeholder:text-lightGray/40"
                        />
                        <button className="bg-white text-darkBg px-6 rounded-r-lg font-medium hover:bg-lightGray transition-colors">
                            Gabung
                        </button>
                    </form>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6 flex items-center space-x-2">
                        <span>Eksplorasi</span>
                    </h4>
                    <ul className="space-y-4 text-lightGray/70">
                        {[
                            { name: 'Beranda', href: '#home' },
                            { name: 'Menu', href: '#menu' },
                            { name: 'Cerita Kami', href: '#story' },
                            { name: 'Lokasi', href: '#location' },
                            { name: 'Hubungi Kami', href: '#contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="hover:text-white transition-colors">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Kontak</h4>
                    <ul className="space-y-4 text-lightGray/70">
                        <li className="leading-relaxed">Jl. Rawa Domba, RT.3/RW.16, Duren Sawit, Jakarta Timur 13440</li>
                        <li>
                            <a href="tel:+6281298325387" className="hover:text-white transition-colors">
                                0812-9832-5387
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hello@koffieque.com" className="hover:text-white transition-colors">
                                hello@koffieque.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Legal */}
            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-sm text-lightGray/50 gap-4">
                <span>© 2026 KoffieQue Roasters. Hak Cipta Dilindungi.</span>
                <div className="flex space-x-6 text-center md:text-left">
                    <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                    <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
                </div>
            </div>
        </footer>
    );
}
