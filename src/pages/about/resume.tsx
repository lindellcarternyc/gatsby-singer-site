import * as React from 'react'
import styled from 'styled-components'
import styledType from 'styled-components-ts'
import { Section } from '../../components/section'

import ResumeTable from '../../components/about/resume'

interface ResumePageProps {
  data: {
    allResumeJson: {
      edges: Array<{
        node: {
          role: string
          company: string
          date: string
          opera: string
        }
      }>
    }
  }
}
const ResumePage = (props: ResumePageProps) => {
  const { data } = props
  const entries = data.allResumeJson.edges.map(edge => edge.node)
  return (
    <Section>
      <ResumeTable entries={entries}/>
    </Section>
  )
}

export default ResumePage

export const query = graphql`
  query ResumePageQuery {
    allResumeJson {
      edges {
        node {
          role
          company
          date
          opera
        }
      }
    }
  }
`
