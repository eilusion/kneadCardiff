import React from "react";
import "./BasketItems.scss";
import { MenuItem } from './../MenuItem/MenuItem';

export const BasketItems = (props) => {
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