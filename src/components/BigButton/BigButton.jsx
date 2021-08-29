import React from "react";
import "./BigButton.scss";

export const BigButton = (props) => {
    return (
        <div 
            className="BigButton" 
            onClick={props.onClick}
        >
            {props.text}
        </div>
    );
}