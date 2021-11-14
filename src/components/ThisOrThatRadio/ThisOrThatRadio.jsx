import React from "react";
import "./ThisOrThatRadio.scss";
import { RadioComp } from "./../RadioComp/RadioComp"

export const ThisOrThatRadio = (props) => {
    return (
        <div className="ThisOrThatRadio">
            <RadioComp
                label={props.thisRadio.label}
                isSelected={props.thisRadio.value === props.value}
                onClick={() => props.onClick(props.thisRadio.value)}
            />
            <div className="ThisOrThatRadio__or">or</div>
            <RadioComp 
                label={props.thatRadio.label}
                isSelected={props.thatRadio.value === props.value}
                onClick={() => props.onClick(props.thatRadio.value)}
            />
        </div>
    );
};