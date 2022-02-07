import React, { useState } from "react";
import { BasketItems } from "./BasketItems";
import { arrayRemoveByIndexWorst, arrayRemoveByIndexDecentV2, arrayRemoveByIndexDecentV1 } from '../../../functions/array';
import { remove } from 'ramda'


export default {
    component: BasketItems,
    title: "Components/BasketItems",
};

export const Default = () => {

    const [items, setItems] = useState([
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
    ]);

    const onDelete = (index) => {
        // setItems(arrayRemoveByIndexDecentV1(items, index))
        setItems(remove(index, 1, items))
    }

    return (
        <div style={{ width: "375px" }}>
            <BasketItems 
                items={items}
                onDelete={onDelete}
            />
        </div>
    );
};