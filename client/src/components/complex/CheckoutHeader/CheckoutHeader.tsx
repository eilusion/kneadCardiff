import React, { MouseEventHandler } from "react";
import "./CheckoutHeader.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors"
import { penceToFormattedGBP } from "../../../functions/penceToFormattedGBP";

type TCheckoutHeaderProps = {
    pizzaCounter: Number,
    totalPrice: Number,
    onClick: MouseEventHandler
};

export const CheckoutHeader = (props: TCheckoutHeaderProps) => {
    return (
        <div className="CheckoutHeader">
            <div className="CheckoutHeader__container">
                <div 
                    className="CheckoutHeader__XIcon"
                    onClick={props.onClick}
                >
                    <Icon 
                        IconElement={Icons.X_ICON}
                        color={Colors.PRIMARY6}
                    />
                </div>
                <div className="CheckoutHeader__pizzaCounter">{props.pizzaCounter}</div>
                    <Icon
                        IconElement={Icons.PIZZA_ICON}
                        color={Colors.PRIMARY6}
                    />
                <div className="CheckoutHeader__totalPrice">{penceToFormattedGBP(props.totalPrice)}</div>
                <div className="CheckoutHeader__diningBorder">
                    <Icon
                        IconElement={Icons.BASKET_ICON}
                        color={Colors.PRIMARY6}
                    />
                </div>
            </div>
            <div className="CheckoutHeader__bottomBorder"></div>
        </div>
    );
};
