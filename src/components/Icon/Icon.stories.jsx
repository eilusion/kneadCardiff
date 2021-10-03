import React from "react";
import { Icon } from "./Icon";
import { Icons } from "./../../icons/Icons";

export default {
    component: Icon,
    title: "Components/Icon",
};

export const Default = () => {
    return (
        <Icon
            iconElement = {Icons.CROSS_CIRCLE}
        />
    );
};