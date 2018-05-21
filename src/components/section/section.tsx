import * as React from 'react'

import styledComponents from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

import SectionTitle from './section-title'

import { AccentColor } from '../../utils/colors'

const Container = styledComponentsTS<{accent?: boolean}>(styledComponents.section)`
  border: 1px solid;
  margin-bottom: 1rem;
  padding: 1rem;
  background: ${props => props.accent ? AccentColor : 'white'}
  color: ${props => props.accent ? 'white' : 'inherit'}
`

interface SectionProps {
  children: React.ReactNode
  title?: string
  accent?: boolean
}
export default (props: SectionProps) => {
  return (
    <Container accent={props.accent}>
      {props.title !== undefined && (
        <div>
          <SectionTitle title={props.title} />
        </div>
      )}
      {props.children}
    </Container>
  )
}
