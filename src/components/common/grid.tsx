import * as React from 'react'
import styledComponents from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

// Utils
import { Tablet } from '../../utils/breakpoints'

const Column = styledComponentsTS<{column?: number}>(styledComponents.div)`
  @media(min-width: ${Tablet}) {
    grid-column-end: span 2;
    grid-column-start: ${props => props.column}
  }
`

const Wrapper = styledComponents.div`
  margin-top: 1rem;
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-columns: 100%;

  @media(min-width: ${Tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export default (props: { children: React.ReactNode }) => {
  const count = React.Children.count(props.children)
  const columns = React.Children.map(props.children, (child, idx) => {
    const column = (idx === count - 1 && count % 2 !== 0)
      ? 2 : undefined
    return <Column key={idx} column={column}>{child}</Column>
  })
  return <Wrapper>{columns}</Wrapper>
}
