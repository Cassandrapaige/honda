import React, { Fragment } from 'react'
import { useTransition, config} from 'react-spring'

import {CartContainer,
        CartHeader, 
        CloseIcon, 
        OverlayContainer, 
        OverviewItem, 
        CartTotalsOverview,
        CartItems
    } from './shopping-cart.styles'

import CartItem from '../cart-item/cart-item.component'
import Text from '../text/text.component'

import {useAppState} from '../../providers/app.provider'
import {getLocaleNum} from '../../utils';

const ShoppingCart = () => {
    const [{cartItems, 
            hidden, 
            cartSubtotal,
            exchangeRate,
            currency,
            quantity
        }, dispatch] = useAppState();

    const transitions = useTransition(!hidden, null, {
        config: config.default,
        from: { transform:'translateX(100%)'},
        enter: { transform:'translateX(0px)'},
        leave: { transform:'translateX(100%)'}
    })

    const toggleCartHidden = () => {
        dispatch({
            type: "TOGGLE_CART_HIDDEN"
        })
    }

    return transitions.map(({ item, props }) => item && (
        <Fragment>
            <CartContainer style= {props} >
                <CartHeader>
                    <h2>My Cart [{quantity}]</h2>
                </CartHeader>
               <CloseIcon  onClick = {() => toggleCartHidden()}/>
               <CartItems>
                {cartItems.length !== 0 ? (cartItems.map(cartItem => (
                    <CartItem cartItem = {cartItem} /> ))
                ): "You haven't added anything to your cart yet.."}
               </CartItems>
               <CartTotalsOverview>
                    <OverviewItem>
                        <Text>Subtotal</Text>
                        <Text>{getLocaleNum(cartSubtotal, exchangeRate, currency)}</Text>
                    </OverviewItem>
                    <OverviewItem>
                        <Text>Taxes</Text>
                        <Text>{getLocaleNum((cartSubtotal * .13), exchangeRate, currency)}</Text>
                    </OverviewItem>
                    <OverviewItem>
                        <Text>Estimated Shipping</Text>
                        <Text>{cartItems.length !== 0 ? 'FREE' : 'N/A'}</Text>
                    </OverviewItem>
                    <OverviewItem>
                        <Text>Total</Text>
                        <Text>{getLocaleNum((cartSubtotal * .13) + cartSubtotal, exchangeRate, currency)}</Text>
                    </OverviewItem>
               </CartTotalsOverview>
            </CartContainer>
            <OverlayContainer 
                style= {props} 
                onClick = {() => toggleCartHidden()} 
            />
        </Fragment>
    ))
}

export default ShoppingCart;