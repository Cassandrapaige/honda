import React from 'react'

import {FilterHeaderContainer, FilterMenuItem} from './filter-header.styles'

import {useAppState} from '../../providers/app.provider'

const FilterHeader = () => {
    const [{}, dispatch] = useAppState();

    return (
        <FilterHeaderContainer>
            {
                FILTER_ITEMS.map((item, index) => (
                    <FilterMenuItem 
                        key = {index} 
                        active = {index === 0}
                        onClick = {() => dispatch({ 
                            type: "FILTER_STOCK_BY_CATEGORY", 
                            filter: getFilterItem(item) })}
                    >{item}</FilterMenuItem>
                ))
            }
        </FilterHeaderContainer>
    )
}


const getFilterItem = (item) => {
    switch(item) {
        case "Cars": 
            return "car";
        case "Trucks & Minivans": 
            return "trucks/minivan";
        case "Hybrid & Electric":
            return "hybrid/electric";
        case "All":
            return "";
        default: 
            return "";
    }
}

const FILTER_ITEMS = ["All", "Cars", "Trucks & Minivans", "Hybrid & Electric"]

export default FilterHeader;