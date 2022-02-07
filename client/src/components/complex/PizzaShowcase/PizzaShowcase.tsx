import React, { MouseEventHandler } from "react";
import "./PizzaShowcase.css";
import { BigButton } from "../../simple/BigButton/BigButton";
import { penceToFormattedGBP } from "../../../functions/penceToFormattedGBP"

type TPizzaShowcaseProps = {
    title: string,
    img: string,
    description: string,
    price: number,
    buttonText: string,
    onClick: MouseEventHandler,
}

export const PizzaShowcase = (props: TPizzaShowcaseProps) => {
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