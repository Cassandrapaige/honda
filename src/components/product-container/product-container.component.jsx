import React, { Fragment } from 'react'

import FilterHeader from '../filter-header/filter-header.component'
import ProductCard from '../product-card/product-card.component'

import {useAppState} from '../../providers/app.provider'

import {ProductGridContainer} from './product-container.styles'

const ProductContainer = () => {
    const [{filteredStockList, combined}, dispatch] = useAppState();

    console.log(combined)

    return (
        <Fragment>
            <FilterHeader />
                <ProductGridContainer>
                {
                    filteredStockList.map(product => (
                        <ProductCard
                            key = {product.id} 
                            product = {product}/>
                    ))
                }
                </ProductGridContainer>
        </Fragment>
    )
}

export default ProductContainer;