import React from 'react'

import {Text} from './title.styles'

const Title = ({children, ...rest}) => ( 
    <Text {...rest}> {children} </Text> 
)

export default Title;