import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const Text = styled.h2`
font-size: 3rem;
padding: 10px 0;
line-height: 110%;
color: ${colors.text};

${({isHeading}) => isHeading && css`
    font-size: 6rem;
    width: 80%;
`}
`