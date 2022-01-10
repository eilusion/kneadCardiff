import React from "react";
import "./MainHeader.scss";
import { Icon } from "./../Icon/Icon"
import { Icons } from "./../../icons/Icons";
import { Colors } from "./../../variables/Colors"

export const  MainHeader = (props) => {
    return (
        <div className="MainHeader">
            <div className="MainHeader__logo">
                <Icon 
                    IconElement={Icons.DELIVERY_DINING}
                    color={Colors.NEUTRALPAPER}
                    size="40px"
                />
            </div>
            <div className="MainHeader__bottomBorder"></div>
        </div>
        
    );
};
