import * as React from 'react'

import {Section} from '../../components/common/section'

interface AboutPageProps {
  data: {
    allAboutTextJson: {
      edges: Array<{
        node: {
          line: string
        }
      }>
    }
  }
  location: { pathname: string }
}
const AboutPage = (props: AboutPageProps): JSX.Element => {
  const { data, location } = props
  const { allAboutTextJson } = data
  return (
    <Section title="About Lindell">
      {allAboutTextJson.edges.map(edge => {
        const line = edge.node.line
        return <p key={line}>{line}</p>
      })}
    </Section>
  )
}

export default AboutPage


export const query = graphql`
  query AboutPageQuery {
    allAboutTextJson {
      edges {
        node {
          line
        }
      }
    }
  }
`
