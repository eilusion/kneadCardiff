import React, { useState } from 'react';
import "./PaymentBarAndCurtainContainer.css";
import { Icon } from "../../simple/Icon/Icon"
import { Icons } from "../../../icons/Icons";
import { Colors } from "../../../variables/Colors";
import { penceToFormattedGBP } from "../../../functions/penceToFormattedGBP";
import { BigButton } from '../../simple/BigButton/BigButton';
import { OrderForm } from '../../complex/OrderForm/OrderForm';
import { TAppState, TPaymentForm, TOrderDetailsForm } from "../../pages/LandingPage";
import { TPizzaOrder } from '../../complex/PizzaShowcase/PizzaShowcase';
import { FormTitle } from '../../simple/FormTitle/FormTitle';

type TContainerProps = {
    state: TAppState;
    setState: (state: TAppState) => void;
}

export const PaymentBarAndCurtainContainer = (props: TContainerProps) => {

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
        PaymentBarAndCurtainContainer
        PaymentBarAndCurtainContainer__${isOpen ? "open" : "closed"}
        `}>
            <div className="PaymentBarAndCurtainContainer__wrap">

                {/* CHECKOUT BAR FACE */}
                <div 
                    className="PaymentBarAndCurtainContainer__topBarContainer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* PAY/CLOSE BUTTON */}
                    <div 
                        className="PaymentBarAndCurtainContainer__payButton"
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
                    <div className="PaymentBarAndCurtainContainer__pizzaCounter">
                        {props.state.orderedPizzas.length}
                    </div>
                    
                    <Icon
                        IconElement={Icons.PIZZA_ICON}
                        color={Colors.PRIMARY6}
                    />
                    
                    {/* BAR - TOTAL COST */}
                    <div className="PaymentBarAndCurtainContainer__totalPrice">
                        {getTotalOrderPrice()}
                    </div>
                    
                    {/* BAR - BASKET ICON */}
                    <div className="PaymentBarAndCurtainContainer__diningBorder">
                        <Icon
                            IconElement={Icons.BASKET_ICON}
                            color={Colors.PRIMARY6}
                        />
                    </div>
                </div>

                {/* BODY */}
                <div
                    className="PaymentBarAndCurtainContainer__body" 
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
