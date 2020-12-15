import styled, {css} from 'styled-components'
import {colors} from '../../constants/styles'

export const ProductContainer = styled.section`
box-shadow: 0px 2px 4px rgba(18, 18, 18, .4);
scroll-snap-align: start;
`

export const ProductContainerInner = styled.div`
min-height: 500px;
background: ${({image}) => 
    `linear-gradient(45deg, rgba(18, 18, 18, 0.62), rgba(18, 18,18, 0.58)), url(${image})`};
background-size: cover;
background-position: center;
background-repeat: no-repeat;
overflow: hidden;
transition: all .5s ease;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;

@media(max-width: 900px) {
  min-height: 420px;
}
`

export const ProductContainerContent = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 50%;
color: ${colors.contrast};
flex-grow: 1;

h2 {
  font-size: 2rem;
  transition: all .5s ease;
  opacity: ${({hovered}) => hovered ? 0 : 1};

  @media(max-width: 900px) {
    opacity: 1;
  }
}
   
span {
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  transition: all .5s ease;
  transform: ${({hovered}) => hovered ? 'translateY(35px)' : 'translateY(0px)'}

  @media(max-width: 900px) {
    transform: 'translateY(0px)';
  }
}
`

export const ProductContainerLower = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: column;
background: transparent;
transform: translateY(60%);
transition: all .5s ease;
bottom: 0;

${({hovered}) => hovered && css`
  transform: translateY(0);
  color: ${colors.primary};
  background: ${colors.text};`
}

@media(max-width: 900px) {
  transform: translateY(0);
  background: ${colors.secondary};
}
`

export const FeaturesList = styled.ul`
padding: 80px 50px 50px 50px;  
list-style-type: none;
opacity: 0;
transition: all .2s ease;

${({hovered}) => hovered && css`
  opacity: 1;
`}

@media(max-width: 900px) {
  opacity: 1;
  font-size: .9em;
  padding: 80px 40px 20px 40px; 
}
`

export const FeaturedItem = styled.li`
position: relative;
font-weight: 100;
line-height: 150%;
font-size: 1.1em;
text-align: left;
 
&:before {
  position: absolute;
  content: '';
  width: 5px;
  height: 10px;
  border-top: 3px solid #424fc6;
  border-left: 3px solid #424fc6;
  left: -15px;
  top: 5px;
  transform: rotate(-130deg);
}

@media(max-width: 900px) {
  color: ${colors.text};
}
`

export const CtaButton = styled.button`
width: 100%;
border: none;
border-top: 1px solid ${colors.primary};
outline: none;
padding: 20px;
font-size: 1.2rem;
font-weight: 100;
background: ${colors.complimentary};
color: ${colors.text};
cursor: pointer;
transition: all .3s ease;

${({hovered}) => hovered && css`
  background: ${colors.text};
  color: ${colors.primary};
  border-top: 1px solid ${colors.primary};
`}

@media(max-width: 900px) {
  background: ${colors.complimentary};
  color: ${colors.text};
  font-weight: 400;
}
`

export const AnimatedImage = styled.img`
width: 65%;
object-fit:contain;
position: absolute;
top: 0px;
left: 50%;
transform: translateX(-50%) translateY(-60%);
transition: all .5s ease;

${({hovered}) => hovered && css`
width: 50%;
`}

@media(max-width: 900px) {
  width: 40%;
  transform: translateX(-50%) translateY(-45%)
}

@media(max-width: 680px) {
  width: 60%;
}
`
 