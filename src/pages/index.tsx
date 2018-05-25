import * as React from 'react'

import {
  Preview
} from '../components'

import Data from '../data'
const { media } = Data
import { NewsModel } from '../models/news-model'
import { PerformanceModel } from '../models/performance-model'

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

interface PerformancesJson {
  edges: Array<{
    node: {
      performance: {
        dates: {
          year: string
          month: string
          days: Array<{
            day: string
          }>
        }
        location: {
          city: string
          region: string
        }
        venue: string
        title: string
        subtitle: string
      }
    }
  }>
}
const parsePerformances = (data: PerformancesJson): PerformanceModel[] => {
  return data.edges.map(({ node }) => {
    const { performance } = node
    const { dates, title, subtitle, venue, location } = performance
    return {
      title,
      subtitle,
      venue,
      location,
      dates: {
        year: dates.year,
        month: dates.month,
        days: dates.days.map(d => d.day)
      }
    }
  })
}

interface IndexPageProps {
  data: {
    allNewsJson: NewsJson
    allPerformancesJson: PerformancesJson
  }
}



const IndexPage = (props: IndexPageProps) => {
  const { data } = props

  const {
    allNewsJson,
    allPerformancesJson
  } = data
  const news = parseNews(allNewsJson)
  const performances = parsePerformances(allPerformancesJson)

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
    allPerformancesJson {
      edges {
        node {
          performance {
            dates {
              year
              month
              days {
                day
              }
            }
            location {
              city
              region
            }
            venue
            title
            subtitle
          }
        }
      }
    }
  }
`
