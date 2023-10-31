import React from "react";
import AboutSection from "../components/AboutSection";
import Menu from "../components/Menu";
import Header from "../components/Header";
import image1 from "../images/secondPhotoHeader.png"
import imageBeans from "../images/Mask Group.png"
import Search from "../components/Search";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
function SecondPage(props) {
    return (
        <div>
            <div className="container">
                <Menu />
            </div>
            <Header title="Our Coffee" height='260' bg={image1}/>
            <AboutSection title="About Our Beans" image={imageBeans}/>
            <Search/>
            <Cards coffee={props.coffee}/>
            <Footer/>
        </div>
    );
}

export default SecondPage;
