import React from "react";
import "./FormTitle.scss";

export const FormTitle = (props) => {
    return (
        <div className="formTitle">
            <div className="formTitle__text">{props.text}</div>
        </div>
    )
}