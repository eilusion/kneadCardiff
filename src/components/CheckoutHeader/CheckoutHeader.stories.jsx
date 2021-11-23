import React from "react";
import { CheckoutHeader } from "./CheckoutHeader";

export default {
    component: CheckoutHeader,
    title: "Components/CheckoutHeader",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <CheckoutHeader
                pizzaCounter="2"
                totalPrice="(£26.00)"             
            />
        </div>
    );
};