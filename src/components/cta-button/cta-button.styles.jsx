import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {colors} from '../../constants/styles'

export const Button = styled(Link)`
background: ${colors.accent};
text-decoration: none;
color: ${colors.text};
padding: 20px;
border-radius: 0px;
text-align: center;
text-transform: uppercase;
font-weight: 400;
font-size: 1rem;
cursor: pointer;
display: inline-block;
margin-top: 30px;
min-width: 250px;
`