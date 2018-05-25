import * as React from 'react'
import styledComponents from 'styled-components'

import HeaderButton from './header-button'

const Container = styledComponents.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 2;
`

const Wrapper = styledComponents.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  z-index: 2;
`

const Title = styledComponents.h1`
  margin: 0;
`

export {
  HeaderButton,
  Container,
  Wrapper,
  Title
}
