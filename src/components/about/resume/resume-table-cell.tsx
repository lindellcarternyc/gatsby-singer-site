import * as React from 'react'

import TableCell from '../../table/table-cell'

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
