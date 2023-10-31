import React from "react";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import OurBestCards from "../components/OurBestCards";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import back from '../images/back.png'
function HomePage() {
    return (
        <div>
            <div className="container">
                <Menu />
            </div>
            <Header title="Everything You Love About Coffee" home='true' height="640" bg={back}/>
            <AboutSection title="About Us"/>
            <OurBestCards />
            <Footer />
        </div>
    );
}

export default HomePage;
