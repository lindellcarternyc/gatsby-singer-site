import * as React from 'react'

import styledComponents from 'styled-components'
import styledComponentsTS from 'styled-components-ts'

// Models
import { PerformanceModel } from '../../models/performance-model'

// Utils
import { Tablet } from '../../utils/breakpoints'

// Components
import Card, {
  CardButton,
  CardHeader,
  CardText
} from '../common/card'

interface PerformanceCardProps {
  performance: PerformanceModel
}
const PerformanceCard = (props: PerformanceCardProps) => {
  const {
    dates, title, subtitle, location, venue
  } = props.performance

  return (
    <Card
      render={() => {
          return (
            <div>
              <CardHeader
                title={title}
                meta={{ dates }}
                subtitle={subtitle}
              />
              <CardText>{venue}</CardText>
              <CardText>{location.city}, {location.region}</CardText>
              <CardButton label="More Info" />
            </div>
          )
      }}
    />
  )
}

export default PerformanceCard
