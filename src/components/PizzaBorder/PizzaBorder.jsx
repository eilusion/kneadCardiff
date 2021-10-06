import React from "react";
import "./PizzaBorder.scss";

export const PizzaBorder = (props) => {
    return (
        <div className="PizzaBorder">
            <div className="PizzaBorder__borderLine"></div>
            <props.IconElement/>
            <div className="PizzaBorder__borderLine"></div>
        </div>
    )
}