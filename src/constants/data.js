// IMAGES FOR STOCK DATA
import fit from '../images/fit.webp'
import civicCoupe from '../images/civic-coupe.webp'
import civicHatchback from '../images/civic-hatchback.webp'
import civicCoupeSi from '../images/civic-coupe-si.webp'
import hrV from '../images/hr-v.webp'
import crV from '../images/cr-v.webp'
import clarityPluginHybrid from '../images/clarity-plug-in-hybrid.webp'
import passport from '../images/passport.webp'
import odyssey from '../images/odyssey.webp'
import ridgeline from '../images/ridgeline.jpeg'
import accordHybrid from '../images/accord-hybrid.webp'
import insightHybrid from '../images/insight-hybrid.webp'

// IMAGES FOR NEW_LINEUP DATA
import civicPng from '../images/honda_civic.webp'
import insightPng from '../images/honda_insight.webp'
import accordPng from '../images/honda_accord.webp'
import pilotPng from '../images/honda_pilot.webp'

// IMAGES FROM ANIMATED PRODUCT CARDS
import productCardImg1 from '../images/product_card_bg1.jpg'
import productCardImg2 from '../images/product_card_bg2.jpg'
import productCardImg3 from '../images/product_card_bg3.jpg'
import productCardImg4 from '../images/product_card_bg4.jpg'

import hondaPng1 from '../images/honda-png1.png'
import hondaPng2 from '../images/2018-honda-hr-v-ex-suv-angular-front.webp'


export const STOCK = [
    {
        id: 0,
        category: `car`,
        model: `Fit`,
        year: `2020`,
        image: fit,
        price: {
            total: 18091,
            weekly: 55.83
        }
    },
    {
        id: 1,
        category: `car`,
        model: `Civic Coupe`,
        year: `2020`,
        image: civicCoupe,
        price: {
            total: 23491,
            weekly: 63.97
        }
    },
    {
        id: 3,
        category: `car`,
        model: `Civic Hatchback`,
        year: `2020`,
        image: civicHatchback,
        price: {
            total: 25991,
            weekly: 79.97
        }
    },
    {
        id: 4,
        category: `car`,
        model: `Civic Coupe Si`,
        year: `2020`,
        image: civicCoupeSi,
        price: {
            total: 32091,
            weekly: 95.05
        }
    },
    {
        id: 11,
        category: `trucks/minivan`,
        model: `HR-V`,
        year: `2020`,
        image: hrV,
        price: {
            total: 26371,
            weekly: 77.08
        }
    },
    {
        id: 12,
        category: `trucks/minivan`,
        model: `CR-V`,
        year: `2020`,
        image: crV,
        price: {
            total: 30876,
            weekly: 82.47
        }
    },
    {
        id: 13,
        category: `trucks/minivan`,
        model: `Passport`,
        year: `2020`,
        image: passport,
        price: {
            total: 44676,
            weekly: 127.15
        }
    },
    {
        id: 15,
        category: `trucks/minivan`,
        model: `Odyssey`,
        year: `2021`,
        image: odyssey,
        price: {
            total: 44776,
            weekly: 135.08
        }
    },
    {
        id: 16,
        category: `trucks/minivan`,
        model: `Ridgeline`,
        year: `2020`,
        image: ridgeline,
        price: {
            total: 44676,
            weekly: 131.89
        }
    },
    {
        id: 17,
        category: `hybrid/electric`,
        model: `Accord Hybrid`,
        year: `2020`,
        image: accordHybrid,
        price: {
            total: 36506,
            weekly: 116.27
        }
    },
    {
        id: 18,
        category: `hybrid/electric`,
        model: `Insight Hybrid`,
        year: `2021`,
        image: insightHybrid,
        price: {
            total: 30276,
            weekly: 98.72
        }
    },
    {
        id: 19,
        category: `hybrid/electric`,
        model: `Clarity Plug-in Hybrid`,
        year: `2020`,
        image: clarityPluginHybrid,
        price: {
            total: 46306,
            weekly: 163.47
        }
    }
]


export const NEW_LINEUP_DATA = [
    {
      id: 0,
      name: 'Civic',
      image: civicPng,
      title: 'The 2021 Civic Type R',
      text: 'Limited Edition with a 306-hp turbocharged four-cylinder and a standard six-speed manual transmission.',
      btn: 'Pre-order Now',
      color: '#efaf00'
    },
    {
      id: 1,
      name: 'Insight',
      image: insightPng,
      title: 'The 2021 Honda Insight',
      text: "A hybrid the blends refined power and styling with trusted fuel efficiency ratings to deliver a driving experience you'll have to see to believe.",
      btn: 'Find your colour',
      color: '#D60C19'
    },
    {
      id: 2,
      name: 'Accord',
      image: accordPng,
      title: '2021 Honda Accord',
      text: 'With a 48 city/48 highway EPA mpg rating and electrifying driving dynamics, the Accord Hymbrid is an ingenious fusion of efficiency and performance.',
      btn: 'Buy yours Today',
      color: '#424fc6'
    },
    {
      id: 3,
      name: 'Pilot',
      image: pilotPng,
      title: '2021 Honda Pilot SUV',
      text: "Available in both Crystal Black Pearl and Platinum White Pearl, the Honda Pilot Black Edition brings the attitude and everything else you'll need.",
      btn: 'Learn More',
      color: '#333'
    },
  ]
  

export const ANIMATED_PRODUCT_CARD_DATA = [
    {
        id: 0,
        tagline: '2020 Passport',
        title: 'The Adventurer',
        background: productCardImg1,
        car: hondaPng1,
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
        background: productCardImg2,
        car: hondaPng2,
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
        background: productCardImg3,
        car: accordPng,
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
        background: productCardImg4,
        car: hondaPng2,
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
        background: productCardImg3,
        car: insightPng,
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
        background: productCardImg4,
        car: pilotPng,
        features: [
            'Active cruise with stop and go',
            'Steering and lane control',
            'Massage function for driver and passanger'
        ]
    }
]