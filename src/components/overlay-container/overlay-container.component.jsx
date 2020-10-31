import React from 'react'

import {WrapperOverlay} from './overlay-container.styles'

export const OverlayContainer = ({children, ...rest}) => {
    return (
        <WrapperOverlay {...rest}>
            {children}
        </WrapperOverlay>
    )
}

export default OverlayContainer;