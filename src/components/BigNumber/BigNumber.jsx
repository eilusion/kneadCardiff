import React from "react";
import "./BigNumber.scss";

export const BigNumber = (props) => {
    return (
        <div
            className="BigNumber"
        >
            {props.text}
        </div>
    )
}