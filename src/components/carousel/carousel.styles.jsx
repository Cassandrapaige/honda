import styled, {keyframes, css} from 'styled-components';
import {animated} from 'react-spring'
import {colors} from '../../constants/styles'

export const CarosuelContainer = styled.section`
position: relative;
max-width: 1100px;
margin: auto;

@media(max-width: 800px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`

export const SlideContainer = styled.div`
order: 1;
position: relative;
min-height: 550px;
height: 100%;
overflow-x: hidden;
overflow-y: visible;
`

export const Slide = styled(animated.div)`
width: 100%;
height: 100%;
position: absolute;
top: 0;
bottom: 0;
transform: translateX(0);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 500px;

@media(max-width: 800px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
`

export const SlideContentOverview = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding-right: 30px;

@media(max-width: 800px) {
  order: 2;
  align-items: center;
  text-align: center;
  padding-right: 0;
}
`

export const SlideContentImage = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media(max-width: 800px) {
  padding: 30px;
  order: 1;
}
`

export const Image = styled.img`
width: 90%;
height: 100%;
object-fit: contain;

@media(max-width: 800px) {
  width: 80%;
  margin: auto;
}
`

export const ProgressBarsWrapper = styled.div`
display: flex;
justify-content: space-between;

@media(max-width: 800px) {
  order: 2;
  padding: 0;
  margin-bottom: 80px;
}
`

export const ProgressBar = styled.div`
position: relative;
cursor: pointer;
display: flex;
flex-grow: 1;
padding: 15px 0;
text-align: center;
transition: all .5s ease;
margin-right: 10px;
color: ${colors.text};

@media(max-width: 800px) {
  h2 {
    display: none;
  }
}
`

export const Progress = styled.div`
position: absolute;
width: 100%;
height: 5px;
bottom: 0px;
background: #ddd;

&:before {
  position: absolute;
  width: ${({completed}) => completed ? '100%' : 0};
  height: 100%;
  opacity: .9;
  background: ${({color}) => color};
  left: 0;
  content: '';
  animation-play-state:paused;
  
  ${({active}) => active && css`
    animation: ${Grow} linear forwards;
    animation-duration:  ${({time}) => `${time}ms`};
    animation-play-state:running;
  `}
}
`

const Grow = keyframes`
0% {
  width: 0;
}
100% {
  width: 100%;
}
`