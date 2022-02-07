import React from "react";
import "./FormTitle.css";

type TFormTitleProps = {
    children: string,
}

export const FormTitle = (props: TFormTitleProps) => {
    return (
        <div className="formTitle">{props.children}</div>
    )
}