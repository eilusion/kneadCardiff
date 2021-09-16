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
                deliveryTitle="delivery address:"
                deliveryAddress={{
                    streetAddress:"31 Alans Lane",
                    postcode: "AL4N 4NA"
                }}
                estimatedTime="estimated delivery time: 25mins"
            />
        </div>
    );
};