import React from 'react'
import OverlayContainer from '../overlay-container/overlay-container.component'

import {FixedContainer, ParallaxContent} from './parallax.styles'

const Parralax = ({children, ...rest}) => (
    <FixedContainer {...rest}>
        <OverlayContainer dark style= {styles.overlay}>
            <ParallaxContent>
                {children}
            </ParallaxContent>
        </OverlayContainer>
    </FixedContainer>
)

const styles = {
    overlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center"
    }
}

export default Parralax;