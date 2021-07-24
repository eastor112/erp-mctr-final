import React from 'react'
import { SyllabeCreateGeneralForm } from './SyllabeCreateGeneralForm'
import { SyllabeCreateGeneralTitle } from './SyllabeCreateGeneralTitle'
import { SyllabeCreateProfessorsTeam } from './SyllabeCreateProfessorsTeam'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'

export const SyllabeCreateGeneralData = () => {
  return (
    <div className="container__datos__generales">

      <div className="datos__identificacion__titulo">
        <h3>DATOS DE IDENTIFICACIÓN</h3>
        <SyllabeCreateRevision />
      </div>

      <SyllabeCreateGeneralTitle />


      <div>
        <SyllabeCreateGeneralForm />

        <SyllabeCreateProfessorsTeam />
      </div>
    </div>
  )
}
