import React from "react";
import "./DetailsForm.scss";
import { TextInput } from './../TextInput/TextInput';
import { ThisOrThatRadio } from './../ThisOrThatRadio/ThisOrThatRadio'

import { useState } from 'react'

export const DetailsForm = (props) => {

    const [inputText, setInputText] = useState('');

    const [inputText2, setInputText2] = useState('');

    const [inputText3, setInputText3] = useState('');

    const [inputText4, setInputText4] = useState('');

    const [inputText5, setInputText5] = useState('');

    

    return (
        <div className="detailsForm">
            <TextInput 
                label="name"
                onChange={setInputText}
                value={inputText}
            />
            <TextInput 
                label="email"
                onChange={setInputText2}
                value={inputText2}
            />
            <TextInput
                label="number"
                onChange={setInputText3}
                value={inputText3} 
            />
            <ThisOrThatRadio 
                value={'delivery'}
                thisRadio={{
                    label: 'delivery',
                    value: 'delivery'
                }}
                thatRadio={{
                    label: 'collection',
                    value: 'collection'
                }}
                onClick={console.log}
            />
            <TextInput
                label="street & number"
                onChange={setInputText4}
                value={inputText4} 
            />
            <TextInput
                label="postcode"
                onChange={setInputText5}
                value={inputText5}
            />
        </div>
    );
};