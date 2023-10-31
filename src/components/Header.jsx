import React from "react";
import Beanslogo from "../images/Beans logo light.svg";
function Header(props) {
    return (
        <header
            style={{
                backgroundImage: "url(" + props.bg + ")",
                height: props.height + "px",
            }}
            className="header"
        >
            <h1>{props.title}</h1>
            {props.home ? (
                <div>
                    <img src={Beanslogo} alt="" />
                    <h2>We makes every day full of energy and taste</h2>
                    <h2>Want to try our beans?</h2>
                    <button className="menuBtn">More</button>
                </div>
            ) : null}
        </header>
    );
}

export default Header;
