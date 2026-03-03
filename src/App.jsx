import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedMenu from './components/FeaturedMenu';
import Services from './components/Services';
import Footer from './components/Footer';
import Location from './components/Location';

export default function App() {
    return (
        <>
            <HeroSection />
            <FeaturedMenu />
            <Services />
            <Location />
            <Footer />
        </>
    );
}
