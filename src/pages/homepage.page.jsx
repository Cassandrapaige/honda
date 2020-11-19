import React from 'react'

import Header from '../components/header/header.component'
import Parralax from '../components/parallax/parallax.component'
import Title from '../components/title/title.component'
import Text from '../components/text/text.component'
import FadeInContainer from '../components/fade-in-container/fade-in-container.component'
import Gallery from '../components/gallery/gallery.component'
import ProductContainer from '../components/product-container/product-container.component'
import CarouselItem from '../components/carousel-item/carousel-item.component'
import ScrollingWrapper from '../components/scrolling-wrapper/scrolling-wrapper.component'
import Carousel from '../components/carousel/carousel.component'

import useLocal from '../hooks/useLocal'

const Homepage = () => {
    useLocal();
    return (
        <div>
            <Header />
            <Carousel data = {PRODUCT_DATA}
                title = "Explore Our New Lineup"
                text = "Concentrated treatments for specialized or seasonal supplementary care."/>

            <Parralax image = 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/SHOP-Family-Pages/Clarity/New/Hero-Mobile-375-MY20-2x.jpg%202x'>
                <FadeInContainer>
                    <Title>Explore the 2020 & 2021 Lineup of New Honda Vehicles</Title>
                </FadeInContainer>
                <FadeInContainer>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut aperiam necessitatibus eius odit voluptas commodi maiores et quisquam blanditiis.</Text>
                </FadeInContainer>
            </Parralax>
            <ProductContainer/>
            <Parralax image = 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Si-Coupe/NON-VLP/Civic-Family-Page/Civic_Family_Hero_Mobile_375.jpg%202x'>
                <FadeInContainer>
                    <Title>Honda Canada: Coupes, Sedans, Hatchbacks, SUVs, Cross-Overs, Minivans & Hybrids</Title>
                </FadeInContainer>
                <FadeInContainer>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore soluta natus possimus, quos est non, quas iusto, consequatur nobis voluptatum saepe eligendi explicabo fugit voluptates at distinctio quasi optio.</Text>
                </FadeInContainer>
            </Parralax>
            <FadeInContainer slidein>
                <ScrollingWrapper 
                    title = "Find the vehicle right for you"
                    slideNum = {DATA.length} 
                    inView = '2'>
                    {
                        DATA.map(el => (
                            <CarouselItem data = {el} />
                        ))
                    }
                </ScrollingWrapper>
            </FadeInContainer>
            <Gallery /> 
        </div>
    )
}


const PRODUCT_DATA = [
    {
      id: 0,
      name: 'Civic',
      image: 'https://images.honda.ca/models/H/Models/2021/civic_type_r_le/hondaca_modelNav.png?width=480&quality=100',
      title: 'The 2021 Civic Type R',
      text: 'Limited Edition with a 306-hp turbocharged four-cylinder and a standard six-speed manual transmission.',
      btn: 'Pre-order Now',
      color: '#efaf00'
    },
    {
      id: 1,
      name: 'Insight',
      image: 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/12919/2021-Honda-Insight-front_12919_032_1818x740_RX_cropped.png?interpolation=high-quality&downsize=825:*',
      title: 'The 2021 Honda Insight',
      text: "A hybrid the blends refined power and styling with trusted fuel efficiency ratings to deliver a driving experience you'll have to see to believe.",
      btn: 'Find your colour',
      color: '#D60C19'
    },
    {
      id: 2,
      name: 'Accord',
      image: 'http://purepng.com/public/uploads/large/purepng.com-blue-honda-accord-hybrid-carcarvehicletransporthonda-961524653570veqwm.png',
      title: '2021 Honda Accord',
      text: 'With a 48 city/48 highway EPA mpg rating and electrifying driving dynamics, the Accord Hymbrid is an ingenious fusion of efficiency and performance.',
      btn: 'Buy yours Today',
      color: '#424fc6'
    },
    {
      id: 3,
      name: 'Pilot',
      image: 'https://images.dealer.com/ddc/vehicles/2021/Honda/Pilot/SUV/perspective/front-left/2021_24.png',
      title: '2021 Honda Pilot SUV',
      text: "Available in both Crystal Black Pearl and Platinum White Pearl, the Honda Pilot Black Edition brings the attitude and everything else you'll need.",
      btn: 'Learn More',
      color: '#333'
    },
  ]
  

const DATA = [
    {
        id: 0,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: 'https://hdqwalls.com/download/cloud-horizon-landscape-nature-road-a4-1920x1080.jpg',
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
        car: 'https://images.jazelc.com/uploads/galpinhonda/12454_st1280_089.png',
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
        car: 'https://st.motortrend.com/uploads/sites/10/2017/09/2018-honda-hr-v-ex-suv-angular-front.png',
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    },
    {
        id: 4,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: 'https://images5.alphacoders.com/567/567118.jpg',
        car: 'https://images.jazelc.com/uploads/galpinhonda/12454_st1280_089.png',
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    },
    {
        id: 5,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: 'https://images.wallpaperscraft.com/image/road_mountains_trees_123700_1920x1080.jpg',
        car: 'https://st.motortrend.com/uploads/sites/10/2017/09/2018-honda-hr-v-ex-suv-angular-front.png',
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    }
]

export default Homepage;