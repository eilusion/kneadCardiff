import React from "react";
import "./LandingPage.css";
import { MainHeader } from "./../MainHeader/MainHeader";
import { BigNumber } from "./../BigNumber/BigNumber";
import { PizzaShowcase } from "./../PizzaShowcase/PizzaShowcase";

type TLandingPageProps = {

}

export const LandingPage = (props: TLandingPageProps) => {
    return (
        <div className="LandingPage">
            <div className="MainHeader">
                <MainHeader />
            </div>
            <div className="BigNumber">
                <BigNumber text="6"/>
            </div>
            <div className="PizzaShowcase">
                <PizzaShowcase 
                    title="goats cheese romana"
                    img="https://contenthandler.azureedge.net/recp/427/2000/0/389.jpg"
                    description="Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​"
                    price={1250}
                    buttonText="add to cart"
                    onClick={() => console.log("Event Triggered")}
                />
            </div>
            <div>
                <PizzaShowcase 
                    title="goats cheese romana"
                    img="https://contenthandler.azureedge.net/recp/427/2000/0/389.jpg"
                    description="Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​"
                    price={1250}
                    buttonText="add to cart"
                    onClick={() => console.log("Event Triggered")}
                />
            </div>
            <div>
                <PizzaShowcase 
                    title="goats cheese romana"
                    img="https://contenthandler.azureedge.net/recp/427/2000/0/389.jpg"
                    description="Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​"
                    price={1250}
                    buttonText="add to cart"
                    onClick={() => console.log("Event Triggered")}
                />
            </div>
        </div>
    );
};