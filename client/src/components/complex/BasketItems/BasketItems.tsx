import React from "react";
import "./BasketItems.css";
import { MenuItem } from '../MenuItem/MenuItem';

type TBasketItemsProps = {
    items: Array<TBasketItem>;
    onDelete: (index: number) => void;
};

type TBasketItem = {
    title: string;
    price: number;
};

export const BasketItems = (props: TBasketItemsProps) => {
    return (
        <div className="BasketItems">
            {props.items.map((item, index) => (
                <MenuItem
                    key={index}
                    title={item.title}
                    price={item.price}
                    onClick={() => props.onDelete(index)}
                />
            ))}
        </div>
    );
};