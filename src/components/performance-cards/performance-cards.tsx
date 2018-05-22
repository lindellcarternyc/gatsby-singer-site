import * as React from 'react'

import styledComponents from 'styled-components'

import { PerformanceModel } from '../../models/performance-model'

import PerformanceCard from './performance-card'

import { Tablet } from '../../utils/breakpoints'

interface PerformanceCardsProps {
  performances: PerformanceModel[]
}

const Wrapper = styledComponents.div`
  margin-top: 1rem;
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  grid-template-columns: 100%;

  @media(min-width: ${Tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

// const cards: JSX.Element[]
export default (props: PerformanceCardsProps) => {
  return (
    <Wrapper>
      {props.performances.map(( perf, idx ) => {
        const column: undefined | 2 = (idx === props.performances.length - 1) && idx % 2 === 0
          ? 2 : undefined
        return <PerformanceCard key={idx} performance={perf} column={column}/>
      })}
    </Wrapper>
  )
}

