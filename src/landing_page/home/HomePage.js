import React  from "react";
import Navbar from "../../Navbar";
import HeroSection from "./Hero";
import Adwards from "./Adwards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../../OpenAccount";
import Footer from "../../Footer";

function HomePage(){
    return (
        <>
            <Navbar />
            <HeroSection />
            <Adwards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}
export default HomePage;
