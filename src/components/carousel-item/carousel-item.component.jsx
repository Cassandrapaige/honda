import React, {useState} from 'react'

import {
    ProductContainer,
    ProductContainerInner,
    ProductContainerContent,
    ProductContainerLower,
    FeaturesList,
    FeaturedItem,
    CtaButton,
    AnimatedImage
} from './carousel-item.styles'

const CarouselItem = ({data}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
    <ProductContainer 
        onMouseEnter = {() => setIsHovered(true)} 
        onMouseLeave = {() => setIsHovered(false)}>
        <ProductContainerInner image = {data.background}>
            <ProductContainerContent hovered = {isHovered}>
                <span>{data.tagline}</span>
                <h2>{data.title}</h2>
            </ProductContainerContent>
            
            <ProductContainerLower hovered = {isHovered}>
            <AnimatedImage 
                hovered = {isHovered}
                src = {data.car} 
                alt = "image of honda vehicle"/>
            <FeaturesList hovered = {isHovered}>
                {
                    data.features.map((feature, index) => (
                        <FeaturedItem 
                            key = {index}>
                            {feature}
                        </FeaturedItem>
                    ))
                }
            </FeaturesList>
            </ProductContainerLower>
        </ProductContainerInner>
        <CtaButton hovered = {isHovered}>See more</CtaButton>
    </ProductContainer>
    )
}

export default CarouselItem;