import React from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'
import { SyllabeCreateUnit } from './SyllabeCreateUnit'

export const SyllabeCreateProgramming = () => {
  return (
    <>
      <div className="programacion__academica__titulo">
        <h3>PROGRAMACIÓN ACADÉMICA</h3>

        <SyllabeCreateRevision />

      </div>

      <SyllabeCreateUnit />

    </>
  )
}
