import styled from 'styled-components'
import {colors, easings} from '../../constants/styles'

export const ProductCardContainer = styled.div`
color: ${colors.text};
background: ${colors.secondary};
box-shadow: 0px 2px 2px rgba(18, 18, 18, .8);

&:hover button{
    background: ${colors.complimentary};
    color: ${colors.accent};
}
`

export const ProductImage = styled.div`
position: relative;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

export const ProductOverview = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 10px;
`

export const CarModelTitle = styled.h2`
grid-column: 1/-1;
margin-bottom: 10px;
`

export const PricingContainer = styled.div`
padding-bottom: 30px;

span {
    font-weight: 200;
}

h3 {
    font-weight: 400;
}
`

export const AddToCartBtn = styled.button`
border: none;
outline: none;
border-top: 2px solid ${colors.complimentary};
text-align: center;
color: ${colors.text};
font-size: 1.2rem;
width: 100%;
padding: 20px;
background: transparent;
transition: all .3s ${easings.smooth};
font-weight: 200;
`