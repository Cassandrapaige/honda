import React from 'react'

import {NavbarContainer, Links, NavLink, Logo} from './navbar.styles'

const Navbar = ({...rest}) => {
    return (
        <NavbarContainer {...rest}>
            <Logo>
                <img src="http://vignette1.wikia.nocookie.net/logopedia/images/2/21/Honda_3.png/revision/latest?cb=20150110002727" alt="logo"/>
            </Logo>
            <Links>
            {
                LINKS.map(link => (
                    <NavLink to = {link.href} cta = {link.cta}>{link.text}</NavLink>
                ))
            }
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