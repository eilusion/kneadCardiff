import React from "react";
import "./ThankYou.css";
import { BigNumber } from "../BigNumber/BigNumber"

type TThankYouProps = {
    thanksText: string,
    orderText: string,
    numberText: string,
    deliveryTitle: string,
    deliveryAddress: {    
        streetAddress: string,
        postcode: string,
    },
    estimatedTime: string,
};

export const ThankYou = (props: TThankYouProps) => {
    return (
        <div className="ThankYou">
            <h2 className="ThankYou__text">{props.thanksText}</h2>
            <h3 className="ThankYou__orderText">{props.orderText}</h3>
                <div className="ThankYou__numberWrap">
                    <BigNumber
                        text={props.numberText}
                    />
                </div>
            <div className="ThankYou__deliveryContainer">   
                <div className="ThankYou__deliveryBox">   
                    <div className="ThankYou__deliveryTitle">{props.deliveryTitle}</div>
                    <div className="ThankYou__deliveryAddress">{props.deliveryAddress.streetAddress}</div>
                    <div className="ThankYou__deliveryAddress">{props.deliveryAddress.postcode}</div>
                </div>
            </div>
            <div className="ThankYou__estimatedTime">{props.estimatedTime}</div>
        </div>
    )
}