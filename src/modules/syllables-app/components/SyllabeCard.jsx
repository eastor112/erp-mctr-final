import React, { useEffect, useState } from 'react'
import { getCourseDetail } from '../../../helpers/courses-helpers'

export const SyllabeCard = ({ token, id, year, semester, section, startdate }) => {

  const [state, setState] = useState({
    course: {}
  })

  const { course } = state;

  useEffect(() => {
    getCourseDetail(id, token)
      .then((course) => {
        setState({
          ...state,
          course: course
        });
      })
  }, [])

  return (
    <div className="silabo__card">
      <figure>
        <img src="/assets/silabo__card.jpg" alt="" />
      </figure>
      <div className="silabo__card__info">
        <h4>{course.name}  </h4>

        <div className="columnas">
          <div className="columna">
            <p><span>Código:</span> {course.code} </p>
            <p><span>Ciclo:</span> {course.cycle} </p>
            <p><span>Sección:</span> {section === 'u' ? 'Unica' : section} </p>
          </div>
          <div className="columna">
            <p><span>Semestre:</span> {year}-{semester} </p>
            <p><span>Créditos:</span> {course.credits}</p>
            <p><span>Sede:</span> Trujillo</p>
          </div>
          <div className="columna">
            <p><span>Creación:</span> {startdate} </p>
            <p><span>Ult. Modificación:</span>01/05/21</p>
            <p><span>Estado:</span> <span className="terminado">Terminado</span> </p>
          </div>
          <div className="acciones">

            <button className="visualizar">
              <a href="./silabo__detalle.html">
                VISUALIZAR
              </a>
            </button>
            <button className="descargar">
              DESCARGAR
            </button>
            <button className="modificar">
              MODIFICAR
            </button>
            <button className="eliminar">
              ELIMINAR
            </button>

          </div>
        </div>

        <small>Dictado por: Emerson Maximo Asto Rodriguez (50868)</small>
      </div>
    </div>
  )
}
