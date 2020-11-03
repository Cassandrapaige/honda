import React from 'react'

import Header from '../components/header/header.component'
import Parralax from '../components/parallax/parallax.component'
import Title from '../components/title/title.component'
import Text from '../components/text/text.component'
import Carousel from '../components/carousel/carousel.component'
import FadeInContainer from '../components/fade-in-container/fade-in-container.component'

const Homepage = () => {
    return (
        <div>
            <Header />
            <Carousel 
                title = 'Explore the 2020 & 2021 Lineup of New Honda Vehicles'
                slideNum = {DATA.length} 
                inView = '3'>
                {
                    DATA.map(el => (
                        <div className="item">
                            <p>{el.name}</p>
                        </div>
                    ))
                }
            </Carousel>
            <Parralax image = 'https://cdn.motor1.com/images/mgl/kNmyQ/s2/honda-civic-type-r.jpg'>
                <FadeInContainer>
                    <Title>Explore the 2020 & 2021 Lineup of New Honda Vehicles</Title>
                </FadeInContainer>
                <FadeInContainer>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut aperiam necessitatibus eius odit voluptas commodi maiores et quisquam blanditiis.</Text>
                </FadeInContainer>
            </Parralax>
        </div>
    )
}

const DATA = [
    {
        id: 0,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam.'
    },
    {
        id: 1,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam.'
    },
    {
        id: 3,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam.'
    },
    {
        id: 4,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam.'
    },
    {
        id: 5,
        name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, nam.'
    }
]


export default Homepage;