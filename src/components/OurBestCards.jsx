import React from "react";
import Card from "./Card";
import card1 from "../images/bean2.png"
import card2 from "../images/presto.png"
import card3 from "../images/coffee.png"
function OurBestCards() {
    return (
        <div className="cardsContent">
            <h2>Our best</h2>
            <div className="cards">
                <Card image={card1} money="10.73$" text="Solimo Coffee Beans 2 kg" />
                <Card image={card2} money="15.99$" text="Presto Coffee Beans 1 kg" />
                <Card image={card3} money="6.99$" text="AROMISTICO Coffee 1 kg" />
            </div>
        </div>
    );
}

export default OurBestCards;
