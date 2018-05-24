import * as React from 'react'

import {
  ResumeCompanyCell,
  ResumeDateCell,
  ResumeOperaCell,
  ResumeRoleCell
} from './resume-table-cell'
import { ResumeEntry } from '../models'

const ResumeTableRow = (props: ResumeEntry) => {
  const { role, opera, company, date } = props
  return (
    <tr>
      <ResumeRoleCell role={role} />
      <ResumeOperaCell title={opera} />
      <ResumeCompanyCell name={company} />
      <ResumeDateCell date={date} />
    </tr>
  )
}

export default ResumeTableRow
