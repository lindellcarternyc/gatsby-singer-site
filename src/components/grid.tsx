import * as React from 'react'
import styledComponents from 'styled-components'

// Utils
import { Tablet } from '../utils/breakpoints'

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
  return <Wrapper>{props.children}</Wrapper>
}
