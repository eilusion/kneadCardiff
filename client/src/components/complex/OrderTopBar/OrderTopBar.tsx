import React, { MouseEventHandler, useState } from 'react';
import { pipe } from "ramda";
import "./OrderTopBar.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors";
import { penceToFormattedGBP } from "../../../functions/penceToFormattedGBP";
import { BigButton } from '../../simple/BigButton/BigButton';
import { OrderForm } from '../../complex/OrderForm/OrderForm';
import { DetailsForm } from '../DetailsForm/DetailsForm';
import { TAppState, TPaymentForm, TOrderDetailsForm } from "./../../pages/LandingPage";
import { TPizzaOrder } from '../PizzaShowcase/PizzaShowcase';
import { MainHeader } from '../MainHeader/MainHeader';
import { CheckoutHeader } from '../CheckoutHeader/CheckoutHeader';
import { FormTitle } from '../../simple/FormTitle/FormTitle';

type TContainerProps = {
    state: TAppState;
    setState: (state: TAppState) => void;
}

export const OrderTopBar = (props: TContainerProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const getTotalOrderPrice = () =>
        penceToFormattedGBP(
            props.state.orderedPizzas.reduce(
                (total, pizza) => total + pizza.price,
                0
            )
        )
    ;

    // HINT: these are your callbacks for the order form but they MUST update the state correctly
    const onSetOrderDetailsForm = (form: TOrderDetailsForm): void => {
        props.setState({
            ...props.state,
            detailsForm: form
        });
    };

    const onSetPaymentForm = (form: TPaymentForm): void => {
        props.setState({
            ...props.state,
            paymentForm: form
        });
    };

    const onRemoveItem = (removedPizzaIndex: Number): void => {
        
        let updatedOrderedPizzas: Array<TPizzaOrder> = props.state.orderedPizzas.filter(((pizza, pizzaIndex) => pizzaIndex !== removedPizzaIndex));

        props.setState({
            ...props.state,
            orderedPizzas: updatedOrderedPizzas
        });
    };

    return (
        <div className={`
            OrderTopBar
            OrderTopBar__${isOpen ? "open" : "closed"}
        `}>
            <div className="OrderTopBar__wrap">

                {/* CHECKOUT BAR FACE */}
                <div 
                    className="OrderTopBar__topBarContainer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* PAY/CLOSE BUTTON */}
                    <div 
                        className="OrderTopBar__payButton"
                    >
                        {!isOpen && props.state.orderedPizzas.length > 0 &&
                            <BigButton text='pay'/>
                        }
                        {isOpen && 
                            <Icon 
                                IconElement={Icons.X_ICON}
                                color={Colors.PRIMARY6}
                            />
                        }
                    </div>
                    
                    {/* BAR - PIZZA COUNT */}
                    <div className="OrderTopBar__pizzaCounter">
                        {props.state.orderedPizzas.length}
                    </div>
                    
                    <Icon
                        IconElement={Icons.PIZZA_ICON}
                        color={Colors.PRIMARY6}
                    />
                    
                    {/* BAR - TOTAL COST */}
                    <div className="OrderTopBar__totalPrice">
                        {getTotalOrderPrice()}
                    </div>
                    
                    {/* BAR - BASKET ICON */}
                    <div className="OrderTopBar__diningBorder">
                        <Icon
                            IconElement={Icons.BASKET_ICON}
                            color={Colors.PRIMARY6}
                        />
                    </div>
                </div>

                {/* BODY */}
                <div
                    className="OrderTopBar__body" 
                    style={{ height: "500px"}}
                >
                    {props.state.orderedPizzas.length > 0 &&
                        <OrderForm
                            paymentForm={props.state.paymentForm}
                            detailsForm={props.state.detailsForm}
                            orderedPizzas={props.state.orderedPizzas}
                            onSetOrderDetailsForm={onSetOrderDetailsForm}
                            onSetPaymentForm={onSetPaymentForm}
                            onRemoveItem={onRemoveItem}
                        />
                    }
                    {props.state.orderedPizzas.length === 0 &&
                        <FormTitle children='your basket is currently empty! :('/>
                    }
                </div>
            </div>
        </div>
    );
};
