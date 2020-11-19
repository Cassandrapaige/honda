import React from 'react'

import Text from '../text/text.component';
import FadeInContainer from '../fade-in-container/fade-in-container.component'

import {ContentWrapper, HeaderInfo, Title} from './container.styles';

const Container = ({title, text, children}) => (
    <ContentWrapper>
        <FadeInContainer>
            <HeaderInfo>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </HeaderInfo>
        </FadeInContainer>
        {children}
    </ContentWrapper>
)

export default Container;