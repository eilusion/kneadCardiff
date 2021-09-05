import React from "react";
import { PizzaShowcase } from "./PizzaShowcase";

export default {
    component: PizzaShowcase,
    title: "Components/PizzaShowcase",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <PizzaShowcase 
                title="goats cheese romana"
                img="https://contenthandler.azureedge.net/recp/427/2000/0/389.jpg"
                description="Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​"
                price={1250}
                buttonText="add to cart"
                onClick={() => console.log("Event Triggered")}
            />
        </div>
    );
};