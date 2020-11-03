import styled, {css} from 'styled-components'
import {easings} from '../../constants/styles'

export const AnimatedContainer = styled.div`
opacity: 0;
transform: translateY(70px);
visibility: hidden;
transition: transform .6s ${easings.smooth}, opacity 1.3s ${easings.smooth};

${({visible}) => visible && css`
opacity: 1;
transform: none;
visibility: visible;
`}
`