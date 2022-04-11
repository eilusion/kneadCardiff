import React, { MouseEventHandler, useState } from "react";
import "./LandingPage.css";
import { LogoGreeting } from "../complex/LogoGreeting/LogoGreeting";
import { BigNumber } from "../simple/BigNumber/BigNumber";
import { PizzaShowcase, TPizzaOrder } from "../complex/PizzaShowcase/PizzaShowcase";
import { WeAreOpen } from "../simple/WeAreOpen/WeAreOpen";
import { OrderForm } from "../complex/OrderForm/OrderForm";
import { PaymentBarAndCurtainContainer } from "../containers/PaymentBarAndContainer/PaymentBarAndCurtainContainer";
import { PaymentError } from "../simple/PaymentError/PaymentError"

type TLandingPageProps = {
}

const MockPizzas: Array<TPizzaOrder> = [
    {
        id: "1",
        title: "goats cheese romana",
        img: "https://contenthandler.azureedge.net/recp/427/2000/0/389.jpg",
        description: "Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​",
        price: 1250,
    },
    {
        id: "2",
        title: "goats cheese romana",
        img: "https://contenthandler.azureedge.net/recp/427/2000/0/389.jpg",
        description: "Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​",
        price: 1250,
    },
    {
        id: "3",
        title: "goats cheese romana",
        img: "https://contenthandler.azureedge.net/recp/427/2000/0/389.jpg",
        description: "Chicken, spinach, mozzarella and garlic oil on a béchamel base, topped with slow-roasted tomatoes, basil & pine kernel pesto and Gran Milano cheese on a Romana base.​",
        price: 1250,
    },
];

export type TAppState = {
    paymentStatus: TPaymentStatus;
    orderedPizzas: Array<TPizzaOrder>;
    availablePizzas: number;
    delivery: boolean;
    detailsForm: TOrderDetailsForm;
    paymentForm: TPaymentForm;
};

export type TOrderDetailsForm = {
    name: string;
    email: string;
    number: string;
    orderType: string;
    streetAndNumber: string;
    postcode: string;
};

export type TPaymentForm = {
    cardNumber: string;
    mmyy: string;
    cvc: string;
    postcode: string;
};

export type TPaymentStatus = "unsubmitted" | "submitting" | "success" | "failure";

export const LandingPage = (props: TLandingPageProps) => {

    const [mockState, setMockState] = useState<TAppState>({
        paymentStatus: "unsubmitted",
        orderedPizzas: [],
        availablePizzas: 0,
        delivery: true,
        detailsForm: {
            name: "",
            email: "",
            number: "",
            orderType: "delivery",
            streetAndNumber: "",
            postcode: "",
        },
        paymentForm: {
            cardNumber: "",
            mmyy: "",
            cvc: "",
            postcode: "",
        }
    });

    const setState = (state: TAppState): void => {
        setMockState(state);
    };

    const onAddPizzaToBasket = (pizza: TPizzaOrder) => {
        setMockState({
            ...mockState,
            orderedPizzas: mockState.orderedPizzas.concat(pizza),
        });
    }

    return (
        <div className="LandingPage">
            {/* CHECKOUT BAR */}
            <div className="LandingPage__orderForm">
                <PaymentBarAndCurtainContainer
                    state={mockState}
                    setState={setState}
                />  
            </div>

            {/* HEADER */}
            <div className="LandingPage__mainHeader">
                <LogoGreeting />
            </div>

            {/* OPENING INFO */}
            <WeAreOpen 
                openText="we are open!"
                availableText="pizza's available"
            />

            {/* PIZZA COUNT NUMBER */}
            <div className="LandingPage__bigNumber">
                <BigNumber text="6"/>
            </div>

            {/* LIST: PIZZAS TO ORDER */}
            <div className="LandingPage__pizzas">
                {MockPizzas.map((pizza, index) => (
                    <PizzaShowcase
                        key={index}
                        pizza={pizza}
                        buttonText="add to cart"
                        onClick={onAddPizzaToBasket}
                    />
                ))}
            </div>
            <PaymentError />
        </div>
    );
}; 