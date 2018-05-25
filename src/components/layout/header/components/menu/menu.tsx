import * as React from 'react'

import styledComponents from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

import MenuLink from './menu-link'

const Wrapper = styledComponentsTS<{ isOpen: boolean }>(styledComponents.div)`
  position: fixed;
  width: 100%;
  height: calc(100% - 40px);
  top: ${props => props.isOpen ? '40px' : '-100%'}
  background: white;
  transition: top 0.3s ease-in;
  z-index: 1;
`

const NavList = styledComponents.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

interface MenuProps {
  isOpen: boolean
  close: () => void
}
export default (props: MenuProps) => {
  return (
    <Wrapper isOpen={props.isOpen} >
      <NavList>
        <MenuLink label="About" to="/about/" onClick={props.close}/>
        <MenuLink label="Performances" to="/performances/" onClick={props.close}/>
        <MenuLink label="Watch & Listen" to="/watch-&-listen/" onClick={props.close}/>
        <MenuLink label="News" to="/news/" onClick={props.close} />
      </NavList>
    </Wrapper>
  )
}
