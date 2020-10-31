import React from 'react'

import {Button} from './cta-button.styles'

const CtaButton = ({href, text}) => (
    <Button to= {href}>
        {text}
    </Button>
)

export default CtaButton;