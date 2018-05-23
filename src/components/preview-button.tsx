import * as React from 'react'
import styledComponents from 'styled-components'

import { TextColor } from '../utils/colors'

const Button = styledComponents.button`
  outline: 0;
  border: 0;
  background: transparent;
  font-size: 0.85rem;
  padding: 0;
`

const Arrow = () => {
  // positions
  const y = 16

  // dimensions
  const width = 80
  const height = 22

  return (
    <div
      style={{
        display: 'inline-block',
        marginLeft: '0.25rem'
      }}
    >
      <svg
        width={width}
        height={height}
      >
        <line
          x1={0}
          x2={width}
          y1={y}
          y2={y}
          stroke={TextColor}
          strokeWidth={1}
        />
        <line
          x1={width - 10}
          x2={width}
          y1={y - 5}
          y2={y}
          stroke={TextColor}
          strokeWidth={1}
        />
        <line
          x1={width - 10}
          x2={width}
          y1={y + 5}
          y2={y}
          stroke={TextColor}
          strokeWidth={1}
        />
      </svg>
    </div>
  )
}

export default (props: { label: string }) => {
  return (
    <Button>{props.label}<Arrow /></Button>
  )
}
