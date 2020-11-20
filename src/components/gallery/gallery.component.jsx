import React from 'react'
import { images } from '../../constants/images'

import OverlayContainer from '../overlay-container/overlay-container.component'
import Title from '../title/title.component'
import AccentTitle from '../accent-title/accent-title.component'

import {GalleryContainer, ImageContainer} from './gallery.styles'

const { headerImage1, headerImage2, headerImage3 } = images;

const Gallery = () => {
    return (
        <GalleryContainer>
            {
                DATA.map(product => (
                    <ImageContainer spanTwo = {product.span}>
                        <img src = {product.image} alt = {product.name} />
                        <OverlayContainer style= {styles.overlay}>
                            <AccentTitle>{product.name}</AccentTitle>
                            <h2>{product.year}</h2>
                        </OverlayContainer>
                    </ImageContainer>
                ))
            }
        </GalleryContainer>
    )
}

const styles = {
    overlay: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: "20px",
    }
}

const DATA = [
    {
        id: 0,
        image: headerImage1,
        name: 'Civic Coupe Si',
        year: '2021',
        span: true,
    },
    {
        id: 1,
        image: 'https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2020/Civic-Si-Coupe/NON-VLP/Civic-Family-Page/Civic_Family_Hero_Mobile_375.jpg%202x',
        name: 'Civic Coupe Si',
        year: '2021',
        span: false,
    },
    {
        id: 2,
        image: headerImage2,
        name: 'Civic Coupe Si',
        year: '2021',
        span: true,
    },
    {
        id: 3,
        image: headerImage3,
        name: 'Civic Coupe Si',
        year: '2021',
        span: false,
    }
]

export default Gallery;