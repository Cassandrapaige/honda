import React from 'react'

import Text from '../text/text.component';
import FadeInContainer from '../fade-in-container/fade-in-container.component'

import {ContentWrapper, HeaderInfo, Title} from './container.styles';
import AccentTitle from '../accent-title/accent-title.component';

const Container = ({title, text, children}) => (
    <ContentWrapper>
        <HeaderInfo>
            <FadeInContainer>
                <AccentTitle heading>{title}</AccentTitle>
                <Text>{text}</Text>
            </FadeInContainer>
        </HeaderInfo>
        {children}
    </ContentWrapper>
)

export default Container;