import React from 'react'
import { SyllabeCreateCapacities } from './SyllabeCreateCapacities'
import { SyllabeCreateOutcomes } from './SyllabeCreateOutcomes'
import { SyllabeCreateUnitInfo } from './SyllabeCreateUnitInfo'
import { SyllabeCreateWeek } from './SyllabeCreateWeek'

export const SyllabeCreateUnit = () => {
  return (
    <div className="container__unidad">

      <SyllabeCreateUnitInfo />

      <SyllabeCreateCapacities />

      <SyllabeCreateOutcomes />

      <SyllabeCreateWeek />

      <SyllabeCreateWeek />

    </div>


  )
}
