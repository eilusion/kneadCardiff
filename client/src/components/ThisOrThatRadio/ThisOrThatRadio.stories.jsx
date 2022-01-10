import React from "react";
import { ThisOrThatRadio } from "./ThisOrThatRadio";

export default {
    component: ThisOrThatRadio,
    title: "Components/ThisOrThatRadio",
};

export const Default = () => {
    return (
        <div style={{ width: "375px" }}>
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
        </div>
    );
};