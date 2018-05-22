export interface PerformanceDatesModel {
  year: string
  month: string
  days: string[]
}

export interface PerformanceModel {
  dates: PerformanceDatesModel,
  title: string
  subtitle?: string
  venue: string
  location: {
    city: string
    region: string
  }
}
