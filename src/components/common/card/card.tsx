import * as React from 'react'
import styledComponents   from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

// Utils
import { Tablet } from '../../../utils/breakpoints'
import { TextColor, AccentBackgroundColor } from '../../../utils/colors'


const Container = styledComponentsTS<{accent?: boolean}>(styledComponents.div)`
  text-align: center;
  padding: 1rem;
  background: ${props => props.accent ? AccentBackgroundColor : 'white'}
`

interface CardProps {
  render: () => JSX.Element | JSX.Element[]
  accent?: boolean
}
export default (props: CardProps) => (
  <Container accent={props.accent}>
    {props.render()}
  </Container>
)
