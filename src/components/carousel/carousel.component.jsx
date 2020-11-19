import React from 'react'
import { useTransition, config } from 'react-spring'

import useCarousel from '../../hooks/useCarousel';
import usePrevious from '../../hooks/usePrevious';
import useObserver from '../../hooks/useObserver';

import CtaButton from '../cta-button/cta-button.component';
import Title from '../title/title.component';
import Text from '../text/text.component';
import Container from '../container/container.component';

import {ProgressBar, 
        SlideContainer, 
        SlideContentImage, 
        SlideContentOverview, 
        Image,
        CarosuelContainer,
        ProgressBarsWrapper,
        Progress,
        Slide
      } from './carousel.styles'

const Carousel = ({children, data, ...rest}) => {
    let time = 6000;
    const [isVisible, domRef] = useObserver(true);
    const [activeLink, setActiveLink] = useCarousel(data, time, isVisible);
    const prevLink = usePrevious(activeLink);
  
    const handleClick = id => setActiveLink(id);
  
    const conditionals =  (activeLink > prevLink) || (activeLink === 0 && prevLink === data.length - 1);
  
    const transitions = useTransition(data[activeLink], item => item.id, {
      from: {
          transform: conditionals ? `translateX(100%)` : `translateX(-100%)`, 
          opacity: 0,
      },
      enter: {
          transform: `translateX(0)`,
          opacity: 1,
      },
      leave: {
          transform: conditionals ? `translateX(-100%)` : `translateX(100%)`,
          opacity: 0,
      },
      config: config.default
    });
  
    const completed = slide => slide.id !== activeLink && slide.id < activeLink;

    return (
   <Container {...rest}>
   <CarosuelContainer>
        <ProgressBarsWrapper>
        {
          data.map(slide => (
            <ProgressBar key= {slide.id} onClick = {() => handleClick(slide.id)}>
              <h2>{slide.name}</h2>
              <Progress
                color = {slide.color} 
                completed = {completed(slide)} 
                time = {time} 
                active = {isVisible && slide.id === activeLink} 
                ref = {domRef}>
              </Progress>
            </ProgressBar>
          ))
        }
      </ProgressBarsWrapper>
      <SlideContainer>
      {
        transitions.map(({item, props}) => (
          <Slide key = {item.id} style = {props}>
              <SlideContentOverview>
                <Title>{item.title}</Title>
                <Text>{item.text}</Text>
                <CtaButton color = {item.color} text = {item.btn} />
              </SlideContentOverview>
              <SlideContentImage>
                <Image src={item.image} alt="" />
              </SlideContentImage>
          </Slide>
        ))
      }
      </SlideContainer>
      </CarosuelContainer>
    </Container>
    )
}

export default Carousel;