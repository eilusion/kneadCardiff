import React from "react";
import "./PizzaBorder.scss";
import { Icon } from "./../Icon/Icon"
import { Icons } from "./../../icons/Icons";

export const PizzaBorder = (props) => {
    return (
        <div className="PizzaBorder">
            <div className="PizzaBorder__borderLine"></div>
            <Icon 
                IconElement={Icons.PIZZA_ICON}
            />
            <div className="PizzaBorder__borderLine"></div>
        </div>
    )
}