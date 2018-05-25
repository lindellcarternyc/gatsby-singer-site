import * as React from 'react'

import { Section, SectionProps } from '../common/section'
import PreviewButton from './preview-button'

import { MediaModel } from '../../models/media-model'
import { NewsModel } from '../../models/news-model'
import { PerformanceModel } from '../../models/performance-model'

import MediaCards from '../media-cards'
import PerformanceCards from '../performance-cards'
import NewsCards from '../news-cards'

interface PreviewProps extends SectionProps {
  title: string
  previewLabel: string
  model: MediaModel[] | NewsModel[] | PerformanceModel[]
}
const Preview = (props: PreviewProps): JSX.Element => {
  const { title, previewLabel, model } = props
  const render = () => {
    const first = model[0]
    const modelProps = Object.getOwnPropertyNames(first)
    if ( modelProps.includes('venue') ) {
      const performances = model as PerformanceModel[]
      return <PerformanceCards performances={performances}/>
    } else if ( modelProps.includes('type') ) {
      const media = model as MediaModel[]
      return <MediaCards mediaList={media} />
    } else {
      const news = model as NewsModel[]
      return <NewsCards news={news}/>
    }
  }
  return (
    <Section title={title}>
      <PreviewButton label={previewLabel} />
      {render()}
    </Section>
  )
}

export default Preview
