import React from 'react'
import { useTransition, config} from 'react-spring'

import {CartContainer, CloseIcon, OverlayContainer} from './shopping-cart.styles'

const ShoppingCart = ({isOpen, handleClick}) => {
    const transitions = useTransition(isOpen, null, {
        config: config.default,
        from: { transform:'translateX(100%)'},
        enter: { transform:'translateX(0px)'},
        leave: { transform:'translateX(100%)'}
    })

    return transitions.map(({ item, props }) => item && (
            <OverlayContainer style= {props} onClick = {handleClick}>
                <CartContainer>
                    <CloseIcon  onClick = {handleClick}/>
                </CartContainer>
            </OverlayContainer>
    ))
}

export default ShoppingCart;