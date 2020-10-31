import React from 'react'

import { Title } from './accent-title.styles'

const AccentTitle = ({children, ...rest}) => {
    return (
        <Title {...rest}>{children}</Title>
    )
}

export default AccentTitle;