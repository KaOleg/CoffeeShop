import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import image1 from "../images/secondPhotoHeader.png";
import Header from "../components/Header";
import forthImg from "../images/forth.jpg";
import SectionTitle from "../components/SectionTitle";
import { useParams } from "react-router-dom";
import imageErr from "../images/error.png"
function ForthPage(props) {
  const params = useParams()
  console.log(params)
  const coffee = props.coffee.filter((c)=>c.id==params.id)
    return (
        <div>
            <div className="container">
                <Menu />
            </div>
            <Header title="Our Coffee" height="260" bg={image1} />
            {coffee.length > 0 ? 
              <div className="aboutSection aboutIt">
                <img src={forthImg} alt="" />
                <div>
                    <SectionTitle message={"About " + coffee[0].title} />
                    <p>
                        <span>Country: </span>{coffee[0].country}
                    </p>
                    <p>
                        <span>Description: </span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                    <p>
                        <span>Price: </span>
                        <span className="price">{coffee[0].cost}</span>
                    </p>
                </div>
            </div>
            : <h1 className="error">404 Coffee Not Found <img src={imageErr} alt="" /></h1>}
            <Footer />
        </div>
    );
}

export default ForthPage;
