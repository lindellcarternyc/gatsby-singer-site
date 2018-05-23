import * as React from 'react'

import {
  Grid, Card, MediaCards,
  PerformanceCards,
  PreviewButton,
  Section
} from '../components'

import Data from '../data'
const { performances, media } = Data


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
      <MediaCards mediaList={media} />
    </Section>
    <Section title="News">
      <PreviewButton label="See All Latest News" />
    </Section>
  </div>
)

export default IndexPage
