import * as React from 'react'
import styled from 'styled-components'

import { ComposerName } from './repertoire-typography'
import OperaEntry from './repertoire-opera-entry'

import { ComposerModel } from '../../../models/repertoire-model'

const Wrapper = styled.div`
  margin-bottom: 1rem;
`
const ComposerEntry = (props: ComposerModel) => {
  const { name, operas } = props
  return (
    <Wrapper>
      <ComposerName>{name}</ComposerName>
      {operas.map(opera => {
        return (
          <OperaEntry
            key={JSON.stringify(opera)}
            { ...opera }
          />
        )
      })}
    </Wrapper>
  )
}

export default ComposerEntry
