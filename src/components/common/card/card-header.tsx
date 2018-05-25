import * as React from 'react'

import { DatesModel } from '../../../models/dates-model'

import CardDates from './card-dates'
import CardDivider from './card-divider'
import { CardTitle, CardSubtitle } from './card-typograghy'

interface CardHeaderProps {
  title: string
  subtitle?: string
  meta?: { dates: DatesModel }
}

const CardHeader = (props: CardHeaderProps) => {
  const { meta, title, subtitle } = props
  return (
    <div>
      {meta !== undefined && <CardDates { ...meta.dates } />}
      <CardTitle>{title}</CardTitle>
      {subtitle !== undefined && <CardSubtitle>{subtitle}</CardSubtitle>}
      <CardDivider />
    </div>
  )
}

export default CardHeader
