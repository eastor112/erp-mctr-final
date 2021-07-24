import React from 'react'
import { SyllabeDetailProgHeader } from './SyllabeDetailProgHeader'
import { SyllabeDetailProgUnit } from './SyllabeDetailProgUnit'

export const SyllabeDetailProgramming = () => {
  return (
    <section className="silabo__programacion">
      <h3>4. PROGRAMACIÓN ACADÉMICA</h3>
      <table className="programacion__tabla">

        <SyllabeDetailProgHeader />

        <tbody>

          <SyllabeDetailProgUnit />

          <SyllabeDetailProgUnit />

        </tbody>

      </table>

    </section>
  )
}
