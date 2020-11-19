import React from 'react'

import {Button} from './cta-button.styles'

const CtaButton = ({href, text, ...rest}) => (
    <Button to= {href} {...rest}>
        {text}
    </Button>
)

export default CtaButton;