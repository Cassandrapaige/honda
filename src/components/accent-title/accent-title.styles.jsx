import styled, {css} from 'styled-components'

export const Title = styled.h3`
font-size: 1.5rem;
font-weight: 800;
position: relative;
transition: all .5s ease;

&:before {
  transition: all .5s ease 1s;
  position: absolute;
  content: '';
  width: 0px;
  height: 5px;
  background: #D60C19;
  top: -12px;
}

${({active}) => active && css`
  &:before {
    width: 40px;
  }
`}
`