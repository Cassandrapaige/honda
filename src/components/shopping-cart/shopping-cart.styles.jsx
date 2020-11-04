import styled from 'styled-components'
import {colors} from '../../constants/styles'
import {animated} from 'react-spring'

export const OverlayContainer = styled(animated.section)`
position: fixed;
top: 0;
width: 100vw;
height: 100vh;
background: ${colors.overlay(.9)};
z-index: 1999;
cursor: pointer;
`

export const CartContainer = styled.div`
height: 100vh;
position: fixed;
top: 0px;
background: ${colors.secondary};
right: 0;
width: 450px;
z-index: 2000;
overflow: scroll;
`

export const CloseIcon = styled.div`
position: absolute;
top: 20px;
left: 20px;
outline: 1px dotted ${colors.text};
width: 25px;
height: 25px;
cursor: pointer;

&:before, &:after {
    position: absolute;
    content: '';
    background: ${colors.text};
    width: 2px;
    height: 100%;
    left: 50%;
}

&:before {
    transform: translateX(-50%) rotate(45deg);
}

&:after {
    transform: translateX(-50%) rotate(-45deg);
}
`