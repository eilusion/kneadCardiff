import React from "react";
import { Icon } from "./Icon";
import { Icons } from "./../../icons/Icons";

export default {
    component: Icon,
    title: "Components/Icon",
};

export const crossCircle = () => {
    return (
        <Icon
            IconElement={Icons.CROSS_CIRCLE}
        />
    );
};

export const pizzaIcon = () => {
    return (
        <Icon
             IconElement={Icons.PIZZA_ICON}
        />
    );
};

export const radioUnchecked = () => {
    return (
        <Icon 
            IconElement={Icons.RADIO_UNCHECKED}
        />
    );
};

export const radioChecked = () => {
    return (
        <Icon 
            IconElement={Icons.RADIO_CHECKED}
        />
    );
};

export const deliveryDining = () => {
    return (
        <Icon 
            IconElement={Icons.DELIVERY_DINING}
        />
    );
};

export const basketIcon = () => {
    return (
        <Icon 
            IconElement={Icons.BASKET_ICON}
        />
    );
};