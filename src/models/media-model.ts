import { DatesModel } from './dates-model'

export enum MediaType {
  Audio = 'audio',
  Video = 'video'
}
export interface MediaModel {
  date: DatesModel
  title: string
  subtitle?: string
  type: MediaType
  url?: string
  details?: string[]
}
