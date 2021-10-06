import React from "react";
import { PizzaBorder } from "./PizzaBorder";
import { Icons } from "./../../icons/Icons";

export default {
    component: PizzaBorder,
    title: "Components/PizzaBorder",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <PizzaBorder
                IconElement={Icons.PIZZA_ICON}
            />
        </div>
    );
};