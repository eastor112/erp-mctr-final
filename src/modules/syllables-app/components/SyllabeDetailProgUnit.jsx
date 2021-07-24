import React from 'react'
import { SyllabeDetailProgWeek } from './SyllabeDetailProgWeek'
import { SyllabeDetailProgWeekFull } from './SyllabeDetailProgWeekFull'

export const SyllabeDetailProgUnit = () => {
  return (
    <>
      <tr className="numero__unidad">
        <td colSpan="7">UNIDAD 1</td>
      </tr>

      <SyllabeDetailProgWeekFull />
      <SyllabeDetailProgWeek />
      <SyllabeDetailProgWeek />
      <SyllabeDetailProgWeek />

    </>
  )
}
