import * as React from 'react'
import Link, { GatsbyLinkProps}  from 'gatsby-link'
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

import AboutNavLink from './about-nav-link'

const AboutNav = (): JSX.Element => {
  return (
    <nav>
      <AboutNavList>
        <AboutNavLink to="/about/" label="Bio"/>
        <AboutNavLink to="/about/resume/" label="Resume" />
        <AboutNavLink to="/about/repertoire/" label="Repertoire" />
      </AboutNavList>
    </nav>
  )
}

export default AboutNav
