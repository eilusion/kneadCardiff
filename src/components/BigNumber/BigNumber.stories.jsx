import React from "react";
import { BigNumber } from "./BigNumber";

export default {
    component: BigNumber,
    title: "Components/BigNumber",
};

export const Default = () => {
    return (
        <BigNumber text="3"/>
    );
};