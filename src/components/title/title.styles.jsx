import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const Text = styled.h2`
font-size: 3rem;
padding: 10px 0;
line-height: 120%;
color: ${colors.text};
font-weight: 900;

${({isHeading}) => isHeading && css`
    font-size: 6rem;
    width: 80%;
    color: ${colors.contrast};

    @media(max-width: 980px) {
        width: 100%;
    }
`}

@media(max-width: 980px) {
    font-size: 2rem;

    ${({isHeading}) => isHeading && css`
        font-size: 3rem;
    `}
}
`