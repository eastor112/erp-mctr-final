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
    //General profile
    'id': user.id,
    'names': user.names,
    'fathername': user.fathername,
    'mothername': user.mothername,
    'email': user.email,
    'typeuser': user.typeuser,
    'mobilenumber': user.mobilenumber,
    'school': user.schoolInfo.id,
    //Student profile
    'codestudent': user.codestudent,
    'graduate': user.graduate,
    //Professor profile
    'codeprofessor': user.codeprofessor,
    'category': user.category,
    'career': user.career,
    'grade': user.grade,
    'typeServices': user.typeServices,
    'dedication': user.dedication,
    'supportposition': user.supportposition,
  });

  const {
    id,
    names,
    fathername,
    mothername,
    email,
    typeuser,
    mobilenumber,
    school,
    codestudent,
    graduate,
    codeprofessor,
    category,
    career,
    grade,
    typeServices,
    dedication,
    supportposition } = formValues



  const [state, setState] = useState({
    schools: {}
  });


  // agregar limpieza
  useEffect(() => {
    getAllSchools(token).then((schools) => {
      setState({ ...state, schools: schools });
    });
  }, [user.schoolInfo.id])


  const handleSubmit = (e) => {
    e.preventDefault();

    updateUser(
      { ...formValues },
      user.student,
      user.professor,
      user.director,
      user.boss,
      token).then((data) => {
        dispatch(updateUserStore(data));
      });

  };

  //TODO Poner sweetalert2 cuando se hace el envío del formulario


  return (
    <>

      {/* Formulario datos generales */}
      <form
        className="perfil__form"
        onSubmit={handleSubmit}
      >
        {/* Datos generales */}
        <ProfileGeneralFields
          {...formValues}
          id={id}
          names={names}
          fathername={fathername}
          mothername={mothername}
          email={email}
          typeuser={typeuser}
          mobilenumber={mobilenumber}
          school={school}
          handleInputChange={handleInputChange}
          state={state} //Pra mostrar la lista de escuelas
        />



        {/* Datos estudiante */}
        {
          user.student
          &&
          <ProfileStudentFields
            codestudent={codestudent}
            graduate={graduate}
            handleInputChange={handleInputChange}
          />
        }



        {/* Datos docente */}
        {
          (user.professor || user.boss || user.director)
          &&
          <ProfileProfessorFields
            codeprofessor={codeprofessor}
            category={category}
            career={career}
            grade={grade}
            typeServices={typeServices}
            dedication={dedication}
            supportposition={supportposition}
            handleInputChange={handleInputChange}
          />
        }


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