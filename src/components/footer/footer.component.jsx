import React from 'react'
import Accordion from '../accordion/accordion.component'

import {FooterContainer, FooterNavigation, LinkItem, LinkContainer} from './footer.styles'

const Footer = () => {
    
    return (
        <FooterContainer>
            <img src="http://www.retrojdm.com/Stickers/Emblems/Honda/Civic/Honda.png" alt=""/>
            <FooterNavigation>
                <Accordion 
                    data = {shop_nav} 
                    heading = "The Honda Family"
                />
                <Accordion 
                    data = {about_nav} 
                    heading = "Our Company"
                />
                <Accordion 
                    data = {support_nav} 
                    heading = "Support"
                />
                <div style = {{display: `flex`, flexDirection: `column`, flexGrow: 1}}>
                    <Accordion 
                        data = {terms_nav} 
                        heading = "2020 Honda Canada Inc"
                    />
                    <Accordion 
                        data = {location_nav}
                        heading = "Location"
                    />
                </div>
            </FooterNavigation>
            <LinkContainer>
                {
                    links.map((link, index) => (
                        <LinkItem key = {index}>
                            <i className={link.icon}></i> 
                            <span>{link.label}</span>
                        </LinkItem>
                    ))
                }
            </LinkContainer>

            <div style= {{marginTop: `50px`, textAlign: `center`, width: `100%`, borderTop: `1px solid #c0c0c0`, paddingTop: `30px`}}>
                <span style= {{fontWeight: 200, fontSize: `.9rem`}}>
                    &copy; All information contained herein applies to Canadian vehicles only.
                </span>
            </div>
        </FooterContainer>
    )
}

const shop_nav = [
"Acura",
"Motorcycles",
"ATV",
"SXS",
"Power Equipment",
"Marine",
"Engines"
];

const about_nav = [
"Contact",
"Accessibility",
"Compliance and Ethics",
"Honda in Canada",
"Careers",
"Press Releases"
];

const support_nav = [
"Customer Services",
"FAQ",
"Contact Us",
"Return Policies",
"Warranties",
"Certified Used"
];

const terms_nav = [
"Terms and Conditions",
"Privacy Policy",
"Site Map"
]

const location_nav = [
"Walkerton, ON N0G 2V0"
]

const links = [
    {
        label: "Store Locator", 
        icon: "fas fa-map-marker-alt"
    },
    {
        label: "Pick Up In Store", 
        icon: "fas fa-store-alt"
    },
    {
        label: "Delivery Options", 
        icon: "fas fa-truck"
    },
    {
        label: "Shop Social", 
        icon: "fab fa-instagram"
    },
    {
        label: "Returns", 
        icon: "fas fa-undo"
    },
    {
        label: "Track Order", 
        icon: "fas fa-route"
    }
]

export default Footer;