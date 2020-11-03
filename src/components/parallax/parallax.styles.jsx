import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const FixedContainer = styled.section`
position: relative;
background: ${colors.primary};
min-height: 70vh;
color: 	${colors.text};
background-image: ${({image}) => `url(${image})`};
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
`