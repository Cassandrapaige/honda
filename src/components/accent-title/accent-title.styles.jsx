import styled from 'styled-components'
import {animated} from 'react-spring'
import {colors} from '../../constants/styles'

export const Title = styled.h3`
font-size: 1.5rem;
font-weight: 500;
position: relative;
transition: all .5s ease;
`

export const Strike = styled(animated.div)`
position: absolute;
content: '';
width: 40px;
height: 5px;
background: ${colors.accent};
top: -12px;
`