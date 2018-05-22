import * as React from 'react'
import styledComponents from 'styled-components'

const typography = require('../../../utils/typography')
const bodyColor = typography.options.bodyColor

const CardDivider = styledComponents.hr`
  background: ${bodyColor};
  color: ${bodyColor};
`

export default CardDivider
