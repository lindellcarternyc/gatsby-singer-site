import * as React from 'react'

import ComposerEntry from './repertoire-composer-entry'

import { ComposerModel } from '../../../models/repertoire-model'

interface RepertoireProps {
  composers: ComposerModel[]
}

const Repertoire = (props: RepertoireProps): JSX.Element => {
  const { composers } = props
  return (
    <div>
      {composers.map(composer => {
        return (
          <ComposerEntry
            key={composer.name}
            name={composer.name}
            operas={composer.operas.map(opera => {
              return {
                title: opera.title,
                roles: [ ...opera.roles ]
              }
            })}
          />
        )
      })}
    </div>
  )
}

export default Repertoire
