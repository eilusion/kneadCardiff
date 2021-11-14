import React from "react";
import { RadioComp } from "./RadioComp";

export default {
    component: RadioComp,
    title: "Components/RadioComp",
};

export const Selected = () => {
    return (
        <div>
            <RadioComp
                label="delivery"
                isSelected={true}
                onClick={() => {
                    console.log("I've been clickety clicked")
                }}
            />
        </div>
    );
};

export const Unselected = () => {
    return (
        <div>
            <RadioComp
                label="delivery"
                isSelected={false}
                onClick={() => {
                    console.log("I've been clickety clicked")
                }}
            />
        </div>
    );
};