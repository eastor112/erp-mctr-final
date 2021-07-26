import React from 'react'
import { SyllabeDetailProgHeader } from './SyllabeDetailProgHeader'
import { SyllabeDetailProgUnit } from './SyllabeDetailProgUnit'

export const SyllabeDetailProgramming = ({ units }) => {
  return (
    <section className="silabo__programacion">
      <h3>4. PROGRAMACIÓN ACADÉMICA</h3>
      <table className="programacion__tabla">

        <SyllabeDetailProgHeader />

        <tbody>

          {
            units.map((unit) => {
              return <SyllabeDetailProgUnit key={unit.id} {...unit} />
            })
          }

        </tbody>

      </table>

    </section>
  )
}
