import React, { useState } from "react";
import { PaymentForm } from "./PaymentForm";

export default {
    component: PaymentForm,
    title: "Components/PaymentForm",
};

export const Default = () => {

    const defaultValue = {
        cardNumber: "",
        mmyy: "",
        cvc: "",
        postcode: "",
    };

    const [form, setForm] = useState(defaultValue);

    return (
        <div style={{ width: "375px" }}>
            <PaymentForm 
                form={form}
                onChange={setForm}
            />
        </div>
    );
};