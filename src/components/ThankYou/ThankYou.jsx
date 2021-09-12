import React from "react";
import "./ThankYou.scss";
import { BigNumber } from "./../BigNumber/BigNumber"

export const ThankYou = (props) => {
    return (
        <div className="ThankYou">
            <h2 className="ThankYou__text">{props.thanksText}</h2>
            <h3 className="ThankYou__orderText">{props.orderText}</h3>
            <div className="ThankYou__numberWrap">
                <BigNumber
                text={props.numberText}
                />
            </div>
            <div className="ThankYou__deliveryTitle">{props.deliveryTitle}</div>
            <div className="ThankYou__deliveryAddress">{props.deliveryAddress.streetAddress}</div>
            <div className="ThankYou__deliveryAddress">{props.deliveryAddress.postcode}</div>
            <div className="ThankYou__estimatedTime">{props.estimatedTime}</div>
        </div>
    )
}