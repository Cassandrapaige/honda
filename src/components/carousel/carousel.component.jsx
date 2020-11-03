import React, {useState} from 'react'

import {CarousleWrapper, CarouselInner, CarouselTrack,Arrow} from './carousel.styles'
import Container from '../container/container.component'
import Title from '../title/title.component'
import FadeInContainer from '../fade-in-container/fade-in-container.component'

const Carousel = ({title, children, ...rest}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <Container>
            <FadeInContainer>
                <Title>{title}</Title>
            </FadeInContainer> 
            
            <CarousleWrapper onMouseEnter = {onMouseEnter} onMouseLeave = {onMouseLeave}>
                <CarouselInner>
                    <CarouselTrack {...rest}>
                      {children}
                    </CarouselTrack>
                </CarouselInner>
                <Arrow prev hovered = {isHovered}/>
                <Arrow next hovered = {isHovered}/>
            </CarousleWrapper>
        </Container>   
    )
}

export default Carousel;