import { NewsModel } from '../models/news-model'

const NewsItem1: NewsModel = {
  title: 'Lindell goes somewhere',
  subtitle: 'It will be somehere',
  date: {
    year: '2018',
    month: 'Apr',
    days: ['15']
  },
  content: `
    Lindell is very excited to do some things. He thinks that it will be great. Yay!
  `
}

const News = [
  { ...NewsItem1 },
  { ...NewsItem1 },
  { ...NewsItem1 },
  { ...NewsItem1 }
]

export default News
