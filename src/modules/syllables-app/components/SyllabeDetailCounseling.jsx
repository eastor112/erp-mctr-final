import React from 'react'

export const SyllabeDetailCounseling = ({
  counselingpurpose,
  counselingday,
  counselinghour,
  counselingplace }) => {
  return (
    <section className="silabo__consejeria">
      <h3>6. CONSEJERÍA ACADÉMICA</h3>

      <div className="proposito">
        <h4>6.1. Propósito:</h4>
        <p>
          {
            counselingpurpose
          }
        </p>
      </div>

      <div className="desarrollo">
        <h4>6.2. Desarrollo de la tutoría:</h4>
        <ul className="desarrollo__lista">
          <li><span className="subtitulo">Día:</span> {counselingday}</li>
          <li><span className="subtitulo">Horario:</span> {counselinghour}</li>
          <li><span className="subtitulo">Lugar</span> {counselingplace}</li>
        </ul>
      </div>

    </section>
  )
}
