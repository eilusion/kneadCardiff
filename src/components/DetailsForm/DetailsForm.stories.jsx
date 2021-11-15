import React, { useState } from "react";
import { DetailsForm } from "./DetailsForm";

export default {
    component: DetailsForm,
    title: "Components/DetailsForm",
};

export const Default = () => {

    const defaultValue = {
        name: "",
        email: "",
        number: "",
        orderType: "delivery",
        streetAndNumber: "",
        postcode: "",
    };
    const [form, setForm] = useState(defaultValue);

    return (        
        <div style={{ width: "375px" }}>
            <DetailsForm
                form={form}
                onChange={setForm}
            />
        </div>
    );
};
