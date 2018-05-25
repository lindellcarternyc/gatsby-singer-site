import * as React from 'react'

import TableRow from './resume-table-row'

import { ResumeEntry } from '../../../models/resume-model'

const ResumeTable = (props: { entries: ResumeEntry[] }) => {
  return (
    <table
      style={{
        width: '100%',
        maxWidth: '100%'
      }}
    >
      <tbody>
        {props.entries.map((entry, idx) => {
          return (
            <TableRow
              key={JSON.stringify(entry) + '--' + idx.toString()}
              { ...entry }
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default ResumeTable
