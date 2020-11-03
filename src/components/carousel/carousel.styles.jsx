import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const CarousleWrapper = styled.section`
position: relative;
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
`

export const CarouselInner = styled.div`
position: relative;
overflow: hidden;
margin: 50px 0;
`

export const CarouselTrack = styled.div`
display: grid;
grid-template-columns: ${({slideNum, inView}) => 
    `repeat(${slideNum}, calc((100% / ${inView}) - 20px))`};
gap: 30px;
`