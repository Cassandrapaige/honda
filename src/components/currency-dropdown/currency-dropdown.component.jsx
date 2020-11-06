import React from 'react'

import {
    DropdownContainer, 
    Arrows, 
    ImageContainer
} from './currency-dropdown.styles'

import Text from '../text/text.component'

const CurrencyDropdown = () => {
    return (
        <DropdownContainer>
            <ImageContainer>
                <img src="https://cdn.countryflags.com/thumbs/canada/flag-round-500.png" alt=""/>
            </ImageContainer>
            <Text>CAD Currency</Text>
            <Arrows/>
        </DropdownContainer>
    )
}

export default CurrencyDropdown;