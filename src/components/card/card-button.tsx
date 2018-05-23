import * as React from 'react'
import styledComponents from 'styled-components'

import { TextColor } from '../../utils/colors'

const Button = styledComponents.button`
border: 1px solid ${TextColor};
background: transparent;
font-size: 0.75rem;
text-transform: uppercase;
margin-top: 0.5rem;
`

interface CardButtonProps {
  label: string
}

const CardButton = (props: CardButtonProps): JSX.Element => {
  return <Button>{props.label}</Button>
}

export default CardButton
