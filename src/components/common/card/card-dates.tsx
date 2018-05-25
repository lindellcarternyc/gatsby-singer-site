import * as React from 'react'

import { CardMetaText } from './card-typograghy'

import { DatesModel } from '../../../models/dates-model'

const CardDates = (props: DatesModel) => {
  return (
    <div>
      <CardMetaText>{props.month} | {props.days.join(', ')}</CardMetaText>
      <CardMetaText>{props.year}</CardMetaText>
    </div>
  )
}

export default CardDates
