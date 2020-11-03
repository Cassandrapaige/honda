import styled, {css} from 'styled-components';
import {easings, colors} from '../../constants/styles';
const {elastic} = easings;
const {text, accent} = colors;

export const SliderControlWrapper = styled.div`
position: absolute;
bottom: 30px;
left: 50%;
transform: translateX(-50%);
display: flex;
align-items: flex-end;
`

export const Control = styled.div`
width: 40px;
background: ${text};
height: 10px;
margin: 5px;
transition: all .2s ${elastic};

${({active}) => active && css`
    transition: all .5s ${elastic};
    background: ${accent};
    height: 12px;
`}
`