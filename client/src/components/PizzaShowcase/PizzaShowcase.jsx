import React from "react";
import "./PizzaShowcase.scss";
import { BigButton } from "./../BigButton/BigButton";
import { penceToFormattedGBP } from "./../../functions/penceToFormattedGBP"

export const PizzaShowcase = (props) => {
    return (
        <div className="PizzaShowcase">
            <h2 className="PizzaShowcase__title">{props.title}</h2>
            <img 
                className="PizzaShowcase__pizzaImg" 
                src={props.img}
            />
            <p className="PizzaShowcase__pizzaText">{props.description}</p>
            <h3 className="PizzaShowcase__pizzaPrice">{penceToFormattedGBP(props.price)}</h3>
            <div className="PizzaShowcase__buttonWrap">
                <BigButton
                    text={props.buttonText}
                    onClick={props.onClick}
                />
            </div>
        </div>
    )
};