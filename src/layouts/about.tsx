import * as React from 'react'

import AboutNav from '../components/about/nav/about-nav'

interface AboutLayoutProps {
  children: () => React.ReactNode
}
const AboutLayout = (props: AboutLayoutProps) => {
  return (
    <div>
      <AboutNav />
      {props.children()}
    </div>
  )
}

export default AboutLayout
