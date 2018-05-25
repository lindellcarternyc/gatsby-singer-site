import * as React from 'react'

import styledComponents from 'styled-components'

const SectionTitle = styledComponents.h3`
  border-top: 2px solid;
  display: inline-block;
  margin: 0;
`

export default (props: { title: string }) => {
  return (
    <SectionTitle>{props.title}</SectionTitle>
  )
}
