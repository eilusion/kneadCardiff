import React from "react";
import "./CheckoutHeader.scss";
import { Icon } from "./../Icon/Icon"
import { Icons } from "./../../icons/Icons";
import { Colors } from "./../../variables/Colors"

export const CheckoutHeader = (props) => {
    return (
        <div className="CheckoutHeader">
            <div className="CheckoutHeader__container">
                <div className="CheckoutHeader__deliveryDining">
                    <Icon
                        IconElement={Icons.DELIVERY_DINING}
                        color={Colors.PRIMARY6}
                    />
                </div>
                <div className="CheckoutHeader__pizzaCounter">{props.pizzaCounter}</div>
                    <Icon
                        IconElement={Icons.PIZZA_ICON}
                        color={Colors.PRIMARY6}
                    />
                <div className="CheckoutHeader__totalPrice">{props.totalPrice}</div>
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