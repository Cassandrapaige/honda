import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const WrapperOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
height: 100%;
background: ${({dark}) => dark ? `${colors.overlay(.88)}` : `${colors.overlay(.7)}`};
color: ${colors.contrast};
padding: 100px;

@media(max-width: 680px) {
    padding: 20px;
}
`