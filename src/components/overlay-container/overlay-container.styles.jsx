import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const WrapperOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
height: 100%;
background: ${colors.overlay};
color: ${colors.text};
`