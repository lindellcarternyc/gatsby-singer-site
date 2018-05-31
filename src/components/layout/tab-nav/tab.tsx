import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { TextColor } from '../../../utils/colors'

const StyledLink = styled(Link)`
  margin-right: 1rem;
  border-top: 2px solid transparent;
  color: ${TextColor} !important;
  &:hover {
    border-color: ${TextColor}
  }
`

export interface TabProps {
  to: string
  label: string
}
const Tab = (props: TabProps): JSX.Element => {
  return (
    <StyledLink
      to={props.to}
      activeStyle={{
        borderColor: TextColor
      }}
      exact
    >
      {props.label}
    </StyledLink>
  )
}

export default Tab
