import * as React from 'react'

import { Section } from '../../components/common/section'
import { Repertoire } from '../../components/about'
import { ComposerModel } from '../../models/repertoire-model'

interface RepertoirePageProps {
  data: {
    allRepertoireJson: {
      edges: Array<{
        node: {
          composer: {
            name: string
            operas: Array<{
              title: string
              roles: Array<{
                name: string
              }>
            }>
          }
        }
      }>
    }
  }
}
const RepertoirePage = (props: RepertoirePageProps) => {
  const { data } = props
  const composers: ComposerModel[] = data.allRepertoireJson.edges.map(({ node: { composer } }) => {
    return {
      name: composer.name,
      operas: composer.operas.map(({ title, roles }) => {
        return {
          title,
          roles: roles.map(r => r.name)
        }
      })
    }
  })
  return (
    <Section>
      <Repertoire composers={composers}/>
    </Section>
  )
}

export default RepertoirePage

export const query = graphql`
  query RepertoirePageQuery {
    allRepertoireJson {
      edges {
        node {
          composer {
            name
            operas {
              title
              roles {
                name
              }
            }
          }
        }
      }
    }
  }
`
