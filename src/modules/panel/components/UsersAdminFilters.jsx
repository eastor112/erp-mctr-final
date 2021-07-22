import React from 'react'
import { useForm } from '../../../hooks/useForm'

export const UsersAdminFilters = ({ schools, userSchoolId }) => {

  const [formValues, handleInputChange] = useForm({
    'school': userSchoolId,
    'search': '',
  });

  const {
    school,
    search } = formValues;

  return (
    <section className="admin__filtros">

      <div className="izquierda">

        <div className="ordenar">

          <label htmlFor="ordenar">Escuela:</label>
          <select
            id='school'
            name='school'
            value={school}
            onChange={handleInputChange}
          >
            {
              schools.map((schoolObj) => {
                return <option key={schoolObj.id} value={schoolObj.id}> {schoolObj.name}</option>
              })
            }
          </select>
        </div>


      </div>

      <div className="derecha">
        <div className="busqueda">
          <input
            type="text"
            placeholder="buscar"
            id='search'
            name='search'
            value={search}
            onChange={handleInputChange}
          />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </section>
  )
}
