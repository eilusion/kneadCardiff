import React from "react";
import { FormTitle } from "./FormTitle";

export default {
    component: FormTitle,
    title: "Components/FormTitle",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <FormTitle>
                payment
            </FormTitle>
        </div>
    );
};