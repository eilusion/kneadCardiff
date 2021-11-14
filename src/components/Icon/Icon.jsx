import React from "react";
import "./Icon.scss";

export const Icon = (props) => {
    return (
        <props.IconElement 
            className="Icon"
            style={{
                color: props.color
            }}
        />
    );
};
