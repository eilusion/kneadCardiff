import React from "react";
import { MenuItem } from "./MenuItem";

export default {
    component: MenuItem,
    title: "Components/MenuItem",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <MenuItem
                title="goats cheese romana"
                price="1250"
                onClick={console.log}
            />
        </div>
    );
};