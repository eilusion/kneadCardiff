import React from "react";
import "./BigNumber.css";

type TBigNumberProps = {
    text: string,
}

export const BigNumber = (props: TBigNumberProps) => {
    return (
        <div
            className="BigNumber"
        >
            {props.text}
        </div>
    );
};