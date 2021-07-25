import React from 'react'

export const SyllabeDetailHeader = ({ name }) => {


  return (
    <section className="silabo__encabezado">

      <div className="silabo__detalle__logos">
        <div className="header__derecha">
          <figure>
            <img src={import.meta.env.BASE_URL + "assets/logo_unt.png"} alt="" width="200" />
          </figure>
          <h6>Universidad Nacional de Trujillo</h6>
        </div>

        <div className="header__izquierda">
          <h6>Programa de Ingeniería Mecatrónica</h6>
          <figure>
            <img src={import.meta.env.BASE_URL + "assets/logo_mecatronica.png"} alt="" width="200" />
          </figure>
        </div>
      </div>

      <h2 className="silabo__detalle__titulo">
        {
          (name.course?.name) && ('Sílabo de ' + name.course.name)
        }
      </h2>
    </section>
  )
}
