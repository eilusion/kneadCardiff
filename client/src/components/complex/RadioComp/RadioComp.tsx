import React, { MouseEventHandler } from "react";
import "./RadioComp.css";
import { Icon } from "../../simple/Icon/Icon";
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors"

type TRadioCompProps = {
    onClick: MouseEventHandler,
    label: string,
    isSelected: boolean,
}

export const RadioComp = (props: TRadioCompProps) => {
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