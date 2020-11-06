import React, { useState } from 'react'

import {
    ImageContainer,
    DropdownListContainer,
    DropdownList,
    ListItem
} from './currency-dropdown.styles'

import Text from '../text/text.component'
import DropdownButton from '../dropdown-button/dropdown-button.component'

import {useCurrency} from '../../hooks/useCurrency';
import {useAppState} from '../../providers/app.provider'

const CurrencyDropdown = () => {
    let canadian_flag = 'https://cdn.countryflags.com/thumbs/canada/flag-round-500.png'
    const money = useCurrency();
    const [image, setImage] = useState(canadian_flag)
    const [{currency}, dispatch] = useAppState();

    const changeCurrency = type => {
        setImage(type.flag);
        dispatch({
            type: "CHANGE_CURRENCY",
            rate: money[type.currency],
            currency: type.currency
        });
    }

    return (
        <div style= {{position: `relative`}}>
            <DropdownButton>
                <ImageContainer>
                    <img src={image} alt="national flag" />
                </ImageContainer>
                <Text>{currency} Currency</Text>
            </DropdownButton>
            <DropdownListContainer>
                <DropdownList>
                    {CURRENCY_DATA.map(currency => (
                        <ListItem onClick = {() => changeCurrency(currency)}>
                            {currency.nationality} {currency.currency}
                        </ListItem>
                    ))}
                </DropdownList>
            </DropdownListContainer>
        </div>
    )
}

const CURRENCY_DATA = [
    {
        currency: "CAD",
        flag: "https://cdn.countryflags.com/thumbs/canada/flag-round-500.png",
        nationality: "Canadian"
    },
    {
        currency: "USD",
        flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-500.png",
        nationality: "American"
    },
    {
        currency: "GBP",
        flag: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-500.png",
        nationality: "British"
    },
    {
        currency: "EUR",
        flag: "https://cdn.countryflags.com/thumbs/european-union/flag-round-500.png",
        nationality: "European"
    }
]

export default CurrencyDropdown;