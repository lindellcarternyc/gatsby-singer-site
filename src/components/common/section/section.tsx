import * as React from 'react'

import styledComponents from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

import SectionTitle from './section-title'

import { TextColor, AccentBackgroundColor } from '../../../utils/colors'

const Container = styledComponentsTS<{accent?: boolean}>(styledComponents.section)`
  margin-bottom: 1rem;
  padding: 1rem;
  overflow: hidden;
  background: ${props => props.accent ? AccentBackgroundColor : 'white'}
`

export interface SectionProps {
  children?: React.ReactNode
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
