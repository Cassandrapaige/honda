import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const ContentWrapper = styled.section`
padding-bottom: 50px;
position: relative;

@media(max-width: 800px) {
    padding: 80px 10px;
}
`

export const HeaderInfo = styled.div`
padding: 150px 30px 80px 30px;
background: ${colors.secondary};
border-bottom: 10px solid ${colors.complimentary};
margin-bottom: 80px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;

@media(max-width: 800px) {
    margin-bottom: 40px;
}
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