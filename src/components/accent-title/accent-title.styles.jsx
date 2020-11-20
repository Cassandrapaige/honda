import styled, {css} from 'styled-components'
import {animated} from 'react-spring'
import {colors} from '../../constants/styles'

export const Title = styled.h3`
font-size: 1.5rem;
font-weight: 500;
position: relative;
transition: all .5s ease;
color: ${colors.contrast};

${({heading}) => heading && css`
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 120%;
    padding-bottom: 10px;
    color: ${colors.text};

    @media(max-width: 800px) {
        font-size: 2.5rem;
    }
`}
`

export const Strike = styled(animated.div)`
position: absolute;
content: '';
width: 40px;
height: 5px;
background: ${colors.accent};
top: -12px;
left: 0;

${({heading}) => heading && css`
    @media(max-width: 800px) {
        left: 50%;
        transform: translateX(-50%);
        top: -22px;
    }
`}
`