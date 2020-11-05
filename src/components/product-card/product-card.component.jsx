import React, {useState} from 'react'

import {ProductCardContainer,
        ProductImage, 
        ProductOverview, 
        CarModelTitle, 
        PricingContainer,
        AddToCartBtn
    } from './product-card.styles'

import OverlayContainer from '../overlay-container/overlay-container.component'
import Text from '../text/text.component'

import {useAppState} from '../../providers/app.provider'

const ProductCard = ({currency, product}) => {
    const [{}, dispatch] = useAppState();

    const addToCart = item => {
        dispatch({
            type: "ADD_TO_CART",
            payload: item
        });
        dispatch({
            type: "TOGGLE_CART_HIDDEN"
        });
    }

    return (
        <ProductCardContainer>
            <ProductImage>
                <img src={product.image} alt={product.model}/>
                <OverlayContainer />
            </ProductImage>

            <ProductOverview>
                <CarModelTitle>{product.year} {product.model}</CarModelTitle>

                <PricingContainer>
                    <Text>Weekly Lease</Text>
                    <Text>{currency}{product.price.weekly}</Text>
                </PricingContainer>
                <PricingContainer>
                    <Text>Selling Price</Text>
                    <Text>{currency}{product.price.total}</Text>
                </PricingContainer>
            </ProductOverview>
                <AddToCartBtn onClick = {() => addToCart(product)}>Add to Cart</AddToCartBtn>
        </ProductCardContainer>
    )
}

export default ProductCard;