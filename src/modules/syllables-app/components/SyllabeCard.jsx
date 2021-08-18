import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { startGetSyllabeDetailData } from '../../../actions/syllabe-actions';
import { deleteSyllabe, getFilteredSyllabesSummary } from '../../../helpers/syllabes-helpers';

export const SyllabeCard = ({
  token,
  setState,
  year,
  syllabe_id,
  course_id,
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

  const dispatch = useDispatch()
  const history = useHistory();

  const handleUpdate = () => {

    dispatch(startGetSyllabeDetailData(syllabe_id, token));
    history.push(`${import.meta.env.BASE_URL}panel/syllabes/update/${syllabe_id}/${course_id}`);
  }

  const handleDelete = () => {
    deleteSyllabe(syllabe_id, token).
      then(() => {
        getFilteredSyllabesSummary('', year, '', '', '', '', token)
          .then((syllabesData) => {
            setState(prevState => ({
              ...prevState,
              syllabes: syllabesData
            }));
          });
      })
  }

  return (
    <div className="silabo__card">
      <figure>
        <img src={import.meta.env.BASE_URL + "assets/silabo__card.jpg"} alt="" />
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
              onClick={() => history.push(`${import.meta.env.BASE_URL}panel/syllabes/detail/${syllabe_id}`)}
            >
              <i className="fas fa-info-circle"></i>
              VER
            </button>

            <button
              className="modificar"
              onClick={handleUpdate}
            >
              <i className="fas fa-edit"></i>
              EDITAR
            </button>

            <button
              className="eliminar"
              onClick={handleDelete}
            >
              <i className="fas fa-trash"></i>
              BORRAR
            </button>

          </div>
        </div>
        <small>Docente: {syllabe_principal_professor}</small>
      </div>
    </div>
  )
}
