import React from "react";
import Menu from "./Menu"
import Beanslogo from "../images/Beans logo.svg";
function Footer() {
    return (
        <div className="footer">
            <Menu dark="true"/>
            <img src={Beanslogo} alt="" />
        </div>
    );
}

export default Footer;
