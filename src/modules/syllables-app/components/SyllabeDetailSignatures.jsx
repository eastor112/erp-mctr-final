import React from 'react'

export const SyllabeDetailSignatures = ({ visa, professorSignature, directorSignature }) => {
  return (
    <section className="silabo__firmas">
      <div className="izquierda">
        <figure className="firma__docente">
          <img src={professorSignature} alt="docente" />
        </figure>
        <p>___________________________________</p>
        <h5>Firma docente</h5>
      </div>
      <div className="derecha">
        <figure className="firma__director">
          {
            visa
            &&
            <img src={directorSignature} alt="director" />
          }
        </figure>
        <p>___________________________________</p>
        <h5>Visado director de escuela</h5>
      </div>

    </section>
  )
}
