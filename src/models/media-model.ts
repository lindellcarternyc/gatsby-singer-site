import { DatesModel } from './dates-model'

export enum MediaType {
  Audio,
  Video
}
export interface MediaModel {
  date: DatesModel
  title: string
  subtitle?: string
  type: MediaType
  image?: string
  details?: string[]
}
