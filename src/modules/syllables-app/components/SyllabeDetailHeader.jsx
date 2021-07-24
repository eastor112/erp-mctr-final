import React from 'react'

export const SyllabeDetailHeader = () => {
  return (
    <section className="silabo__encabezado">

      <div className="silabo__detalle__logos">
        <div className="header__derecha">
          <figure>
            <img src="/assets/logo_unt.png" alt="" width="200" />
          </figure>
          <h6>Universidad Nacional de Trujillo</h6>
        </div>

        <div className="header__izquierda">
          <h6>Programa de Ingeniería Mecatrónica</h6>
          <figure>
            <img src="/assets/logo_mecatronica.png" alt="" width="200" />
          </figure>
        </div>
      </div>

      <h2 className="silabo__detalle__titulo">SILABO DE TEORIA DE MÁQUINAS Y MECANÍSMOS</h2>
    </section>
  )
}
