import React from 'react'

import {AnimatedContainer} from './fade-in-container.styles'

import useObserver from '../../hooks/useObserver'

const FadeInContainer = ({children, ...rest}) => {
   const [isVisible, domRef] = useObserver();

    return (
        <AnimatedContainer visible = {isVisible} ref = {domRef} {...rest}>
            {children}
        </AnimatedContainer>
    )
}

export default FadeInContainer;