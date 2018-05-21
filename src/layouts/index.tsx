import * as React from 'react'

import Helmet from 'react-helmet'

import Header from '../components/header'
// import './index.css'

interface LayoutProps {
  children: () => React.ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}
const Layout = (props: LayoutProps) => (
  <div>
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
        paddingTop: 0
      }}
    >
      {props.children()}
    </div>
  </div>
)


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
