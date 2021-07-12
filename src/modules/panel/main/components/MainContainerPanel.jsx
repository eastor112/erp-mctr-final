import React from 'react'
import { MenuTopPanel } from '../../components/MenuTopPanel'

export const MainContainerPanel = () => {
  return (
    <>
      <MenuTopPanel />

      <section className="panel__contenedor__cards">

        <div className="card__modulo">
          <figure>
            <img src={"/assets/curso.jpg"} alt="" />
          </figure>
          <i className="fas fa-check-double"></i>
          <h3>SILABOS</h3>
          <p>
            Módulo para elaboración, visado y visualización de silabos del Programa de Ingeniería Mecatrónica
          </p>
          <button onClick={() => { hist.push('/panel/silabos') }}>INGRESAR</button>
        </div>

        <div className="card__modulo disable">
          <figure>
            <img src="/assets/curso.jpg" alt="" />
          </figure>
          <i className="fas fa-cogs"></i>
          <h3>EVALUACION</h3>
          <p>
            Módulo para elaboración, visado y visualización de silabos del Programa de Ingeniería Mecatrónica
          </p>
          <button disabled>INGRESAR</button>
        </div>

        <div className="card__modulo disable">
          <figure>
            <img src="/assets/curso.jpg" alt="" />
          </figure>
          <i className="fas fa-cogs"></i>
          <h3>RUBRICAS</h3>
          <p>
            Módulo para elaboración, visado y visualización de silabos del Programa de Ingeniería Mecatrónica
          </p>
          <button disabled>INGRESAR</button>
        </div>

        <div className="card__modulo disable">
          <figure>
            <img src="/assets/curso.jpg" alt="" />
          </figure>
          <i className="fas fa-cogs"></i>
          <h3>HORARIOS</h3>
          <p>
            Módulo para elaboración, visado y visualización de silabos del Programa de Ingeniería Mecatrónica
          </p>
          <button disabled>INGRESAR</button>
        </div>

      </section>

    </>
  )
}
