import React, {Fragment, useRef} from 'react'

import {FilterHeaderContainer, FilterMenuItem} from './filter-header.styles'

import {useAppState} from '../../providers/app.provider'

const FilterHeader = () => {
    const [{active}, dispatch] = useAppState();

    const startOfList = useRef(null);

    const handleClick = item => {

        // make sure the list remains at top of container when filtering 
        startOfList.current.scrollIntoView({ 
            behavior: 'smooth'
        });
        dispatch({ 
            type: "FILTER_STOCK_BY_CATEGORY", 
            category: getFilterItem(item)[1],
            active: getFilterItem(item)[0] 
        });
    }

    return (
        <Fragment>
            <div ref = {startOfList}></div>
            <FilterHeaderContainer>
                {
                FILTER_ITEMS.map((item, index) => (
                    <FilterMenuItem 
                        key = {index} 
                        active = {index === active}
                        onClick = {() => handleClick(item)}>{item}</FilterMenuItem>
                    ))
                }
            </FilterHeaderContainer>
        </Fragment>
    )
}

const getFilterItem = (item) => {
    switch(item) {
        case "All":
            return [0, ""];
        case "Cars": 
            return [1, "car"];
        case "Trucks & Minivans": 
            return [2, "trucks/minivan"];
        case "Hybrid & Electric":
            return [3, "hybrid/electric"];
        default: 
            return "";
    }
}

const FILTER_ITEMS = ["All", "Cars", "Trucks & Minivans", "Hybrid & Electric"]

export default FilterHeader;