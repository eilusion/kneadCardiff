import React from "react";
import { DetailsForm } from "./DetailsForm";

export default {
    component: DetailsForm,
    title: "Components/DetailsForm",
};

export const Default = () => {
    return (        
        <div style={{ width: "375px" }}>
            <DetailsForm />
        </div>
    );
};
