import * as React from 'react'
import styledComponents from 'styled-components'

import { TextColor } from '../../utils/colors'

const CardDivider = styledComponents.hr`
  background: ${TextColor};
  color: ${TextColor};
`

export default CardDivider
