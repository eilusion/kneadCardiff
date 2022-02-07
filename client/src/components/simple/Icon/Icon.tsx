import React from "react";
import { THexColor, TSVGComponent } from "../../../Types";
import "./Icon.css";

type TIconProps = {
    color: THexColor,
    size?: any,
    IconElement: TSVGComponent,
}

export const Icon = (props: TIconProps) => {
    return (
        <props.IconElement 
            className="Icon"
            viewBox="0 0 24 24"
            style={{
                color: props.color as string,
                width: props.size,
                height: props.size
            }}
        />
    );
};
