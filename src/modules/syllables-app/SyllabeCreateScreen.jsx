import React from 'react'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeCreateBibliography } from './components/SyllabeCreateBibliography'
import { SyllabeCreateControls } from './components/SyllabeCreateControls'
import { SyllabeCreateCounseling } from './components/SyllabeCreateCounseling'
import { SyllabeCreateEvaluation } from './components/SyllabeCreateEvaluation'
import { SyllabeCreateGeneralData } from './components/SyllabeCreateGeneralData'
import { SyllabeCreateProgramming } from './components/SyllabeCreateProgramming'

export const SyllabeCreateScreen = () => {
  return (
    <>

      <MenuTopPanel />

      <div className="crear__silabo">

        <h2>CREANDO NUEVO SILABO</h2>
        <section className="crear__datos">

          <SyllabeCreateGeneralData />

          <SyllabeCreateProgramming />

          <SyllabeCreateEvaluation />

          <SyllabeCreateCounseling />

          <SyllabeCreateBibliography />

          <div className="finalizar__revision">
            <button>SOLICITAR REVISIÓN</button>
            <button className="no-activo">FINALIZAR REVISIÓN</button>
          </div>

        </section>

      </div>

      <SyllabeCreateControls />

    </>
  )
}
