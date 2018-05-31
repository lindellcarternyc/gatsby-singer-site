import * as React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { TextColor } from '../../../utils/colors'


const Tabs = styled.ul`
  background: white;
  display: flex;
  list-style: none;
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 0;
  padding-left: 1rem;
`

import Tab, { TabProps } from '../tab-nav/tab'

export interface TabNavProps {
  tabs: TabProps[]
}
const TabNav = (props: TabNavProps): JSX.Element => {
  const tabs = props.tabs.map(tab => {
    return <Tab key={JSON.stringify(tab)} {...tab} />
  })
  return (
    <nav>
      <Tabs>
        {tabs}
      </Tabs>
    </nav>
  )
}

export default TabNav
