import { PerformanceModel } from '../models/performance-model'

const PerformancesData: PerformanceModel[] = [
  {
    dates: {
      year: '2018',
      month: 'May',
      days: ['8']
    },
    venue: 'Regina Opera',
    location: { city: 'Brooklyn', region: 'NY'},
    title: 'Aida',
    subtitle: 'Radames'
  },
  {
    dates: {
      year: '2018',
      month: 'May',
      days: ['12', '13', '19', '20']
    },
    venue: 'Regina Opera',
    title: 'Aida',
    subtitle: 'The Messenger',
    location: { city: 'Brooklyn', region: 'NY'}
  },
  {
    dates: {
      year: '2018',
      month: 'Jun',
      days: ['12', '15']
    },
    venue: 'Resonanz Opera',
    location: {
      city: 'Mentnor',
      region: 'OH'
    },
    title: 'Rigoletto',
    subtitle: 'The Duke'
  }
]

export default PerformancesData
