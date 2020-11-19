import styled from 'styled-components'

export const ProductGridContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 30px;
padding: 50px;

@media(max-width: 680px) {
    grid-template-columns: 1fr;
    padding: 20px;
}
`