import * as React from 'react'

import Helmet from 'react-helmet'

import { Header, AboutNav, Footer } from '../components/layout'
import TabNavigation, { TabNavProps } from '../components/layout/tab-nav/tab-nav'

import { TextColor } from '../utils/colors'

const AboutNavProps: TabNavProps = {
  tabs: [
    {
      to: '/about/',
      label: 'Bio'
    },
    {
      to: '/about/resume/',
      label: 'Resume'
    },
    {
      to: '/about/repertoire/',
      label: 'Repertoire'
    }
  ]
}

const WatchAndListenNavProps: TabNavProps = {
  tabs: [
    {
      to: '/watch-&-listen/videos',
      label: 'Videos'
    }
  ]
}

const renderTabNav = (pathname: string): JSX.Element | null => {
  let props: TabNavProps | null = null
  if ( pathname.startsWith('/about/')) {
    props = AboutNavProps
  } else if ( pathname.startsWith('/watch-&-listen/') ) {
    props = WatchAndListenNavProps
  }
  if ( props === null ) {
    return null
  }
  return <TabNavigation { ...props }/>
}

interface LayoutProps {
  children: () => React.ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: {
    pathname: string
  }
}
const Layout = (props: LayoutProps) => {
  return (
    <div
      style={{
        background: TextColor,
        height: '100%',
        minHeight: '100vh',
        paddingBottom: '2rem'
      }}
    >
      <Helmet
        title={props.data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header siteTitle={props.data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: '55px'
        }}
      >
        {renderTabNav(props.location.pathname)}
        {props.children()}
      </div>
      <Footer />
    </div>
  )
}


export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
