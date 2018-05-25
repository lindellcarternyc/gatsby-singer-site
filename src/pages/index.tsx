import * as React from 'react'

import {
  Preview
} from '../components'

import { Section, SectionProps } from '../components/common/section'

import Data from '../data'
const { performances, media } = Data
import { NewsModel } from '../models/news-model'

interface NewsJson {
  edges: Array<{
    node: {
      title: string
      subtitle: string
      date: {
        year: string
        month: string
        days: Array<{
          day: string
        }>
      }
      content: string
    }
  }>
}

interface IndexPageProps {
  data: {
    allNewsJson: NewsJson
  }
}

const parseNews = (data: NewsJson): NewsModel[] => {
  const { edges } = data

  return edges.map(({ node }) => {
    const { title, subtitle, date, content } = node
    const { year, month, days } = date
    return {
      title,
      subtitle,
      content,
      date: {
        year,
        month,
        days: days.map(d => d.day)
      }
    }
  })
}



const IndexPage = (props: IndexPageProps) => {
  const { data } = props

  const {
    allNewsJson
  } = data
  const news = parseNews(allNewsJson)

  return (
    <div>
      <Preview
        title="Performances"
        previewLabel="See All Performances"
        model={performances}
      />
      <Preview
        title="Watch & Listen"
        accent
        previewLabel="See All Videos and Recordings"
        model={media}
      />
      <Preview
        title="News"
        previewLabel="See all Latest News"
        model={news}
      />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allNewsJson {
      edges {
        node {
          title
          subtitle
          date {
            year
            month
            days {
              day
            }
          }
          content
        }
      }
    }
  }
`
