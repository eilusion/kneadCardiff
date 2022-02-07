import React from "react";
import "./ThisOrThatRadio.css";
import { RadioComp } from "../RadioComp/RadioComp"

type TThisOrThatRadioProps<T extends string> = {
    thisRadio: TTypeRadio<T>;
    onClick: (value: string) => void;
    thatRadio: TTypeRadio<T>;  
    value: T; 
};

type TTypeRadio<T extends string> = {
    value: T;
    label: string;
};

export const ThisOrThatRadio = <T extends string> (props: TThisOrThatRadioProps<T>) => {
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