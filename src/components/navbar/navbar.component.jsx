import React from 'react'

import {NavbarContainer, Links, NavLink, Logo} from './navbar.styles'

import cartIcon from '../../images/cart.svg'

import {useAppState} from '../../providers/app.provider'

const Navbar = ({...rest}) => {
    const [{hidden}, dispatch] = useAppState();

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
                LINKS.map(link => (
                    <NavLink to = {link.href} key = {link.id}  cta = {link.cta}>{link.text}</NavLink>
                ))
            }
                <img 
                    src = {cartIcon} 
                    alt = "cart icon" 
                    id = "cart-icon" 
                    onClick = {() => toggleCartHidden()}
                />
            </Links>
        </NavbarContainer>
    )
}

const LINKS = [
    {
        id: 0,
        text: 'Build',
        href: '/',
        cta: true
    },
    {
        id: 1,
        text: 'Models',
        href: '/',
        cta: false
    },
    {
        id: 2,
        text: 'Shopping Tools',
        href: '/',
        cta: false
    },
    {
        id: 3,
        text: 'Owners',
        href: '/',
        cta: false
    },
    {
        id: 4,
        text: 'Certified Used',
        href: '/',
        cta: false
    },
]

export default Navbar;