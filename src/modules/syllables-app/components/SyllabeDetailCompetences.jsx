import React from 'react'

export const SyllabeDetailCompetences = ({
  generalcompetence,
  specificcompetence,
  unitcompetence }) => {

  return (
    <section className="silabo__competencias">
      <h3>3. COMPETENCIAS</h3>

      <div className="competencias__generales">

        <p><span>3.1. Competencias generales:</span></p>

        {
          generalcompetence.map((compGeneral) => (
            <div className="competencia" key={compGeneral.id}>
              <p><span>{compGeneral.code}:</span> {compGeneral.description} </p>
            </div>
          ))
        }

      </div>


      <div className="competencias__unidades">

        <p><span>3.2. Competencias del programa:</span></p>
        {
          unitcompetence.map((unitComp) => (
            <div className="competencia__unidad" key={unitComp.id}>
              <p><span>{unitComp.code}: </span> {unitComp.description}</p>
            </div>
          ))
        }

      </div>
    </section>
  )
}
