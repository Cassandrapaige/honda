import styled, {css} from 'styled-components'
import {easings} from '../../constants/styles'

export const AnimatedContainer = styled.div`
opacity: 0;
visibility: hidden;
transition: transform .6s ${easings.smooth}, opacity 1.2s ${easings.smooth};
transform: translateY(100px);

${({slidein}) => slidein && css`
transform: translateX(200px);
`}

${({visible}) => visible && css`
opacity: 1;
transform: none;
visibility: visible;
`}
`