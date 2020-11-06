import React from 'react'

import Header from '../components/header/header.component'
import Parralax from '../components/parallax/parallax.component'
import Title from '../components/title/title.component'
import Text from '../components/text/text.component'
import Carousel from '../components/carousel/carousel.component'
import FadeInContainer from '../components/fade-in-container/fade-in-container.component'
import Gallery from '../components/gallery/gallery.component'
import ProductContainer from '../components/product-container/product-container.component'
import CarouselItem from '../components/carousel-item/carousel-item.component'
import useLocal from '../hooks/useLocal'

const Homepage = () => {
    useLocal();

    return (
        <div>
            <Header />
            <Carousel 
                title = "Explore the 2020 & 2021 Lineup of New Honda Vehicles"
                slideNum = {DATA.length} 
                inView = '2'>
                {
                    DATA.map(el => (
                        <FadeInContainer slidein>
                            <CarouselItem data = {el} />
                        </FadeInContainer>
                    ))
                }
            </Carousel>
            <Parralax image = 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/SHOP-Family-Pages/Clarity/New/Hero-Mobile-375-MY20-2x.jpg%202x'>
                <FadeInContainer>
                    <Title>Honda Canada: Coupes, Sedans, Hatchbacks, SUVs, Cross-Overs, Minivans & Hybrids</Title>
                </FadeInContainer>
                <FadeInContainer>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut aperiam necessitatibus eius odit voluptas commodi maiores et quisquam blanditiis.</Text>
                </FadeInContainer>
            </Parralax>
            <ProductContainer />

            <Parralax image = 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Si-Coupe/NON-VLP/Civic-Family-Page/Civic_Family_Hero_Mobile_375.jpg%202x'>
                <FadeInContainer>
                    <Title>Built in Canada -- and it shows</Title>
                </FadeInContainer>
                <FadeInContainer>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore soluta natus possimus, quos est non, quas iusto, consequatur nobis voluptatum saepe eligendi explicabo fugit voluptates at distinctio quasi optio.</Text>
                </FadeInContainer>
            </Parralax>
            <Gallery />
            <Carousel 
                title = 'Explore the 2020 & 2021 Lineup of New Honda Vehicles'
                slideNum = {DATA.length} 
                inView = '3'>
                {
                    DATA.map(el => (
                        <FadeInContainer slidein>
                            <CarouselItem data = {el} />
                        </FadeInContainer>
                    ))
                }
            </Carousel>
        </div>
    )
}

const DATA = [
    {
        id: 0,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: 'https://wallup.net/wp-content/uploads/2015/12/153891-road-mountain-landscape.jpg',
        car: 'https://images.jazelc.com/uploads/galpinhonda/12454_st1280_089.png',
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    },
    {
        id: 1,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: 'https://jooinn.com/images/road-75.jpg',
        car: 'https://www.cstatic-images.com/car-pictures/xl/usc90hos022d021001.png',
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    },
    {
        id: 2,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: 'https://images5.alphacoders.com/567/567118.jpg',
        car: 'https://st.motortrend.com/uploads/sites/10/2017/09/2018-honda-hr-v-ex-suv-angular-front.png',
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    },
    {
        id: 3,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: 'https://images.wallpaperscraft.com/image/road_mountains_trees_123700_1920x1080.jpg',
        car: 'https://images.jazelc.com/uploads/galpinhonda/12454_st1280_089.png',
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    }
]

export default Homepage;