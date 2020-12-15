import React from 'react'

import Header from '../components/header/header.component'
import Gallery from '../components/gallery/gallery.component'
import ProductContainer from '../components/product-container/product-container.component'
import CarouselItem from '../components/carousel-item/carousel-item.component'
import ScrollingWrapper from '../components/scrolling-wrapper/scrolling-wrapper.component'
import Carousel from '../components/carousel/carousel.component'

import {NEW_LINEUP_DATA, ANIMATED_PRODUCT_CARD_DATA} from '../constants/data'

import useLocal from '../hooks/useLocal'

const Homepage = () => {
    useLocal();
    return (
        <div>
            <Header />
            <Carousel data = {NEW_LINEUP_DATA}
                title = "Explore Our New Lineup"
                text = "Concentrated treatments for specialized or seasonal supplementary care."/>

            <ProductContainer/>

            <ScrollingWrapper 
                title = "Find the vehicle right for you"
                slideNum = {ANIMATED_PRODUCT_CARD_DATA.length} 
                inView = '2'>
                {
                    ANIMATED_PRODUCT_CARD_DATA.map((el, index) => (
                        <CarouselItem data = {el} key = {index}/>
                    ))
                }
            </ScrollingWrapper>
            <Gallery /> 
        </div>
    )
}


export default Homepage;