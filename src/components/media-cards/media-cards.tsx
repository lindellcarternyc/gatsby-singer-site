import * as React from 'react'

import Grid from '../common/grid'
import MediaCard from './media-card'

import { MediaModel } from '../../models/media-model'

interface MediaCardsProps {
  mediaList: MediaModel[]
}
const MediaCards = (props: MediaCardsProps) => {
  return (
    <Grid>
      {props.mediaList.map(( media, idx ) => {
        return <MediaCard key={idx} { ...media } />
      })}
    </Grid>
  )
}

export default MediaCards
