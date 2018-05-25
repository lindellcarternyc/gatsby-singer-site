import * as React from 'react'

import styledComponents from 'styled-components'

const Header = styledComponents.h2`
  color: white;
  margin: 0;
`

const Details = styledComponents.p`
  font-size: 0.75rem;
  margin: 0;
`

const Icons = styledComponents.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 300px;
  margin: 1rem auto;
`

const IconWrapper = styledComponents.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 1px solid white;
  border-radius: 50%;
`

const Footer = (): JSX.Element => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        textAlign: 'center',
        color: 'white'
      }}
    >
      <Header>Lindell Carter</Header>
      <Icons>
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
      </Icons>
      <div>
        <Details>&copy; 2018 Lindell Carter. All Rights Reserved.</Details>
        <Details>Coded with love by Lindell Carter</Details>
      </div>
    </div>
  )
}

export default Footer
