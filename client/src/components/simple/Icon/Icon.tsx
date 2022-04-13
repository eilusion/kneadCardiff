import React from "react";
import { THexColor, TPixelSize, TSVGComponent } from "../../../Types";
import "./Icon.css";

type TIconProps = {
    color: THexColor,
    size?: TPixelSize,
    IconElement: TSVGComponent,
}

export const Icon = (props: TIconProps) => {
    return (
        <props.IconElement 
            className="Icon"
            style={{
                color: props.color as string,
                width: props.size || "24px",
                height: props.size || "24px"
            }}
        />
    );
};
