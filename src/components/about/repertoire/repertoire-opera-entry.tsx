import * as React from 'react'
import styled from 'styled-components'

import { OperaTitle, OperaRoles } from './repertoire-typography'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

import { OperaModel } from '../../../models/repertoire-model'
const OperaEntry = (props: OperaModel) => {
  const { title, roles } = props
  return (
    <Wrapper>
      <OperaTitle>{title}</OperaTitle>
      <OperaRoles roles={roles} />
    </Wrapper>
  )
}

export default OperaEntry
