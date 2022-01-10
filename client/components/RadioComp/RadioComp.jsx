import React from "react";
import "./RadioComp.scss";
import { Icon } from "./../Icon/Icon";
import { Icons } from "./../../icons/Icons";
import { Colors } from "./../../variables/Colors"

export const RadioComp = (props) => {
    return (
        <div className="RadioComp" onClick={props.onClick}>
            <div className="RadioComp__label">
                {props.label}
            </div>
            <div className="RadioComp__radioIcon">
                <Icon 
                    IconElement={
                        props.isSelected ?
                            Icons.RADIO_CHECKED : 
                            Icons.RADIO_UNCHECKED
                    }
                    color={Colors.NEUTRAL2}
                />
            </div>
        </div>
    );
};