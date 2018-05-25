import * as React from 'react'
import Link from 'gatsby-link'

import styledComponents from 'styled-components'

const BaseLink = styledComponents.li`
  font-size: 1.25rem;
  border-top: 2px solid;
  border-color: transparent;

  &:hover {
    border-color: inherit;
  }
`

export default (props: { label: string, to: string, onClick: () => void }) => {
  return (
    <BaseLink onClick={props.onClick}>
      <Link to={props.to} style={{color: 'inherit'}}>{props.label}</Link>
    </BaseLink>
  )
}
