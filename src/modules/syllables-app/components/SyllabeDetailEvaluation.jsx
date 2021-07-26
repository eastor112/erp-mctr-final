import React from 'react'

export const SyllabeDetailEvaluation = ({
  legalbase,
  procedures,
  evaluationdetail,
  criteria,
  achievementlevel }) => {

  return (
    <section className="silabo__evaluacion">
      <h3>5. SISTEMA DE EVALUACIÓN</h3>

      <div className="evaluacion__legal">
        <h5>Base legal:</h5>
        <p>
          {legalbase}
        </p>

      </div>

      <div className="evaluacion__principios">
        <h5>Principios y procedimientos:</h5>
        <p>
          {procedures}
        </p>
      </div>
      <div className="evaluacion__detalle">
        <h5>Detalle:</h5>
        <pre>
          {evaluationdetail}
        </pre>
      </div>

      <div className="evaluacion__criterios">
        <h5>Criterios para la promoción:</h5>
        <p>
          {criteria}
        </p>
      </div>

      <div className="evaluacion__reportes">
        <h5>Nivel de logros:</h5>
        <p>
          {
            achievementlevel
          }
        </p>
      </div>
    </section>
  )
}
