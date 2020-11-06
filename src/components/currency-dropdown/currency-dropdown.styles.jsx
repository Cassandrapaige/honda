import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const ImageContainer = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
overflow: hidden;
margin: 0 10px 0 5px;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

export const DropdownListContainer = styled.div`
position: absolute;
background: ${colors.complimentary};
border-radius: 5px;
width: 100%;
top: 110%;
right: 0;
box-shadow: 0px 2px 4px rgba(19, 19, 19,0.08),0px 4px 8px rgba(19, 19, 19,0.16);
`

export const DropdownList = styled.ul`
list-style-type: none;
color: ${colors.text};
padding: 10px 5px;
`

export const ListItem = styled.li`
font-weight: 200;
padding: 5px;
cursor: pointer;
transition: all .2s ease;

&:hover {
    background: ${colors.text};
    color: ${colors.primary};
}
`