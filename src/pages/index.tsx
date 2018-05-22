import * as React from 'react'

import {
  PerformanceCards,
  PreviewButton,
  Section
} from '../components'

import Data from '../data'
const { performances } = Data


const IndexPage = () => (
  <div>
    <Section accent>
      About
    </Section>
    <Section title="Performances">
      <PreviewButton label="See All Performances" />
      <PerformanceCards performances={performances} />
    </Section>
    <Section title="Watch & Listen">
      <PreviewButton label="See All Videos and Recordings" />
    </Section>
    <Section title="News">
      <PreviewButton label="See All Latest News" />
    </Section>
  </div>
)

export default IndexPage
