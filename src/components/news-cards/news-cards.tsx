import * as React from 'react'

import Grid from '../common/grid'
import NewsCard from './news-card'

import { NewsModel } from '../../models/news-model'

interface NewsCardsProps {
  news: NewsModel[]
}
const NewsCards = (props: NewsCardsProps): JSX.Element => {
  return (
    <Grid>
      {props.news.map((news, idx) => {
        return <NewsCard key={idx} { ...news }/>
      })}
    </Grid>
  )
}

export default NewsCards
