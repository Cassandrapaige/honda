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
box-shadow: 0px 2px 4px rgba(19, 19, 19,0.08),0px 4px 8px rgba(19, 19, 19,0.16);
transition: all .3s ease;
cursor: pointer;
margin-left: 15px;
position: relative;
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