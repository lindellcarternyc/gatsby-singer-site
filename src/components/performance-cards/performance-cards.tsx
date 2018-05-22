import * as React from 'react'
import styledComponents from 'styled-components'

import Grid from '../grid'
import PerformanceCard from './performance-card'

import { PerformanceModel } from '../../models/performance-model'

interface PerformanceCardsProps {
  performances: PerformanceModel[]
}
export default (props: PerformanceCardsProps) => {
  return (
    <Grid>
      {props.performances.map(( perf, idx ) => {
        const column: undefined | 2 = (idx === props.performances.length - 1) && idx % 2 === 0
          ? 2 : undefined
        return <PerformanceCard key={idx} performance={perf} column={column}/>
      })}
    </Grid>
  )
}

