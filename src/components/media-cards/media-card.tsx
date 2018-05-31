import * as React from 'react'

import styledComponents from 'styled-components'

import Card, { CardHeader, CardButton, CardDetails } from '../common/card'

import MediaButton from './media-button'
import MediaImage from './media-image'

import { Video } from '../video'

import { MediaModel, MediaType } from '../../models/media-model'

const MediaWrapper = styledComponents.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 0;
`

const MediaCard = (props: MediaModel): JSX.Element => {
  const {
    title, subtitle, date, url, details, type
  } = props
  console.log(props)
  return (
    <Card
      render={() => {
        return (
          <div>
            <CardHeader
              title={title}
              subtitle={subtitle}
              meta={{ dates: date }}
            />
            <MediaWrapper>
              {type === MediaType.Video &&
                <Video url={url} />
              }
              {type === MediaType.Audio &&
                <>
                  <MediaImage src={url} alt={url} />
                  <MediaButton />
                </>
              }
            </MediaWrapper>
            {details !== undefined && <CardDetails details={details} />}
          </div>
        )
      }}
    />
  )
}

export default MediaCard
