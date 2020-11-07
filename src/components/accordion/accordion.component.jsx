import React from 'react'

import {AccordionContainer,
        ListContainer,
        ListItem,
        ListHeader
        } from './accordion.styles'


const Accordion = ({heading, data}) => {
    return (
        <AccordionContainer>
            <ListHeader>
                {heading}
            </ListHeader>
            <ListContainer>
                {data.map((item, index) => (
                    <ListItem key = {index}>{item}</ListItem>
                ))}
            </ListContainer>
        </AccordionContainer>
    )
}

export default Accordion;