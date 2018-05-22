import * as React from 'react'

import {
  PreviewButton,
  Section
} from '../components'

const IndexPage = () => (
  <div>
    <Section accent>
      About
    </Section>
    <Section title="Performances">
      <PreviewButton label="See All Performances" />
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
