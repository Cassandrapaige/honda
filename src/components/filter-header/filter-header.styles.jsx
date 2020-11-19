import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const FilterHeaderContainer = styled.nav`
grid-column: 1/-1;
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
border-bottom: 1px solid ${colors.complimentary};
box-shadow: 0px 2px 2px ${colors.overlay(.2)};
margin-bottom: 30px;
background: ${colors.primary};
position: sticky;
top: 82px;
padding: 0 50px;
z-index: 20;
right: 0;

@media(max-width: 680px) {
  padding: 0;
  flex-wrap: wrap;
  border-bottom: none;
}
`

export const FilterMenuItem = styled.div`
padding: 20px;
border-right: 1px solid ${colors.complimentary};
cursor: pointer;
font-size: 1.1rem;
color: 	${colors.text};
transition: all .2s ease;
font-weight: 300;

@media(max-width: 680px) {
  font-size: 1rem;
  flex-grow: 1;
  border-bottom: 1px solid ${colors.complimentary};
}

&:last-of-type {
  border-right: none;
}
  
&:hover {
    background: ${({active}) => !active && 
        `${colors.complimentary}`};
}

${({active}) => active && css`
    background: ${colors.accent};
`}
`
