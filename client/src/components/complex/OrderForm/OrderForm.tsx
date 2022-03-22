import React, { MouseEventHandler, useState } from "react";
import "./OrderForm.css";
import { CheckoutHeader } from "../CheckoutHeader/CheckoutHeader";
import { MenuItem } from "../MenuItem/MenuItem";
import { PizzaBorder } from "../PizzaBorder/PizzaBorder";
import { DetailsForm } from "../DetailsForm/DetailsForm";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { FormTitle } from "../../simple/FormTitle/FormTitle";
import { BigButton } from "../../simple/BigButton/BigButton";
import { TPaymentForm, TOrderDetailsForm, TAppState } from "./../../pages/LandingPage";
import { TPizzaOrder } from "../PizzaShowcase/PizzaShowcase";

type TOrderFormProps = {
    // TODO: add the correct props and types, to suppport the parent component passing through the form data
    // and a callback for updating ze forms.
    paymentForm: TPaymentForm;
    detailsForm: TOrderDetailsForm;
    orderedPizzas: Array<TPizzaOrder>;
    onSetOrderDetailsForm: (form: TOrderDetailsForm) => void;
    onSetPaymentForm: (form: TPaymentForm) => void;
    onRemoveItem: (index: Number) => void;
}

export const OrderForm = (props: TOrderFormProps) => {
    return (
        <div className="OrderForm">
            <div className="FormContainer">
                <FormTitle>
                    order details
                </FormTitle>
                {/* ~ TODO: iterate over ordered pizzas and display them here with menu item. 
                    Reference how we did PizzaShowcase for a guideline 
                */}
                <div className="MenuItem">
                    {props.orderedPizzas.map((pizza, index) => (
                        <MenuItem
                            key={index}
                            title={pizza.title}
                            price={pizza.price}
                            onClickRemove={() => props.onRemoveItem(index)}
                        />
                    ))}
                </div>
                <div className="PizzaBorder">
                    <PizzaBorder />
                </div>
                <FormTitle>
                    details
                </FormTitle>
                <div className="DetailsForm">
                    <DetailsForm
                        form={props.detailsForm}
                        onChange={props.onSetOrderDetailsForm}
                    />
                </div>
                <FormTitle>
                    payment
                </FormTitle>
                <div className="PaymentForm">
                    <PaymentForm 
                        form={props.paymentForm}
                        onChange={props.onSetPaymentForm}
                    />
                </div>
                <div className="OrderButton">
                <BigButton
                    text="PAY"
                    onClick={() => console.log("Event Triggered")}
                />
                </div>
            </div>
        </div>
    );
};