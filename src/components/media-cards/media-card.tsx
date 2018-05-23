import * as React from 'react'

import styledComponents from 'styled-components'

import Card, { CardHeader, CardButton, CardDetails} from '../card'

import MediaButton from './media-button'
import MediaImage from './media-image'

import { MediaModel } from '../../models/media-model'

const MediaWrapper = styledComponents.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 0;
`

const MediaCard = (props: MediaModel): JSX.Element => {
  const {
    title, subtitle, date, image, details
  } = props
  return (
    <Card>
      <CardHeader
        title={title}
        subtitle={subtitle}
        meta={{ dates: date }}
      />
      <MediaWrapper>
        <MediaImage src={image} alt={image} />
        <MediaButton />
      </MediaWrapper>
      {details !== undefined && <CardDetails details={details} />}
    </Card>
  )
}

export default MediaCard
