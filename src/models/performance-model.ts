import { DatesModel } from './dates-model'

export interface PerformanceModel {
  dates: DatesModel,
  title: string
  subtitle?: string
  venue: string
  location: {
    city: string
    region: string
  }
}
