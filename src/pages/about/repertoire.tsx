import * as React from 'react'

import { Section } from '../../components'
import { TextColor } from '../../utils/colors'

import styled from 'styled-components'

import {
  ComposerName, OperaTitle, OperaRoles
} from '../../components/repertoire/repertoire-typography'
import OperaEntry from '../../components/repertoire/repertoire-opera-entry'
import ComposerEntry from '../../components/repertoire/repertoire-composer-entry'

import { OperaModel, ComposerModel } from '../../models/repertoire-model'

const Carmen: OperaModel = {
  title: 'Carmen',
  roles: ['Don Jose']
}

const Bizet: ComposerModel = {
  name: 'Bizet',
  operas: [
    { ...Carmen }
  ]
}

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
  return (
    <Section>
      {data.allRepertoireJson.edges.map(({ node }) => {
        const { composer } = node
        return (
          <ComposerEntry
            key={composer.name}
            name={composer.name}
            operas={composer.operas.map(opera => {
              return {
                title: opera.title,
                roles: opera.roles.map(role => role.name)
              }
            })}
          />
        )
      })}
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
