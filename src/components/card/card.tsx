import * as React from 'react'
import styledComponents   from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

// Utils
const typography = require('../../utils/typography')
const { options } = typography
const { bodyColor } = options

import { Tablet } from '../../utils/breakpoints'


const Container = styledComponentsTS<{column?: number}>(styledComponents.div)`
  border: 1px solid ${bodyColor};
  text-align: center;
  padding: 1rem;

  @media(min-width: ${Tablet}) {
    grid-column-end: span 2;
    grid-column-start: ${props => props.column}
  }
`

interface CardProps {
  children: React.ReactNode
  column?: number
}
export default (props: CardProps) => (
  <Container column={props.column}>
    {props.children}
  </Container>
)
