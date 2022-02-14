import React, { MouseEventHandler } from 'react';
import "./OrderTopBar.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors";
import { penceToFormattedGBP } from "../../../functions/penceToFormattedGBP";
import { BigButton } from '../../simple/BigButton/BigButton';

type TOrderTopBar = {
    pizzaCounter: Number,
    totalPrice: Number,
    onClick: MouseEventHandler
}

export const OrderTopBar = (props: TOrderTopBar) => {
    return (
        <div className='OrderTopBar'>
            <div className='TopBarContainer'>
                <div 
                    className="PayButton"
                    onClick={props.onClick}
                >
                    <BigButton 
                        text='pay'
                        onClick={() => console.log("Event Triggered")}
                    />
                </div>
                <div className="PizzaCounter">{props.pizzaCounter}</div>
                    <Icon
                        IconElement={Icons.PIZZA_ICON}
                        color={Colors.PRIMARY6}
                    />
                <div className="TotalPrice">{penceToFormattedGBP(props.totalPrice)}</div>
                <div className="DiningBorder">
                    <Icon
                        IconElement={Icons.BASKET_ICON}
                        color={Colors.PRIMARY6}
                    />
                </div>
            </div>
            <div className="BottomBorder"></div>
        </div>
    );
};
