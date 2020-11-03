import React from 'react'
import {useSpring} from 'react-spring'

import {AnimatedContainer} from './animate.styles'

const Animated = ({children, delay = "0"}) => {
    const props = useSpring({
        from : {
            opacity: 0,
            transform: 'translateY(150px)'
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px)',
        }
    });

    return (
    <AnimatedContainer style = {props} delay = {delay}>
        {children}
    </AnimatedContainer>
)}

export default Animated