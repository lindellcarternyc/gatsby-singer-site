import * as React from 'react'

import {
  Preview
} from '../components'
import Video from '../components/video/video'

import Data from '../data'
const { media } = Data
import { NewsModel } from '../models/news-model'
import { PerformanceModel } from '../models/performance-model'
import { MediaModel, MediaType } from '../models/media-model'


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
        dates: {
          year: string
          month: string
          days: Array<{ day: string }>
        }
        location: {
          city: string
          region: string
        }
        venue: string
        title: string
        subtitle: string
      }
    }>
}
const parsePerformances = (data: PerformancesJson): PerformanceModel[] => {
  console.log(data)
  return data.edges.map(({ node }) => {
    const { dates, title, subtitle, venue, location } = node
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

interface VideosJson {
  edges: Array<{
    node: {
      title: string
      subtitle: string
      url: string
      type: string
      date: {
        month: string
        year: string
        days: Array<{
          day: string
        }>
      }
    }
  }>
}

const parseVideos = (data: VideosJson): MediaModel[] => {
  return data.edges.map(({ node }) => {
    const { date, title, subtitle, type, url } = node
    return {
      title,
      subtitle,
      url,
      type: type as MediaType,
      date: {
        ...date,
        days: date.days.map(d => d.day)
      }
    }
  })
}

interface IndexPageProps {
  data: {
    allNewsJson: NewsJson
    allPerformancesJson: PerformancesJson
    allVideosJson: VideosJson
  }
}



const IndexPage = (props: IndexPageProps) => {
  const { data } = props

  const {
    allNewsJson,
    allPerformancesJson,
    allVideosJson
  } = data


  const news = parseNews(allNewsJson)
  const performances = parsePerformances(allPerformancesJson)
  const videos = parseVideos(allVideosJson)

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
        model={videos}
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
          dates {
            year
            month
            days { day }
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

    allVideosJson {
      edges {
        node {
          title
          subtitle
          url
          date {
            month
            year
            days {
              day
            }
          }
          type
        }
      }
    }
  }
`
