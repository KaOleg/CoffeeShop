import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
    return (
        <Link to={"/about/" + props.id} className={"card " + (props.noTransperent ? "noTransperent" : "")}>
            <img src={props.image} alt="" />
            <p>{props.text}</p>
            <p className="money">{props.money}</p>
            {props.country ? <p>{props.country}</p> : null}
        </Link>
    );
}

export default Card;
