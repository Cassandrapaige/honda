import React from 'react'

import Header from '../components/header/header.component'
import Parralax from '../components/parallax/parallax.component'
import Title from '../components/title/title.component'
import Text from '../components/text/text.component'
import Carousel from '../components/carousel/carousel.component'
import FadeInContainer from '../components/fade-in-container/fade-in-container.component'
import Gallery from '../components/gallery/gallery.component'
import ProductContainer from '../components/product-container/product-container.component'

import useLocal from '../hooks/useLocal'

const Homepage = () => {
    useLocal();

    return (
        <div>
            <Header />
            <Carousel 
                title = "Explore the 2020 & 2021 Lineup of New Honda Vehicles"
                slideNum = {DATA.length} 
                inView = '3'>
                {
                    DATA.map(el => (
                    <FadeInContainer slidein = "true">
                       <div className="item">
                            <img src={el.image} alt=""/>
                            <h3>{el.title}</h3>
                            <Text>{el.text}</Text>

                            <a href = {el.link}>Learn More</a>
                        </div>
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
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut aperiam necessitatibus eius odit voluptas commodi maiores et quisquam blanditiis.</Text>
                </FadeInContainer>
            </Parralax>
            <Gallery />
            <Carousel 
                title = 'Explore the 2020 & 2021 Lineup of New Honda Vehicles'
                slideNum = {DATA.length} 
                inView = '2'>
                {
                    DATA.map(el => (
                       <FadeInContainer slidein>
                       <div className="item">
                            <img src={el.image} alt=""/>

                            <h3>{el.title}</h3>
                            <Text>{el.text}</Text>

                            <a href = {el.link}>Learn More</a>
                        </div>
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
        title: 'Designed to Thrill',
        text: 'The 2021 Civic Type R, in Limited Edition Phoenix Yellow.',
        link: '/',
        image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/SHOP-Family-Pages/Clarity/New/Hero-Mobile-375-MY20-2x.jpg%202x'
    },
    {
        id: 1,
        title: 'Build your Honda Today',
        text: 'Build your Honda, Save It, Compare It, Send It and Contact your Quebec Honda Dealer Today.',
        link: '/',
        image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/SHOP-Family-Pages/Clarity/New/Hero-Mobile-375-MY20-2x.jpg%202x'
    },
    {
        id: 3,
        title: 'Car Buying. The Couch Edition',
        text: 'Build your dream Honda without ever leaving your home.',
        link: '/',
        image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/SHOP-Family-Pages/Clarity/New/Hero-Mobile-375-MY20-2x.jpg%202x'
    },
    {
        id: 4,
        title: 'Less Fuel. More Efficiency.',
        text: 'Check out our innovative hybrid lineup.',
        link: '/',
        image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/SHOP-Family-Pages/Clarity/New/Hero-Mobile-375-MY20-2x.jpg%202x'
    }
]

export default Homepage;