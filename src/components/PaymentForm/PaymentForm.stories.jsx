import React from "react";
import { PaymentForm } from "./PaymentForm";

export default {
    component: PaymentForm,
    title: "Components/PaymentForm",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <PaymentForm />
        </div>
    );
};