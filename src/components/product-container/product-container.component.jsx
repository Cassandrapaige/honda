import React from 'react'

import FilterHeader from '../filter-header/filter-header.component'
import ProductCard from '../product-card/product-card.component'

import {useAppState} from '../../providers/app.provider'

import {ProductGridContainer} from './product-container.styles'
import FadeInContainer from '../fade-in-container/fade-in-container.component'

const ProductContainer = () => {
    const [{inventory}] = useAppState();

    return (
        <div>
            <FilterHeader />
                <ProductGridContainer>
                {
                    inventory.map(product => (
                        <FadeInContainer>
                            <ProductCard product = {product}/>
                        </FadeInContainer>
                    ))
                }
                </ProductGridContainer>
        </div>
    )
}

export default ProductContainer;