import React, { useState } from "react";
import { TextInput } from "./TextInput";

export default {
    component: TextInput,
    title: "Components/TextInput",
};

export const Default = () => {

    const [inputText, setInputText] = useState('');

    return (
        <div style={{ width: "375px" }}>
            <TextInput
                label="name"
                onChange={setInputText}
                value={inputText}
            />
        </div>
    );
};