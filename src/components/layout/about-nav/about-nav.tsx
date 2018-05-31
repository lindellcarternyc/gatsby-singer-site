import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import styledTS from 'styled-components-ts'

import { TextColor } from '../../../utils/colors'


const AboutNavList = styled.ul`
  background: white;
  display: flex;
  list-style: none;
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 0;
  padding-left: 1rem;
`

import Tab from '../tab-nav/tab'

const AboutNav = (): JSX.Element => {
  return (
    <nav>
      <AboutNavList>
        <Tab to="/about/" label="Bio"/>
        <Tab to="/about/resume/" label="Resume" />
        <Tab to="/about/repertoire/" label="Repertoire" />
      </AboutNavList>
    </nav>
  )
}

export default AboutNav
