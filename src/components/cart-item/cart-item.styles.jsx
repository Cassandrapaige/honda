import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const CartItemContainer = styled.div`
color: ${colors.text};
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
background: ${colors.primary};
margin: 10px 0;
`

export const GridSectionContainer = styled.div`
display: flex;
flex-direction: column;
padding: 1px;

${({rightAligned}) => rightAligned && css`
    flex-grow: 1;
    align-items: flex-end;
`}

img {
    width: 150px;
    margin: 10px;
}
`

export const QuantityControls = styled.div`
margin-top: 10px;

span {
    border: 1px solid ${colors.text};
    padding: 0 10px;
    border-radius: 5px;
    background: ${colors.secondary};
    color: ${colors.text};
    margin: 0 10px;
}
`

export const ControlButton = styled.button`
border: none;
outline: none;
background: none;
color: ${colors.text};
font-size: 1.2rem;
cursor: pointer;

img {
    width: 23px;
    margin-top: 10px;
}
`


