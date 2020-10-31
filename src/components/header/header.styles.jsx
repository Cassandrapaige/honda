import styled, {css} from 'styled-components'
import {animated } from 'react-spring'
import {colors} from '../../constants/styles'

export const HeaderWrapper = styled.header`
min-height: 100vh;
position: relative;
background: ${colors.primary};
overflow: hidden;
`

export const SlideContainer = styled(animated.div)`
width: 100%;
height: 100%;
position: absolute;
top: 0;
bottom: 0;
background-image: ${({image}) => `url(${image})`};
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
`