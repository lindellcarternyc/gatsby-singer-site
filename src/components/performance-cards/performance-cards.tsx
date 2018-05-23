import * as React from 'react'

import Grid from '../grid'
import PerformanceCard from './performance-card'

import { PerformanceModel } from '../../models/performance-model'

interface PerformanceCardsProps {
  performances: PerformanceModel[]
}
const PerformanceCards =  (props: PerformanceCardsProps) => {
  return (
    <Grid>
      {props.performances.map(( perf, idx ) => {
        return <PerformanceCard key={idx} performance={perf} />
      })}
    </Grid>
  )
}

export default PerformanceCards
