import React from "react";
import "./PaymentForm.scss";
import { TextInput } from './../TextInput/TextInput';
import { useState } from 'react';

export const PaymentForm = (props) => {

    const [inputText1, setInputText1] = useState('')
    const [inputText2, setInputText2] = useState('')
    const [inputText3, setInputText3] = useState('')
    const [inputText4, setInputText4] = useState('')

    return (
        <div className="PaymentForm">
            <TextInput 
                label="card number"
                onChange={setInputText1}
                value={inputText1}
            />
            <div className="PaymentForm__middleForm">
                <div className="PaymentForm__MMYY">
                    <TextInput 
                        label="mm/yy"
                        onChange={setInputText2}
                        value={inputText2}
                    />
                </div>
                <div className="PaymentForm__CVC">
                    <TextInput
                        label="cvc"
                        onChange={setInputText3}
                        value={inputText3}
                    />
                </div>
            </div>
            <TextInput 
                label="postcode"
                onChange={setInputText4}
                value={inputText4}
            />
        </div>
    );
};