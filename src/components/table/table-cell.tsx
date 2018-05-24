import * as React from 'react'
import styled from 'styled-components'
import styledTS from 'styled-components-ts'

interface TableCellProps {
  align?: 'center' | 'right'
  bold?: boolean
  italic?: boolean
}
const TableCell = styledTS<TableCellProps>(styled.td)`
  font-size: 0.85rem;
  text-align: ${props => props.align}
  line-height: 1.25rem;
  font-weight: ${props => props.bold ? 'bold' : undefined};
  font-style: ${props => props.italic ? 'italic' : undefined}
`

export default TableCell
