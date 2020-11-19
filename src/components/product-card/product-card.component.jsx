import React from 'react'

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
import useObserver from '../../hooks/useObserver'

import {getLocaleNum} from '../../utils'

const ProductCard = ({product}) => {
    const [isVisible, domRef] = useObserver();

    const [{currency, exchangeRate}, dispatch] = useAppState();

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
                <img src={isVisible && product.image} ref={domRef} alt={product.model}/>
                <OverlayContainer />
            </ProductImage>

            <ProductOverview>
                <CarModelTitle>{product.year} {product.model}</CarModelTitle>

                <PricingContainer>
                    <Text>Weekly Lease</Text>
                    <Text>{getLocaleNum(product.price.weekly, exchangeRate, currency)}</Text>
                </PricingContainer>
                <PricingContainer>
                    <Text>Selling Price</Text>
                    <Text>{getLocaleNum(product.price.total, exchangeRate, currency)}</Text>
                </PricingContainer>
            </ProductOverview>
                <AddToCartBtn onClick = {() => addToCart(product)}>Add to Cart</AddToCartBtn>
        </ProductCardContainer>
    )
}

export default ProductCard;