import { DatesModel } from './dates-model'

interface NewsModel {
  title: string
  subtitle?: string
  date: DatesModel
  content: string
}

export { NewsModel }
