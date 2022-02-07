import React, { MouseEventHandler } from "react";
import "./MenuItem.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors"
import { penceToFormattedGBP } from "../../../functions/penceToFormattedGBP"

type TMenuItemProps = {
    onClick: MouseEventHandler,
    title: string,
    price: number,
};

export const MenuItem = (props: TMenuItemProps) => {
    return (
        <div className="MenuItem">
            <div 
                className="MenuItem__crossIcon" 
                onClick={props.onClick}
            >
                <Icon 
                    IconElement={Icons.CROSS_CIRCLE}
                    color={Colors.NEUTRALINK}
                />
            </div>
            <div className="MenuItem__itemTitle">{props.title}</div>
            <div className="MenuItem__priceWrapper">
                <div className="MenuItem__itemPrice">{penceToFormattedGBP(props.price)}</div>
            </div>
        </div>
    );
};