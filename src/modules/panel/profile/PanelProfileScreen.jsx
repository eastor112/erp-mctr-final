// react
import React, { useEffect, useState } from 'react'
// third
import { useDispatch, useSelector } from 'react-redux'
//local
import { updateUserStore } from '../../../actions/auth-actions';
import { getAllSchools } from '../../../helpers/schools-helpers';
import { updateUser } from '../../../helpers/users-helpers';
import { useForm } from '../../../hooks/useForm'
import { ProfileGeneralFields } from '../components/ProfileGeneralFields';
import { ProfileProfessorFields } from '../components/ProfileProfessorFields';
import { ProfileStudentFields } from '../components/ProfileStudentFields';


//component
export const PanelProfileScreen = () => {

  const dispatch = useDispatch()
  const { user, token } = useSelector(state => state.auth);
  const [formValues, handleInputChange] = useForm({
    'id': user.id,
    'names': user.names,
    'fathername': user.fathername,
    'mothername': user.mothername,
    'email': user.email,
    'accesslevel': user.accesslevel,
    'mobilenumber': user.mobilenumber,
    'school': user.schoolInfo.id
  });

  const [state, setState] = useState({
    schools: {}
  });

  const {
    names,
    fathername,
    mothername,
    email,
    accesslevel,
    mobilenumber,
    school } = formValues;

  // agregar limpieza
  useEffect(() => {
    getAllSchools(token).then((schools) => {
      setState({ ...state, schools: schools });
    });
  }, [user.schoolInfo.id])


  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(formValues, token).then((data) => {
      dispatch(updateUserStore(data));
    })
  };

  //TODO Poner sweetalert2 cuando se hace el envío del formulario

  return (
    <>

      <h3 className="perfil__usuario__titulo">{`${names} ${fathername} ${mothername}`.toUpperCase()}</h3>

      <div>
        <button>General</button>
        <button>Estudiante</button>
        <button>Docente</button>
      </div>

      {/* Formulario datos generales */}
      <form
        className="perfil__form"
        onSubmit={handleSubmit}
      >
        {/* Datos generales */}
        <ProfileGeneralFields
          {...formValues}
          handleInputChange={handleInputChange}
          state={state}
        />


        {/* Datos estudiante */}
        <ProfileStudentFields />


        {/* Datos docente */}
        <ProfileProfessorFields />

        {/* Botton enviar */}
        <div className='perfil__form__button'>
          <button type="submit">
            <i className="fa fa-save" aria-hidden="true"></i>
            &nbsp;&nbsp;GUARDAR CAMBIOS
          </button>
        </div>

      </form>

    </>
  )
}