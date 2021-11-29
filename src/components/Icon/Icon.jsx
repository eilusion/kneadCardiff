import React from "react";
import "./Icon.scss";

export const Icon = (props) => {
    return (
        <props.IconElement 
            className="Icon"
            viewBox="0 0 24 24"
            style={{
                color: props.color,
                width: props.size,
                height: props.size
            }}
        />
    );
};
