import React from "react";
import "./PizzaBorder.scss";
import { Icon } from "./../Icon/Icon"
import { Icons } from "./../../icons/Icons";
import { Colors } from "./../../variables/Colors"


export const PizzaBorder = (props) => {
    return (
        <div className="PizzaBorder">
            <div className="PizzaBorder__borderLine"></div>
            <Icon 
                IconElement={Icons.PIZZA_ICON}
                color={Colors.PRIMARY6}
            />
            <div className="PizzaBorder__borderLine"></div>
        </div>
    )
}