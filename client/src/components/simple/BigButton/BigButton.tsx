import React, { MouseEventHandler } from "react";
import "./BigButton.css";

type TBigButtonProps = {
    text: string;
    onClick?: MouseEventHandler;
};

export const BigButton = (props: TBigButtonProps) => {
    return (
        <div 
            className="BigButton" 
            onClick={props.onClick}
        >
            {props.text}
        </div>
    );
};