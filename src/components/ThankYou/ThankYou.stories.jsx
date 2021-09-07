import React from "react";
import { ThankYou } from "./ThankYou";

export default {
    component: ThankYou,
    title: "Components/ThankYou",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <ThankYou
                thanksText="thank you!"
                orderText="your order number is:"
                numberText="3"
                deliveryAddress="delivery address:
                31 alan street
                alan lane
                alansville
                al14 5pn"
                estimatedTime="estimated delivery time: 25mins"
            />
        </div>
    );
};