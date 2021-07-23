import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export const SyllabeCard = ({
  syllabe_id,
  course_name,
  course_code,
  course_cycle,
  syllabe_section,
  syllabe_year,
  syllabe_semester,
  course_credits,
  syllabe_principal_professor,
  curriculum,
  campus,
  syllabe_visa_date,
  syllabe_completed,
  syllabe_observed,
  syllabe_visa,
  syllabe_editable }) => {

  const history = useHistory()

  return (
    <div className="silabo__card">
      <figure>
        <img src="/assets/silabo__card.jpg" alt="" />
      </figure>
      <div className="silabo__card__info">
        <h4>
          {course_name}
          {
            syllabe_editable
              ?
              <i className="fas fa-pencil-alt"></i>
              :
              <i className="fas fa-lock"></i>
          }
        </h4>

        <div className="columnas">
          <div className="columna">
            <p>{campus}</p>
            <p>{curriculum}</p>
            <p>Semestre {syllabe_year}-{syllabe_semester} </p>
          </div>
          <div className="columna">
            <p><span>Código:</span> {course_code} </p>
            <p><span>Ciclo:</span> {course_cycle} </p>
            <p><span>Créditos:</span> {course_credits}</p>
          </div>
          <div className="columna">
            <p><span>Sección:</span> {syllabe_section === 'u' ? 'Unica' : syllabe_section} </p>
            <p>
              <span>Estado: </span>
              <span
                className={
                  syllabe_visa
                    ?
                    'visado'
                    :
                    syllabe_observed
                      ?
                      'observado'
                      :
                      syllabe_completed
                        ?
                        'completado'
                        :
                        'incompleto'
                }
              >
                {
                  syllabe_visa
                    ?
                    'Visado'
                    :
                    syllabe_observed
                      ?
                      'Observado'
                      :
                      syllabe_completed
                        ?
                        'Completado'
                        :
                        'Incompleto'
                }
              </span>
            </p>
            <p><span>Fecha de visado:</span> {syllabe_visa_date ? syllabe_visa_date : 'pendiente'} </p>

          </div>
          <div className="acciones">

            <button
              className="visualizar"
              onClick={() => history.push('/panel/syllabes/detail')}
            >
              <i className="fas fa-info-circle"></i>
              VISUALIZAR
            </button>
            <button
              className="descargar"
              onClick={() => history.push('/panel/syllabes/download')}
            >
              <i className="fas fa-download"></i>
              DESCARGAR
            </button>
            <button
              className="modificar"
              onClick={() => history.push('/panel/syllabes/update')}
            >
              <i className="fas fa-edit"></i>
              MODIFICAR
            </button>
            <button
              className="eliminar"
              onClick={() => history.push('/panel/syllabes/delete')}
            >
              <i className="fas fa-trash"></i>
              ELIMINAR
            </button>

          </div>
        </div>
        <small>Docente: {syllabe_principal_professor}</small>
      </div>
    </div>
  )
}
