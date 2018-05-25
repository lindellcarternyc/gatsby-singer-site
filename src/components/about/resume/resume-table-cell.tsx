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

export const ResumeRoleCell = (props: { role: string }) => {
  return <TableCell bold>{props.role}</TableCell>
}
export const ResumeOperaCell = (props: { title: string }) => {
  return <TableCell italic align="center">{props.title}</TableCell>
}
export const ResumeCompanyCell = (props: { name: string }) => {
  return <TableCell align="center">{props.name}</TableCell>
}
export const ResumeDateCell = (props: { date: string }) => {
  return <TableCell align="right">{props.date}</TableCell>
}
