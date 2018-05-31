import * as React from 'react'
import styled from 'styled-components'

import Video from '../../components/video/video'

interface VideosJson {
  edges: Array<{
    node: {
      url: string
    }
  }>
}
interface VideoPageProps {
  data: {
    allVideosJson: VideosJson
  }
}
const VideoPage = (props: VideoPageProps): JSX.Element => {

  const width = 560
  const height = 315
  const { data } = props

  const { allVideosJson } = data
  const videos = allVideosJson.edges.map(edge => {
    const url = edge.node.url

    return <Video key={url} url={url} />
  })
  return (
    <div>{videos}</div>
  )
}

export default VideoPage

export const query = graphql`
  query VideoPageQuery {
    allVideosJson {
      edges {
        node {
          url
        }
      }
    }
  }
`
