import React, { useState } from 'react'
import {useSpring, config} from 'react-spring'

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
    const [isVisible, setIsVisible] = useState(false);
    const money = useCurrency();
    const [{currency}, dispatch] = useAppState();

    const changeCurrency = type => {
        setIsVisible(false);
        dispatch({
            type: "CHANGE_CURRENCY",
            rate: money[type.currency],
            currency: type.currency
        });
    }

    const props = useSpring({
        to: {
            opacity: isVisible ? 1 : 0, 
            display: isVisible ? 'block' : 'none'
        },
        config: {
            config: config.default,
            duration: 200
        }
    })

    return (
        <div style= {{position: `relative`}}>
            <DropdownButton handleClick = {() => setIsVisible(!isVisible)}>
                <ImageContainer>
                    <img src={_CURRENCY_DATA[currency].flag} alt="national flag" />
                </ImageContainer>
                <Text>{currency} <span>Currency</span></Text>
            </DropdownButton>
            <DropdownListContainer style= {props}>
                <DropdownList>
                    {
                        Object.keys(_CURRENCY_DATA).map((type, index) => {
                            let item = _CURRENCY_DATA[type];
                            return (
                                <ListItem key = {index} onClick = {() => changeCurrency(item)}>
                                <ImageContainer>
                                    <img src={item.flag} alt={`${item.nationality} flag`} />
                                </ImageContainer>
                                    {item.currency}
                                </ListItem>
                            )
                        })
                    }
                </DropdownList>
            </DropdownListContainer>
        </div>
    )
}

const _CURRENCY_DATA = {
    "CAD": {
        currency: "CAD",
        flag: "https://cdn.countryflags.com/thumbs/canada/flag-round-500.png",
        nationality: "Canadian"
    },
    "USD": {
        currency: "USD",
        flag: "https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-500.png",
        nationality: "American"
    },
    "GBP": {
        currency: "GBP",
        flag: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-500.png",
        nationality: "British"
    },
    "EUR": {
        currency: "EUR",
        flag: "https://cdn.countryflags.com/thumbs/european-union/flag-round-500.png",
        nationality: "European"
    }
}

export default CurrencyDropdown;