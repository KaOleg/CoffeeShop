import React from "react";
import Beanslogo from "../images/Beans logo.svg"
function SectionTitle(props) {
    return (
        <div className="sectionTitle">
            <h2>{props.message}</h2>
            <img src={Beanslogo} alt="" />
        </div>
    );
}

export default SectionTitle;
