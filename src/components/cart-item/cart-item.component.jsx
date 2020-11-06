import React from 'react'

import {CartItemContainer, 
        GridSectionContainer, 
        QuantityControls,
        ControlButton
    } from './cart-item.styles'

import trash from '../../images/trash.svg'

import {useAppState} from '../../providers/app.provider'

import {getLocaleNum} from '../../utils'

import Text from '../text/text.component'

const CartItem = ({cartItem}) => {
    const [{currency, exchangeRate}, dispatch] = useAppState();

    const {
        image,
        model,
        quantity,
        cartTotal,
    } = cartItem;

    const increaseQuantity = item => {
        dispatch({
            type: "ADD_TO_CART",
            payload: item
        })
    }

    const decreaseQuantity = item => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: item
        })
    }

    const removeItem = item => {
        dispatch({
            type: "CLEAR_FROM_CART",
            payload: item
        })
    }

    return (
        <CartItemContainer>
            <GridSectionContainer>
                <img src = {image} alt = {model} />
            </GridSectionContainer>
            <GridSectionContainer>
                <Text>{model}</Text>
                <QuantityControls>
                    <ControlButton onClick = {() => decreaseQuantity(cartItem)}> -  </ControlButton>
                    <span>{quantity}</span>
                    <ControlButton onClick = {() => increaseQuantity(cartItem)}> + </ControlButton>
                </QuantityControls>
            </GridSectionContainer>
            <GridSectionContainer rightAligned = "true">
                <span>{getLocaleNum(cartTotal, exchangeRate, currency)}</span>
                <ControlButton onClick = {() => removeItem(cartItem)}> <img src={trash} alt="move to trash icon" /> </ControlButton>
            </GridSectionContainer>
        </CartItemContainer>
    )
}

export default CartItem;