import React, { MouseEventHandler } from "react";
import "./PizzaShowcase.css";
import { BigButton } from "../../simple/BigButton/BigButton";
import { penceToFormattedGBP } from "../../../functions/penceToFormattedGBP"

export type TPizzaShowcaseProps = {
    pizza: TPizzaOrder;
    buttonText: string;
    onClick: (pizza: TPizzaOrder) => void;
}

export type TPizzaOrder = {
    id: string;
    title: string;
    img: string;
    description: string;
    price: number;
}

export const PizzaShowcase = (props: TPizzaShowcaseProps) => {
    return (
        <div className="PizzaShowcase">
            <h2 className="PizzaShowcase__title">{props.pizza.title}</h2>
            <img 
                className="PizzaShowcase__pizzaImg" 
                src={props.pizza.img}
            />
            <p className="PizzaShowcase__pizzaText">{props.pizza.description}</p>
            <h3 className="PizzaShowcase__pizzaPrice">{penceToFormattedGBP(props.pizza.price)}</h3>
            <div className="PizzaShowcase__buttonWrap">
                <BigButton
                    text={props.buttonText}
                    onClick={() => props.onClick(props.pizza)}
                />
            </div>
        </div>
    )
};