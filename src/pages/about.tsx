import * as React from 'react'

import { Section } from '../components'

import Data from '../data'
const { about } = Data

const AboutPage = (): JSX.Element => {
  return (
    <Section title="About Lindell">
      {about.text.map(line => {
        return <p key={line}>{line}</p>
      })}
    </Section>
  )
}

export default AboutPage
