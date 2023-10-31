import React from "react";
import coffeebeans from "../images/coffee-beans.svg";
import coffeebeansdark from"../images/cofee-beans-dark.svg"
import {Link} from "react-router-dom"
function Menu(props) {
    return (
        <div className="menu">
            <Link to="/" className="logo">
                <img src={props.dark?coffeebeansdark:coffeebeans} alt="" />
                Coffee house
            </Link>
            <Link to="/our-beans">Our coffee</Link>
            
            <Link to="/your-pleasure">For your pleasure</Link>
        </div>
    );
}

export default Menu;
