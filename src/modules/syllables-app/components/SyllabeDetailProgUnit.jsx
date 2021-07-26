import React from 'react'
import { SyllabeDetailProgWeek } from './SyllabeDetailProgWeek'
import { SyllabeDetailProgWeekFull } from './SyllabeDetailProgWeekFull'

export const SyllabeDetailProgUnit = ({
  id,
  unitnumber,
  name,
  durationweeks,
  capabilities,
  outcomes,
  weeks }) => {

  return (
    <>
      <tr className="numero__unidad">
        <td colSpan="7">UNIDAD {unitnumber}: {name}</td>
      </tr>

      <SyllabeDetailProgWeekFull
        capabilities={capabilities}
        outcomes={outcomes}
        week={weeks[0]}
        numberWeeks={weeks.length}
      />

      {
        weeks.length > 1
        &&
        weeks.slice(1).map((week) => {
          return (
            <SyllabeDetailProgWeek
              key={week.id}
              week={week}
            />)
        })


      }


    </>
  )
}
