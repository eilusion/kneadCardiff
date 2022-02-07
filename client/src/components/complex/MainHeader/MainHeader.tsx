import React from "react";
import "./MainHeader.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors"

type TMainHeaderProps = {
    
}

export const MainHeader = (props: TMainHeaderProps) => {
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
