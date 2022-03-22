import React, { MouseEventHandler } from "react";
import "./DetailsForm.css";
import { TextInput } from '../../simple/TextInput/TextInput';
import { ThisOrThatRadio } from '../ThisOrThatRadio/ThisOrThatRadio'
import { TOrderDetailsForm } from "./../../pages/LandingPage";


type TDetailsFormProps = {
    onChange: (form: TOrderDetailsForm) => void;
    form: TOrderDetailsForm,
}

export const DetailsForm = (props: TDetailsFormProps) => {

    const onSingleValueChange = (formField: keyof TOrderDetailsForm, value: TOrderDetailsForm[keyof TOrderDetailsForm]) => {
        // this makes a new copy of the props.form object
        // which is important to avoid issues, because object references can cause issues 
        // google up javascript destruct syntax, read up on it alot and get to know it well.
        // bonus reading Javascript Object References and why they are dangerous
        props.onChange({
            ...props.form,
            [formField]: value
        });
    }

    return (
        <div className="detailsForm">
            <TextInput 
                label="name"
                onChange={(value) => onSingleValueChange("name", value)}
                value={props.form.name}
            />
            <TextInput 
                label="email"
                onChange={(value) => onSingleValueChange("email", value)}
                value={props.form.email}
            />
            <TextInput
                label="number"
                onChange={(value) => onSingleValueChange("number", value)}
                value={props.form.number}
            />
            <ThisOrThatRadio 
                value={props.form.orderType}
                thisRadio={{
                    label: 'delivery',
                    value: 'delivery'
                }}
                thatRadio={{
                    label: 'collection',
                    value: 'collection'
                }}
                onClick={(value) => onSingleValueChange("orderType", value)}
            />
            {props.form.orderType === "delivery" &&
                // this <> sign here means that the components inside it are NOT actually wrapped in an element
                // but are instead siblings to the components above (DOM HIERARCHY wise)
                // we just have to do this because React would break without a wrapping "element" in its syntax
                <>
                    <TextInput
                        label="street & number"
                        value={props.form.streetAndNumber}
                        onChange={(value) => onSingleValueChange("streetAndNumber", value)}
                    />
                    <TextInput
                        label="postcode"
                        value={props.form.postcode}
                        onChange={(value) => onSingleValueChange("postcode", value)}
                    />
                </>
            }
        </div>
    );
};