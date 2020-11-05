import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const Text = styled.h2`
font-size: 3rem;
padding: 10px 0;
line-height: 120%;
color: ${colors.text};
font-weight: 200;

${({isHeading}) => isHeading && css`
    font-size: 6rem;
    width: 80%;
    font-weight: 900;
`}
`