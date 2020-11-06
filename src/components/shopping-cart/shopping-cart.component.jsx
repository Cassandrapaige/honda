import React, { Fragment } from 'react'
import { useTransition, config} from 'react-spring'

import {CartContainer, CloseIcon, OverlayContainer, OverviewItem, CartTotalsOverview} from './shopping-cart.styles'

import CartItem from '../cart-item/cart-item.component'
import Title from '../title/title.component'
import Text from '../text/text.component'

import {useAppState} from '../../providers/app.provider'

const ShoppingCart = () => {
    const [{cartItems, hidden, price}, dispatch] = useAppState();

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

    console.log(cartItems.map(cartItem => cartItem.price.total).reduce((x, y) => parseFloat(x) + parseFloat(y), 0))
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
               <CartTotalsOverview>
                    <OverviewItem>
                        <Text>Subtotal</Text>
                        <Text>$246.00</Text>
                    </OverviewItem>
                    <OverviewItem>
                        <Text>Taxes</Text>
                        <Text>$33.20</Text>
                    </OverviewItem>
                    <OverviewItem>
                        <Text>Estimated Shipping</Text>
                        <Text>FREE</Text>
                    </OverviewItem>
                    <OverviewItem>
                        <Text>Total</Text>
                        <Text>{price}</Text>
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