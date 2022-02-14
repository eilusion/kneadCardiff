import React, { MouseEventHandler, useState } from "react";
import "./OrderForm.css";
import { CheckoutHeader } from "../CheckoutHeader/CheckoutHeader";
import { MenuItem } from "../MenuItem/MenuItem";
import { PizzaBorder } from "../PizzaBorder/PizzaBorder";
import { DetailsForm } from "../DetailsForm/DetailsForm";
import { PaymentForm } from "../PaymentForm/PaymentForm";
import { FormTitle } from "../../simple/FormTitle/FormTitle";
import { BigButton } from "../../simple/BigButton/BigButton";

type TOrderFormProps = {
}

export const OrderForm = (props: TOrderFormProps) => {

    const [form, setForm] = useState({});

    return (
        <div className="OrderForm">
            <div className="FormContainer">
                <div className="CheckoutHeader">
                    <CheckoutHeader 
                        pizzaCounter={2}
                        totalPrice={1650}
                        onClick={console.log}
                    />
                </div>
                <FormTitle>
                    order details
                </FormTitle>
                <div className="MenuItem">
                    <MenuItem
                        title="goats cheese romana"
                        price={1250}
                        onClick={console.log}
                    />
                </div>
                <div className="MenuItem">
                    <MenuItem
                        title="lightly dusted vegan delight"
                        price={1350}
                        onClick={console.log}
                    />
                </div>
                <div className="PizzaBorder">
                    <PizzaBorder />
                </div>
                <FormTitle>
                    details
                </FormTitle>
                <div className="DetailsForm">
                    <DetailsForm
                        form={form}
                        onChange={setForm}
                    />
                </div>
                <FormTitle>
                    payment
                </FormTitle>
                <div className="PaymentForm">
                    <PaymentForm 
                        form={form}
                        onChange={setForm}
                    />
                </div>
                <div className="OrderButton">
                <BigButton
                    text="add to cart"
                    onClick={() => console.log("Event Triggered")}
                />
                </div>
            </div>
        </div>
    );
};