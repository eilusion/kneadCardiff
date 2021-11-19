import React, { useState } from "react";
import { BasketItems } from "./BasketItems";

export default {
    component: BasketItems,
    title: "Components/BasketItems",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
            <BasketItems 
                items={[
                    {
                        title:"Cikito Supreme",
                        price: 1699,
                    },
                    {
                        title:"Pepperoni",
                        price: 1799,
                    },
                    {
                        title:"Veggie",
                        price: 1899,
                    },
                    {
                        title:"Alan",
                        price: 1099,
                    },                
                ]}
                onDelete={console.log}
            />
        </div>
    );
};