import React, { MouseEventHandler } from "react";
import "./BigButton.css";

type TBigButtonProps = {
    onClick: MouseEventHandler,
    text: string,
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