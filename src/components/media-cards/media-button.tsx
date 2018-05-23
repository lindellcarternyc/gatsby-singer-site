import * as React from 'react'
import styledComponents from 'styled-components'

const Button = styledComponents.button`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 40px; height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  background: transparent;
  color: white;
`

const MediaButton = (): JSX.Element => {
  return (
    <Button>P</Button>
  )
}

export default MediaButton
