import React from 'react'
import { useTransition, config } from 'react-spring'
import { images } from '../../constants/images'

import useCarousel from '../../hooks/useCarousel'

import AccentTitle from '../accent-title/accent-title.component'
import OverlayContainer from '../overlay-container/overlay-container.component'
import SliderControls from '../slider-controls/slider-controls.component'
import Animated from '../animate/animate.component'
import Title from '../title/title.component'

import {HeaderWrapper, SlideContainer} from './header.styles'
import CtaButton from '../cta-button/cta-button.component'

const { headerImage1, headerImage2, headerImage3 } = images;

const Header = () => {
    const [activeLink, setActiveLink] = useCarousel(SLIDES, 8000);
    const handleClick = id => setActiveLink(id);

    const transitions = useTransition(SLIDES[activeLink], item => item.id, {
        from: {transform: `translateX(-100%)`},
        enter: {transform: `translateX(0)`},
        leave: {transform: `translateX(100%)`},
        config: config.default
    })

    return (
        <HeaderWrapper>
            {transitions.map(({ item, props }) => (
                <SlideContainer
                    key = {item.id}
                    image = {item.img}
                    style = {props}>

                    <OverlayContainer style= {styles.overlay}>
                        <Animated>
                            <AccentTitle>{item.tagline}</AccentTitle>
                        </Animated>
                        <Animated delay = ".5">
                            <Title isHeading>{item.title}</Title>                       
                        </Animated>
                        <Animated delay = "1">
                            <CtaButton text = {item.btn} />
                        </Animated>
                    </OverlayContainer>
                </SlideContainer>
        ))}

        <SliderControls 
          slides = {SLIDES} 
          current = {activeLink}
          handleClick = {handleClick}
        />
        </HeaderWrapper>
    )
}

const styles = {
    overlay: {
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        padding: `100px`
    }
}

const SLIDES = [
    {
      id: 0,
      img: headerImage1,
      tagline: "Canadian built.",
      title: "Canadian Driven.",
      btn: "Shop Now"
    },
    {
      id: 1,
      img: headerImage2,
      tagline: "The 2021 Civic",
      title: "Designed to Thrill",
      btn: "Learn More"
    },
    {
      id: 2,
      img: headerImage3,
      tagline: "Innovative Hybrid Lineup",
      title: "Less Fuel. More Efficiency.",
      btn: "Learn More"
    }
  ]
  
export default Header;