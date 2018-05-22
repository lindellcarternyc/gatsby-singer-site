import * as React from 'react'

import { DatesModel } from '../../../models/dates-model'

import { CardTitle, CardSubtitle, CardDates, CardDivider } from './'

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
