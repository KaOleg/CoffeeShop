import React from "react";
import SectionTitle from "./SectionTitle";

function AboutSection(props) {
    return (
        <div className="aboutSection">
            {props.image ? <img src={props.image} alt="" /> : null}
            <div>
                <SectionTitle message={props.title} />
                <p>{props.country}</p>
                <p>
                    Extremity sweetness difficult behaviour he of. On disposal
                    of as landlord horrible.
                </p>
                <p>
                    Afraid at highly months do things on at. Situation recommend
                    objection do intention so questions.{" "}
                </p>
                <p>
                    As greatly removed calling pleased improve an. Last ask him
                    cold feelmet spot shy want. Children me laughing we prospect
                    answered followed. At it went is song that held help face.
                </p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}
export default AboutSection;
