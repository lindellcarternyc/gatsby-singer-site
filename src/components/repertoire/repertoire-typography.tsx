import * as React from 'react'
import styled from 'styled-components'

import { TextColor } from '../../utils/colors'

export const ComposerName = styled.h3`
  border-top: 1px solid ${TextColor};
  font-weight: bold;
  margin: 0;
`

export const Text = styled.p`
  margin: 0;
  font-size: 0.95rem;
`

export const OperaTitle = Text.extend`
  font-weight: bold;
  font-style: italic;
`
export const OperaRoles = (props: { roles: string[] }) => {
  return (
    <Text>{props.roles.join(', ')}</Text>
  )
}
