// react
import React, { useEffect, useState } from 'react'
// third
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
//local
import { updateUserStore } from '../../../actions/auth-actions';
import { getAllSchools } from '../../../helpers/unt-structure-helpers';
import { updateUser } from '../../../helpers/users-helpers';
import { useForm } from '../../../hooks/useForm'
import { ProfileGeneralFields } from '../components/ProfileGeneralFields';
import { ProfileProfessorFields } from '../components/ProfileProfessorFields';
import { ProfileStudentFields } from '../components/ProfileStudentFields';


//component
export const PanelProfileScreen = () => {

  const dispatch = useDispatch()
  const { user, token } = useSelector(state => state.auth);
  const { formValues, handleInputChange, handleInputFileChange } = useForm({

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
    'signature': '',
    'photo': '',

    //Permissions data
    'is_active': user.is_active,
    'external': user.external,
    'professor': user.professor,
    'student': user.student,
    'boss': user.boss,
    'director': user.director,

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
    schools: {},
    loading: false
  });


  useEffect(() => {

    const schools = JSON.parse(localStorage.getItem('schools'))
    if (schools) {
      setState({ ...state, schools: schools });
    } else {
      getAllSchools(token).then((schools) => {
        setState({ ...state, schools: schools });
        localStorage.setItem('schools', JSON.stringify(schools));
      });
    }

  }, [])


  const handleSubmit = (e) => {

    e.preventDefault();
    setState({ ...state, loading: true })

    updateUser(
      { ...formValues },
      user.media,
      user.boss,
      token).then((data) => {
        dispatch(updateUserStore(data));
        setState({ ...state, loading: false })
      });

  };

  useEffect(() => {
    if (state.loading) {
      Swal.fire({
        title: 'Uploading...',
        html: 'Please wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });
    } else {
      Swal.close();
    }
  }, [state.loading])

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
          media={user.media}
          handleInputChange={handleInputChange}
          handleInputFileChange={handleInputFileChange}
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