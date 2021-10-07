import React from "react";
import { PizzaBorder } from "./PizzaBorder";

export default {
    component: PizzaBorder,
    title: "Components/PizzaBorder",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <PizzaBorder />
        </div>
    );
};