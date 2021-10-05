import React from "react";
import { MenuItem } from "./MenuItem";
import { Icons } from "./../../icons/Icons";

export default {
    component: MenuItem,
    title: "Components/MenuItem",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <MenuItem
                IconElement={Icons.CROSS_CIRCLE}
                itemTitle="goats cheese romana"
                itemPrice="£12.50"
            />
        </div>
    );
};