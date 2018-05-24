export interface OperaModel {
  title: string
  roles: string[]
}

export interface ComposerModel {
  name: string
  operas: OperaModel[]
}
