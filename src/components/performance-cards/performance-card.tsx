import * as React from 'react'

import styledComponents from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

// Models
import {
  PerformanceModel, PerformanceDatesModel
} from '../../models/performance-model'

// Utils
import { Tablet } from '../../utils/breakpoints'

const typography = require('../../utils/typography')
const bodyColor = typography.options.bodyColor

// Components
const Container = styledComponentsTS<{column?: number}>(styledComponents.div)`
  border: 1px solid ${bodyColor};
  text-align: center;
  padding: 1rem;

  @media(min-width: ${Tablet}) {
    grid-column-end: span 2;
    grid-column-start: ${props => props.column}
  }
`

const Text = styledComponents.p`
  margin: 0;
`

const DateText = Text.extend`
  font-size: 0.75rem;
  font-weight: bold;
`

const Title = styledComponents.h3`
  margin: 0.25rem;
`
const SubTitle = styledComponents.h4`
  margin: 0.5rem;
`

const Divider = styledComponents.hr`
  background: ${bodyColor};
  color: ${bodyColor};
`

const Button = styledComponents.button`
  border: 1px solid ${bodyColor};
  background: transparent;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-top: 0.5rem;
`

const Dates = (props: { month: string, days: string[] }) => {
  return <DateText>{props.month} | {props.days.join(', ')}</DateText>
}
const Year = (props: { year: string }) => (
  <DateText>{props.year}</DateText>
)


const PerformanceDates = (props: PerformanceDatesModel) => {
  return (
    <div>
      <Dates month={props.month} days={props.days} />
      <Year year={props.year}/>
    </div>
  )
}

interface PerformanceCardProps {
  performance: PerformanceModel
  column?: number
}
export default (props: PerformanceCardProps) => {
  const {
    dates, title, subtitle, location, venue
  } = props.performance

  return (
    <Container column={props.column}>
      <PerformanceDates { ...dates }/>
      <Title>{title}</Title>
      {subtitle !== undefined && <SubTitle>The Duke</SubTitle>}
      <Divider />
      <Text>{venue}</Text>
      <Text>{location.city}, {location.region}</Text>
      <Button>More Info</Button>
    </Container>
  )
}
