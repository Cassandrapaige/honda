import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'
import {colors} from '../../constants/styles'

export const NavbarContainer = styled.nav`
z-index: 500;
position: fixed;
background: transparent;
width: 100%;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 60px;
transition: all .5s ease;

${({active}) => active && css`
  background: ${colors.primary};
`}
`

export const Links = styled.section`

`

export const NavLink = styled(Link)`
text-decoration: none;
margin: 0 12px;
color: ${colors.text};
font-size: 1.1rem;
position: relative;
font-weight: 300;

&:before {
  position: absolute;
  content: '';
  width: 0px;
  height: 5px;
  background: ${colors.accent};
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all .3s ease;
}

&:hover:before {
  opacity: 1;
  width: 100%;
}

${({cta}) => cta && css`
    background: ${colors.accent};
    padding: 8px 20px;
    border-radius: 50px;

    &:before {
    display: none;
    }
`}
`

export const Logo = styled.div`
width: 50px;
`