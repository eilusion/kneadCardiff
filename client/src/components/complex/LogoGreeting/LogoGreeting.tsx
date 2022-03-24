import React from "react";
import "./LogoGreeting.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors"

type TLogoGreetingProps = {
    
}

export const LogoGreeting = (props: TLogoGreetingProps) => {
    return (
        <div className="LogoGreeting">
            <div className="LogoGreeting__logo">
                <Icon 
                    IconElement={Icons.DELIVERY_DINING}
                    color={Colors.NEUTRALPAPER}
                    size="40px"
                />
            </div>
            <div className="LogoGreeting__bottomBorder"></div>
        </div>      
    );
};
