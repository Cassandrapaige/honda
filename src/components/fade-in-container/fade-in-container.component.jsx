import React, {useState, useEffect, useRef} from 'react'

import {AnimatedContainer} from './fade-in-container.styles'

const FadeInContainer = ({children, ...rest}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        let currentRef = domRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // use if statement if you only want to animate the element once, the first time it's scrolled into view
                if(!isVisible) 
                setIsVisible(entry.isIntersecting);
            })
        });
        observer.observe(currentRef);
        return () => observer.unobserve(currentRef);
    }, [isVisible])
    return (
        <AnimatedContainer visible = {isVisible} ref = {domRef} {...rest}>
            {children}
        </AnimatedContainer>
    )
}

export default FadeInContainer;