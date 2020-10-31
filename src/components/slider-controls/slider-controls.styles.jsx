import styled, {css} from 'styled-components';
import {easings, colors} from '../../constants/styles';
const {elastic} = easings;
const {text, accent} = colors;

export const SliderControlWrapper = styled.div`
position: absolute;
bottom: 50px;
left: 50%;
transform: translateX(-50%);
display: flex;
align-items: flex-end;
`

export const Control = styled.div`
width: 50px;
background: ${text};
height: 10px;
margin: 5px;
transition: all .5s ${elastic};

${({active}) => active && css`
    transition: all .2s ${elastic};
    background: ${accent};
    height: 15px;
`}
`