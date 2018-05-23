import * as React from 'react'

import Helmet from 'react-helmet'

import { Header, Footer } from '../components'
// import './index.css'

import { TextColor } from '../utils/colors'

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
      {props.children()}
    </div>
    <Footer />
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
