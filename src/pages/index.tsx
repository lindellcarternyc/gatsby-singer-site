import * as React from 'react'

import {
  Grid, Card, MediaCards, NewsCards,
  PerformanceCards,
  PreviewButton,
  Section
} from '../components'

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
    allAboutTextJson: {
      edges: Array<{
        node: {
          line: string
        }
      }>
    },
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
    allAboutTextJson,
    allNewsJson
  } = data
  const news = parseNews(allNewsJson)

  return (
    <div>
      <Section accent title="About Lindell">
        {allAboutTextJson.edges.map(edge => {
          const line = edge.node.line
          return <p key={line}>{line}</p>
        })}
      </Section>
      <Section title="Performances">
        <PreviewButton label="See All Performances" />
        <PerformanceCards performances={performances} />
      </Section>
      <Section title="Watch & Listen" accent>
        <PreviewButton label="See All Videos and Recordings" />
        <MediaCards mediaList={media} />
      </Section>
      <Section title="News">
        <PreviewButton label="See All Latest News" />
        <NewsCards news={news} />
      </Section>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allAboutTextJson {
      edges {
        node {
          line
        }
      }
    }
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
