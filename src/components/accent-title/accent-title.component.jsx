import React from 'react'
import {useSpring, config} from 'react-spring'

import { Title, Strike } from './accent-title.styles'

const AccentTitle = ({children}) => {
    const props = useSpring({
        from : {
            opacity: 0,
            width: '0px',
        },
        to: {
            opacity: 1,
            width: '40px',
        },
        config: config.wobbly,
        duration: 500,
        delay: 1000
    });

    return (
        <Title>
            <Strike style = {props} />
            {children}
        </Title>
    )
}

export default AccentTitle;