import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const ScrollingContainer = styled.section`
position: relative;
max-width: 1100px;
margin: auto;
`

export const Arrow = styled.div`
position: absolute;
height: 50px;
width: 50px;
border-top: 2px solid ${colors.text};
border-left: 2px solid ${colors.text};
top: 50%;
cursor: pointer;
transition: all .2s ease;

${({prev}) => prev && css`
    left: -50px;
    transform: translateY(-50%) rotate(-45deg);
`}

${({next}) => next && css`
    right: -50px;
    transform: translateY(-50%) rotate(-225deg);
`}

${({hovered}) => hovered && css`
    border-top: 2px solid ${colors.accent};
    border-left: 2px solid ${colors.accent};
`}

@media(max-width: 680px) {
    display: none;
}
`

export const CarouselInner = styled.div`
position: relative;
margin: 50px 0;
`

export const CarouselTrack = styled.div`
display: grid;
grid-template-columns: ${({slideNum, inView}) => 
    `repeat(${slideNum}, calc((100% / ${inView}) - 20px))`};
gap: 30px;
-webkit-overflow-scrolling: touch;
overflow-x: scroll;
overflow-y: hidden;
scrollbar-width: none;
padding: 20px 0;
scroll-snap-type: x mandatory;

@media(max-width: 900px) {
    grid-template-columns: 1fr;
}
`