import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
`

const Frame = styled.iframe`
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface VideoProps {
  url: string
}

const Video = (props: VideoProps): JSX.Element => {
  const { url } = props
  return (
    <Container>
      <Frame
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        src="https://www.youtube.com/embed/T-EB891PZuc"
      />
    </Container>
  )
}

export default Video
