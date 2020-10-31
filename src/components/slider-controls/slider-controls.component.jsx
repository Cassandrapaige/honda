import React from 'react'

import {SliderControlWrapper, Control} from './slider-controls.styles'

const SliderControls = ({slides, handleClick, current}) => {
    return (
        <SliderControlWrapper>
          {
            slides.map(({id}) => (
            <Control 
                key = {id}
                onClick = {() => handleClick(id)}
                active = {id === current}>
            </Control>
            ))
          }
        </SliderControlWrapper>
    )
}

export default SliderControls;