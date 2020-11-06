import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const DropdownContainer = styled.button`
display: flex;
align-items: center;
border: none;
outline: none;
height: 100%;
padding: 9px 5px;
border-radius: 5px;
background: ${colors.complimentary};
color: ${colors.text};
box-shadow: 0px 2px 2px rgba(18, 18, 18, .8);
transition: all .3s ease;
cursor: pointer;
`

export const Arrows = styled.div`
height: 100%;
width: 30px;
background: blue;
position: relative;

&:before,
&:after {
    position: absolute;
    content: '';
    width: 6px;
    height: 6px;
    transform: rotate(-45deg);
}


&:before {
    top: 0;  
    border-left: 1px solid ${colors.text};
    border-bottom: 1px solid ${colors.text};
}

&:after {
    bottom: 0;   
    border-right: 1px solid ${colors.text};
    border-top: 1px solid ${colors.text};
}
`

export const ImageContainer = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
overflow: hidden;
margin: 0 10px 0 5px;

img {
    width: 100%;
    object-fit: cover;
}
`