import React from "react";
import "./TextInput.scss";

export const TextInput = (props) => {
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