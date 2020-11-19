import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const AccordionContainer = styled.div`
flex-grow: 1;

@media(max-width: 600px) {
    width: 100%;
}
`

export const ListHeader = styled.h3`
padding: 3px;
border-bottom: 1px solid ${colors.text};
margin-bottom: 10px;
`

export const ListContainer = styled.ul`
list-style-type: none;

// @media(max-width: 600px) {
//     display: none;
// }
`

export const ListItem = styled.li`
cursor: pointer;
padding: 3px;
transition: all .5s ease;
font-weight: 200;

&:hover {
background: ${colors.complimentary};
}
`