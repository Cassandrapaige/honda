import React from 'react'

import {NavbarContainer, 
        Links, 
        NavLink, 
        Logo, 
        CartIcon,
        Counter
    } from './navbar.styles'

import cartIcon from '../../images/cart.svg'

import {useAppState} from '../../providers/app.provider'
import CurrencyDropdown from '../currency-dropdown/currency-dropdown.component'

const Navbar = ({...rest}) => {
    const [{quantity}, dispatch] = useAppState();
    const activeLink = 0;

    const toggleCartHidden = () => {
        dispatch({
            type: "TOGGLE_CART_HIDDEN"
        })
    }

    return (
        <NavbarContainer {...rest}>
            <Logo>
                <img src="http://vignette1.wikia.nocookie.net/logopedia/images/2/21/Honda_3.png/revision/latest?cb=20150110002727" alt="logo"/>
            </Logo>
            <Links>
            {
                LINKS.map((link, index) => (
                    <NavLink to = {link.href} key = {link.id}  cta = {index === activeLink ? "true" : undefined} {...rest}>{link.text}</NavLink>
                ))
            }
                <CurrencyDropdown/>
                <CartIcon onClick = {() => toggleCartHidden()}>
                    <img src = {cartIcon} 
                    alt = "cart icon" />
                    <Counter>{quantity}</Counter>
                </CartIcon>
            </Links>
        </NavbarContainer>
    )
}

const LINKS = [
    {
        id: 0,
        text: 'Build',
        href: '/',
    },
    {
        id: 1,
        text: 'Models',
        href: '/',
    },
    {
        id: 2,
        text: 'Shopping Tools',
        href: '/',
    },
    {
        id: 3,
        text: 'Owners',
        href: '/',
    },
    {
        id: 4,
        text: 'Certified Used',
        href: '/',
    },
]

export default Navbar;