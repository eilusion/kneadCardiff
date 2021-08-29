import React from "react";
import { BigButton } from "./BigButton";

export default {
    component: BigButton,
    title: "Components/BigButton",
};

export const Default = () => {
    return (
        <BigButton
            text="add to cart"
            onClick={() => console.log("Event Triggered")}
        />
    );
}


