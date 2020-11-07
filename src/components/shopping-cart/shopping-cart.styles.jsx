import styled from 'styled-components'
import {colors} from '../../constants/styles'
import {animated} from 'react-spring'

export const OverlayContainer = styled(animated.div)`
position: fixed;
top: 0;
width: 100vw;
height: 100vh;
background: ${colors.overlay(.9)};
z-index: 1999;
cursor: pointer;
left: 0;
`

export const CartContainer = styled(animated.section)`
height: 100vh;
position: fixed;
top: 0px;
background: ${colors.secondary};
right: 0;
width: 500px;
z-index: 2000;
overflow: scroll;
padding: 50px 10px;
color: ${colors.text};

@media(max-width: 550px) {
    width: 100%;
}
`

export const CartHeader = styled.div`
margin: 20px 0;
padding: 10px 0;
border-bottom: 1px solid ${colors.text};
display: flex;
align-items: center;
justify-content: space-between;
`

export const CartItems = styled.div`
min-height: 50%;
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

export const CartTotalsOverview = styled.section`
padding: 50px 20px 50px 0;

p {
    margin: 5px 0;
}
`
export const OverviewItem = styled.div`
display: flex;
justify-content: space-between;
`