import * as React from 'react'

import styledComponents from 'styled-components'

import '../../../assets/css/hamburger.css'

const Button = styledComponents.button`
  margin-top: 0.5rem;
`

const HeaderButton = (props: { isActive: boolean, onClick: () => void }) => {
  const className = 'hamburger hamburger--stand '
  return (
    <Button
      className={className + `${props.isActive ? 'is-active' : ''}`}
      onClick={props.onClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </Button>
  )
}

export default HeaderButton
