import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const Text = styled.h2`
font-size: 3rem;
padding: 10px 0;
line-height: 130%;
color: ${colors.text};
font-weight: 900;

${({isHeading}) => isHeading && css`
    font-size: 6rem;
    width: 80%;

    @media(max-width: 680px) {
        width: 100%;
    }
`}

@media(max-width: 680px) {
    font-size: 2rem;

    ${({isHeading}) => isHeading && css`
        font-size: 3rem;
    `}
}
`