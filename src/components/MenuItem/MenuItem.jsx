import React from "react";
import "./MenuItem.scss";
import { Icon } from "./../Icon/Icon"
import { Icons } from "./../../icons/Icons";


export const MenuItem = (props) => {
    return (
        <div className="MenuItem">
            <div className="MenuItem__crossIcon">
                <Icon 
                    IconElement={Icons.CROSS_CIRCLE}
                />
            </div>
            <div className="MenuItem__itemTitle">{props.title}</div>
            <div className="MenuItem__priceWrapper">
                <div className="MenuItem__itemPrice">{props.price}</div>
            </div>
        </div>
    );
};