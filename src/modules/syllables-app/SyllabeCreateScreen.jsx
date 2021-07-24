import React from 'react'
import { useParams } from 'react-router-dom'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeCreateBibliography } from './components/SyllabeCreateBibliography'
import { SyllabeCreateControls } from './components/SyllabeCreateControls'
import { SyllabeCreateCounseling } from './components/SyllabeCreateCounseling'
import { SyllabeCreateEvaluation } from './components/SyllabeCreateEvaluation'
import { SyllabeCreateGeneralData } from './components/SyllabeCreateGeneralData'
import { SyllabeCreateProgramming } from './components/SyllabeCreateProgramming'

export const SyllabeCreateScreen = () => {

  const { pk, syllabe_action } = useParams();

  console.log(syllabe_action);

  return (
    <>

      <MenuTopPanel />

      <div className="crear__silabo">

        <h2>
          {
            (syllabe_action === 'create')
              ?
              'CREANDO NUEVO SÍLABO'
              :
              'ACTUALIZANDO SÍLABO'
          }
        </h2>
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

      <SyllabeCreateControls pk={pk} />

    </>
  )
}
