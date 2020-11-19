import styled, {css} from 'styled-components'
import {colors, easings} from '../../constants/styles'

export const GalleryContainer = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 300px);
gap: 20px;
padding: 20px;
background: ${colors.secondary};
position: relative;

@media(max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 200px);
}
`

export const ImageContainer = styled.div`
position: relative;
cursor: zoom-in;
overflow: hidden;

&:hover img {
    transform: scale(1.1);
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all .5s ${easings.smooth};
}

${({spanTwo}) => spanTwo && css`
    grid-row: span 2;
`}
`