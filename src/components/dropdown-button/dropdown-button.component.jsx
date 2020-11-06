import React from 'react'

import {DropdownContainer, Arrows} from './dropdown-button.styles'

const DropdownButton = ({handleClick, children}) => {
    return (
     <DropdownContainer onClick = {() => handleClick()}>
        {children}
        <Arrows/>
    </DropdownContainer>
    )
}

export default DropdownButton;