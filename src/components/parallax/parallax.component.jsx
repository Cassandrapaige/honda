import React from 'react'
import OverlayContainer from '../overlay-container/overlay-container.component'

import {FixedContainer} from './parallax.styles'
import Container from '../container/container.component'

const Parralax = ({children, ...rest}) => (
    <FixedContainer {...rest}>
        <OverlayContainer style= {styles.overlay}>
            <Container>
                {children}
            </Container>
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