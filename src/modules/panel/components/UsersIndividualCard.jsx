import React from 'react'
import { shortNameDepartment } from '../../../helpers/general-helpers';

export const UsersIndividualCard = ({
  user,
  setState,
  allUpdateFields,
  handleDeleteUser }) => {

  const userDataReturn = {
    //General profile
    'id': user.id,
    'names': user.names,
    'fathername': user.fathername,
    'mothername': user.mothername,
    'email': user.email,
    'typeuser': user.typeuser,
    'mobilenumber': user.mobilenumber,
    'school': user.schoolInfo.id,
    'media': user.media,

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
    'is_active': user.is_active,
    'external': user.external,
    'professor': user.professor,
    'student': user.student,
    'boss': user.boss,
    'director': user.director,
  }

  const handleUpdateModal = () => {
    setState(prev => ({
      ...prev,
      showModal: true
    }));

    allUpdateFields(userDataReturn);
  }

  const handleDelete = () => {
    handleDeleteUser(user.email, user.id)
  }



  return (
    <>
      {
        <div className="card__user">

          <figure>
            <img src={
              (user.media.profile !== '')
                ?
                import.meta.env.VITE_MEDIA_URL + user.media.profile
                :
                '/assets/profile.jpg'
            }
              alt=""
              width="200"
            />
          </figure>

          <div className="user__datos">
            <div className="datos__docente">
              <h3><i className="fas fa-user-tie"></i>{user.names.split(' ')[0] + " " + user.fathername}</h3>
              <p><i className="fas fa-layer-group"></i>{user.typeuser}<span>({user.codeprofessor})</span></p>
              <p><i className="fas fa-university"></i>{user.schoolInfo.faculty}</p>
              <p><i className="fas fa-graduation-cap"></i>{shortNameDepartment(user.schoolInfo.department)}</p>
              <p><i className="fas fa-envelope-square"></i>{user.email}</p>
              <p><i className="fas fa-phone-square-alt"></i>{user.mobilenumber}</p>
              <div className="datos__actions">
                <button
                  className="editar"
                  onClick={handleUpdateModal}
                >
                  <i className="fa fa-edit" aria-hidden="true"></i>
                </button>

                <button
                  className="eliminar"
                  onClick={handleDelete}
                >
                  <i className="fa fa-trash-alt" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}