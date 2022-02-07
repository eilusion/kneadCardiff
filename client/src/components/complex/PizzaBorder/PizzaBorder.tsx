import React from "react";
import "./PizzaBorder.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors"

type TPizzaBorderProps = {
    
}

export const PizzaBorder = (props: TPizzaBorderProps) => {
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