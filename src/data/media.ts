import { MediaModel, MediaType } from '../models/media-model'

const Video1: MediaModel = {
  date: {
    year: '2018',
    month: 'May',
    days: ['6']
  },
  title: 'Celeste Aida',
  subtitle: 'AIDA',
  type: MediaType.Video
}
const Video2: MediaModel = {
  date: {
    year: '2018',
    month: 'Jun',
    days: ['19']
  },
  title: 'L\'invatation au Voyage',
  subtitle: 'Duparc',
  type: MediaType.Video
}
const Audio1: MediaModel = {
  date: {
    year: '2018',
    month: 'Jun',
    days: ['24']
  },
  title: 'Recorded',
  type: MediaType.Audio,
  details: [
    'Lindell Carter sings Duparc melodie'
  ]
}

const MediaData = [
  Video1,
  Video2,
  Audio1
]

export default MediaData
