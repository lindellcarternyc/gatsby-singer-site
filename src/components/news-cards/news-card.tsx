import * as React from 'react'

import Card, { CardHeader, CardText } from '../common/card'

import { NewsModel } from '../../models/news-model'

const NewsCard = (props: NewsModel): JSX.Element => {
  const { title, subtitle, content, date } = props
  return (
    <Card
      accent
      render={() => {
        return (
          <div>
            <CardHeader
              title={title}
              subtitle={subtitle}
              meta={{
                dates: date
              }}
            />
            <CardText>{content}</CardText>
          </div>
        )
      }}
    />
  )
}

export default NewsCard
