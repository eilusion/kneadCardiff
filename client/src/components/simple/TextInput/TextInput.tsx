import React, { MouseEventHandler } from "react";
import "./TextInput.css";

type TTextInputProps = {
    value: any,
    label: string,
    onChange: any,
}

export const TextInput = (props: TTextInputProps) => {
    return (
        <input 
            className="TextInput" 
            type="text"
            value={props.value} 
            placeholder={props.label}
            onChange={ (event) => props.onChange(event.target.value) }
        />
    );
};