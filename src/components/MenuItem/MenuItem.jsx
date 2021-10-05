import React from "react";
import "./MenuItem.scss";

export const MenuItem = (props) => {
    return (
        <div className="MenuItem">
            <div className="crossIcon">
                <props.IconElement/>
            </div>
            <div className="MenuItem__itemTitle">{props.itemTitle}</div>
            <div className="MenuItem__priceWrapper">
                <div className="MenuItem__itemPrice">{props.itemPrice}</div>
            </div>
        </div>
        
    )
}