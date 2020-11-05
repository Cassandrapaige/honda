import React, { Fragment } from 'react'
import { useTransition, config} from 'react-spring'

import {CartContainer, CloseIcon, OverlayContainer} from './shopping-cart.styles'

import CartItem from '../cart-item/cart-item.component'
import Title from '../title/title.component'

import {useAppState} from '../../providers/app.provider'

const ShoppingCart = () => {
    const [{cartItems, hidden}, dispatch] = useAppState();

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
                <Title>My Cart</Title>
               <CloseIcon  onClick = {() => toggleCartHidden()}/>
               {
                cartItems.map(cartItem => (
                    <CartItem cartItem = {cartItem} />
                ))
               }
            </CartContainer>
            <OverlayContainer 
                style= {props} 
                onClick = {() => toggleCartHidden()} 
            />
        </Fragment>
    ))
}

export default ShoppingCart;