import React, { useEffect } from 'react'
import { filterUsersBySchoolAndLastname } from '../../../helpers/users-helpers';
import { useForm } from '../../../hooks/useForm'

export const UsersAdminFilters = ({ token, schools, userSchoolId, setState }) => {

  const [formValues, handleInputChange] = useForm({
    'school': userSchoolId,
    'search': '',
  });

  const {
    school,
    search } = formValues;


  useEffect(() => {
    filterUsersBySchoolAndLastname(formValues.school, formValues.search, token)
      .then((filteredUsers) => {
        setState(prev => ({
          ...prev,
          users: filteredUsers,
          filterValues: { ...formValues }
        }));
      });

  }, [school])


  const handleSubmit = (e) => {
    e.preventDefault();

    filterUsersBySchoolAndLastname(formValues.school, formValues.search, token)
      .then((filteredUsers) => {
        setState(prev => ({
          ...prev,
          users: filteredUsers,
          filterValues: { ...formValues }
        }));
      });

  };

  return (
    <section >
      <form
        className="admin__filtros"
        onSubmit={handleSubmit}
      >
        <div className="izquierda">

          <div className="ordenar">

            <label htmlFor="ordenar">Escuela:</label>
            <select
              id='school'
              name='school'
              value={school}
              onChange={handleInputChange}
            >
              <option value='all'> Todas </option>
              <option value=''> No especificado </option>
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
              placeholder="buscar por apellido"
              id='search'
              name='search'
              value={search}
              onChange={handleInputChange}
            />

            <i className="fa fa-search" aria-hidden="true"></i>
            <button>
              Buscar
            </button>
          </div>

          <div>
          </div>
        </div>
      </form>


    </section>
  )
}
