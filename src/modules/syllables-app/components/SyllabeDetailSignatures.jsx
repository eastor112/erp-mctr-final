import React from 'react'

export const SyllabeDetailSignatures = () => {
  return (
    <section className="silabo__firmas">
      <div className="izquierda">
        <figure className="firma__docente">
          <img src="/assets/firma__docente.jpg" alt="docente" />
        </figure>
        <p>___________________________________</p>
        <h5>Firma docente</h5>
      </div>
      <div className="derecha">
        <figure className="firma__director">
          <img src="/assets/firma__director.jpeg" alt="director" />
        </figure>
        <p>___________________________________</p>
        <h5>Visado director de escuela</h5>
      </div>

    </section>
  )
}
