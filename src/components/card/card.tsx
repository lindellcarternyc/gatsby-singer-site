import * as React from 'react'
import styledComponents   from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

// Utils
import { Tablet } from '../../utils/breakpoints'
import { TextColor } from '../../utils/colors'


const Container = styledComponents.div`
  border: 1px solid ${TextColor};
  text-align: center;
  padding: 1rem;
`

interface CardProps {
  children: React.ReactNode
}
export default (props: CardProps) => (
  <Container>
    {props.children}
  </Container>
)
