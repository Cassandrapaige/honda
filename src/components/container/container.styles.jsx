import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const ContentWrapper = styled.section`
max-width: 1100px;
margin: auto;
padding: 80px 10px;
`

export const HeaderInfo = styled.div`
text-align: center;
`

export const Title = styled.h1`
font-size: 4rem;
color: ${colors.text};
line-height: 120%;
padding-bottom: 14px;

@media(max-width: 800px) {
font-size: 2.5rem;
}
`