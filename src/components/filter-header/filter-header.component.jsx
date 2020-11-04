import React from 'react'

import {FilterHeaderContainer, FilterMenuItem} from './filter-header.styles'

const FilterHeader = () => {
    return (
        <FilterHeaderContainer>
            {
                FILTER_ITEMS.map((item, index) => (
                    <FilterMenuItem key = {index} active = {index === 0}>{item}</FilterMenuItem>
                ))
            }
        </FilterHeaderContainer>
    )
}

const FILTER_ITEMS = ["All", "Cars", "Trucks & Minivans", "Hybrid & Electric"]

export default FilterHeader;