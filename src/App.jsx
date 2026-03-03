import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedMenu from './components/FeaturedMenu';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
    return (
        <>
            <HeroSection />
            <FeaturedMenu />
            <Services />
            <Footer />
        </>
    );
}
