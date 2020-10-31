import styled from 'styled-components'
import {easings} from '../../constants/styles'
import {animated} from 'react-spring'

export const AnimatedContainer = styled(animated.div)`
transition: all .7s ${easings.elastic};
transition-delay: ${({delay}) => `${delay}s`};
`