import * as React from 'react'
import styledComponents from 'styled-components'

export const CardTitle = styledComponents.h3`
  margin: 0.25rem;
`

export const CardSubtitle = styledComponents.h4`
  margin: 0.5rem;
`

export const CardText = styledComponents.p`
  margin: 0;
`

export const CardMetaText = CardText.extend`
  font-size: 0.75rem;
  font-weight: bold;
`
export const CardDetails = (props: { details: string[]}) => {
  return (
    <div>
      {props.details.map((detail, idx) => {
        return <CardMetaText key={idx}>{detail}</CardMetaText>
      })}
    </div>
  )
}
