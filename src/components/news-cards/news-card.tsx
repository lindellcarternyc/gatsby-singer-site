import * as React from 'react'

import Card, { CardHeader, CardText } from '../card'

import { NewsModel } from '../../models/news-model'

const NewsCard = (props: NewsModel): JSX.Element => {
  const { title, subtitle, content, date } = props
  return (
    <Card accent>
      <CardHeader
        title={title}
        subtitle={subtitle}
        meta={{
          dates: date
        }}
      />
      <CardText>{content}</CardText>
    </Card>
  )
}

export default NewsCard
