import React, {useState, useEffect, useRef} from 'react'

import {ScrollingContainer, CarouselInner, CarouselTrack,Arrow} from './scrolling-wrapper.styles'
import Container from '../container/container.component'

const ScrollingWrapper = ({title, children, ...rest}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const scrollRef = useRef(null);
    const [viewWidth, setViewWidth] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
       setViewWidth(scrollRef.current.offsetWidth);
    }, [scrollRef]);

    const toggleArrows = content => {
        const scrollWidth = content.scrollWidth - viewWidth;

        content.scrollLeft > 0 ? 
            setShowLeftArrow(true)
            : setShowLeftArrow(false);
    
        content.scrollLeft < scrollWidth ?
            setShowRightArrow(true)
            : setShowRightArrow(false);
    };

    const handleClick = (elem, type) => {
        const content = scrollRef.current;
        type === 'next' &&  content.scrollBy(viewWidth + 20, 0);
        type === 'prev' &&  content.scrollBy(-(viewWidth + 20), 0);
        content.addEventListener('scroll', () => toggleArrows(content));
    };

    useEffect(() => {
        window.addEventListener('resize', () => setViewWidth(scrollRef.current.offsetWidth));
        return () => window.removeEventListener('resize', () => setViewWidth());
    }, [scrollRef]);
    
    return (
        <Container 
            title = "Find the vehicle right for you"
            text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, beatae.">            
            <ScrollingContainer onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
                <CarouselInner>
                    <CarouselTrack ref = {scrollRef} {...rest}>
                      {children}
                    </CarouselTrack>
                </CarouselInner>
                {showLeftArrow && <Arrow prev hovered = {isHovered} onClick = {e => handleClick(e, 'prev')}/>}
                {showRightArrow && <Arrow next hovered = {isHovered} onClick = {e => handleClick(e, 'next')}/>}
            </ScrollingContainer>
        </Container>   
    )
}

export default ScrollingWrapper;