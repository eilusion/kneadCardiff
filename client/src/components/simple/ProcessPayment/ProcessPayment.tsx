import React from "react";
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors";
import { Icon } from "../Icon/Icon";
import "./ProcessPayment.css";

type TProcessPaymentProps = {

}

export const ProcessPayment = (props: TProcessPaymentProps) => {
    return (
        <div className="ProcessPayment">
            <Icon 
                IconElement={Icons.HOUR_GLASS}
                color={Colors.PRIMARY8}
                size="40px"
            />
            <h1 className="ProcessPayment__text">please wait while we process your payment!</h1>
        </div>
    )
}