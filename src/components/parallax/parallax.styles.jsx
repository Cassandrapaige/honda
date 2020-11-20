import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const FixedContainer = styled.section`
position: relative;
background: ${colors.primary};
min-height: 80vh;
height: 100%;
color: 	${colors.text};
background-image: ${({image}) => `url(${image})`};
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
background-position: center;

@media(max-width: 800px) {
    background-attachment: scroll;
}
`

export const ParallaxContent = styled.div`
max-width: 1100px;
margin: auto;
padding: 10px;
`