import React, {useState} from 'react'

import {ProductCardContainer,
        ProductImage, 
        ProductOverview, 
        CarModelTitle, 
        PricingContainer,
        AddToCartBtn
    } from './product-card.styles'

import OverlayContainer from '../overlay-container/overlay-container.component'

const ProductCard = ({currency, product}) => {
    return (
        <ProductCardContainer>
            <ProductImage>
                <img src={product.image} alt={product.model}/>
                <OverlayContainer />
            </ProductImage>

            <ProductOverview>
                <CarModelTitle>{product.year} {product.model}</CarModelTitle>

                <PricingContainer>
                    <span>Weekly Lease</span>
                    <h3>{currency}{product.price.weekly}</h3>
                </PricingContainer>
                <PricingContainer>
                    <span>Selling Price</span>
                    <h3>{currency}{product.price.total}</h3>
                </PricingContainer>
            </ProductOverview>
                <AddToCartBtn>Add to Cart</AddToCartBtn>
        </ProductCardContainer>
    )
}

export default ProductCard;