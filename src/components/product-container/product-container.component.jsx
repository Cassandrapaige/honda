import React from 'react'

import FilterHeader from '../filter-header/filter-header.component'
import ProductCard from '../product-card/product-card.component'

import {useAppState} from '../../providers/app.provider'

import {ProductGridContainer} from './product-container.styles'
import FadeInContainer from '../fade-in-container/fade-in-container.component'

const ProductContainer = ({...rest}) => {
    const [{inventory}] = useAppState();

    return (
        <div>
            <FilterHeader />
                <ProductGridContainer>
                {
                    inventory.map((product, index) => (
                        <FadeInContainer>
                            <ProductCard product = {product} key = {index} {...rest}/>
                        </FadeInContainer>
                    ))
                }
                </ProductGridContainer>
        </div>
    )
}

export default ProductContainer;