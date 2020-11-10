import styled from 'styled-components'
import {colors} from '../../constants/styles'

export const FooterContainer = styled.footer`
min-height: 50vh;
padding: 50px 50px 20px 50px;
color: ${colors.text};

img {
    width: 200px;
    object-fit: contain;
    margin-bottom: 30px;
}

@media(max-width: 600px) {
    padding: 30px 10px;
}

`

export const FooterNavigation = styled.nav`
display: flex;
flex-wrap: wrap;
column-gap: 30px;
row-gap: 30px;

@media(max-width: 600px) {
    column-gap: 0px;
    row-gap: 0px;
}
`

export const LinkContainer = styled.div`
display: flex;
flex-wrap: wrap;
background: ${colors.secondary};
padding: 10px;
margin-top: 50px;
`

export const LinkItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
box-shadow: 0px 2px 4px rgba(19, 19, 19,0.08),0px 4px 8px rgba(19, 19, 19,0.16);
background: ${colors.primary};
flex-grow: 1;
margin: 5px;
border-radius: 5px;
text-align: center;
cursor: pointer;
transition: all .3s ease;

&:hover {
    background: ${colors.complimentary};
}

i {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

span {
    font-weight: 500;
    line-height: 120%;
    text-transform: uppercase;
    font-size: .8rem;
}
`

