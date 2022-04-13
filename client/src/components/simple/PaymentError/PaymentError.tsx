import React from "react";
import "./PaymentError.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors"

type TPaymentErrorProps = {

}

export const PaymentError = (props: TPaymentErrorProps) => {
    return (
        <div className="PaymentError">
            <Icon
                IconElement={Icons.SAD_FACE}
                color={Colors.NEUTRALINK}
            />
            <div className="PaymentError__textBox">
                <div className="PaymentError__text1">oops.. payment has failed!</div>
                <div className="PaymentError__text2">please try again!</div>
            </div>
            <Icon
                IconElement={Icons.PAYMENT_FAIL}
                color={Colors.NEUTRALINK}
            />
        </div>
    );
};
