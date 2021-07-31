import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { getFilteredSyllabesSummary } from '../../../helpers/syllabes-helpers';
import { useForm } from '../../../hooks/useForm';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';


const actualYear = new Date().getFullYear()

export const SyllabeFilters = ({ setState, schools, token }) => {

  const { formValues, handleInputChange } = useForm({
    cycle: '',
    semester: '',
    status: '',
    school: '',
    search: '',
    year: actualYear
  })

  const {
    cycle,
    semester,
    status,
    school,
    search,
    year } = formValues;


  useEffect(() => {

    getFilteredSyllabesSummary(cycle, year, semester, status, school, search, token)
      .then((syllabesData) => {
        setState(prev => ({
          ...prev,
          syllabes: syllabesData
        }));
      })

  }, [cycle, year, semester, status, school])


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCreate = () => {
    setState(prev => ({
      ...prev,
      showModal: true
    }));
  }


  return (

    <>
      <form
        className="silabos__filtros"
        onSubmit={handleSubmit}
      >
        <div className="izquierda">

          <div className='school'>
            <label htmlFor="school">Escuela: </label>
            <select
              name="school"
              id="school"
              onChange={handleInputChange}

            >
              <option value="">Todas</option>
              {
                schools.map((schoolObj) => {
                  return <option key={schoolObj.id} value={schoolObj.id}>{schoolObj.name}</option>
                })
              }
            </select>
          </div>

          <div className='year'>
            <label htmlFor="year">Año: </label>
            <input
              type="number"
              id='year'
              name='year'
              value={year}
              onChange={handleInputChange}
            />
          </div>



          <div className="semestre">
            <label htmlFor="semester">Semestre:</label>
            <select
              name="semester"
              id="semester"
              onChange={handleInputChange}
            >
              <option value="">Todos</option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">Nivelación</option>
            </select>
          </div>

          <div className="ciclo">
            <label htmlFor="cycle">Ciclo:</label>
            <select
              name="cycle"
              id="cycle"
              onChange={handleInputChange}
            >
              <option value="">Todos</option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
              <option value="4">IV</option>
              <option value="5">V</option>
              <option value="6">VI</option>
              <option value="7">VII</option>
              <option value="8">VIII</option>
              <option value="9">IX</option>
              <option value="10">X</option>
            </select>
          </div>



          <div className="status">
            <label htmlFor="status">Estado:</label>
            <select
              name="status"
              id="status"
              onChange={handleInputChange}
            >
              <option value="">Todos</option>
              <option value="incompleto">Incompleto</option>
              <option value="completo">Completo</option>
              <option value="observado">Observado</option>
              <option value="visado">Visado</option>
            </select>
          </div>
        </div>

        <div className="derecha">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCreate}
          >
            <PostAddIcon />
            NUEVO
          </Button>

        </div>
      </form>


    </>
  )
}
