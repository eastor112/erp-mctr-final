//react
import React, { useEffect, useState } from 'react'
//third
import { useSelector } from 'react-redux'
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
//local
import { deleteUserAccount, filterUsersBySchoolAndLastname, getAllUser, updateUser } from '../../../helpers/users-helpers'
import { getAllSchools } from '../../../helpers/unt-structure-helpers';
import { ProfileAdminFields } from '../components/ProfileAdminFields';
import { ProfileStudentFields } from '../components/ProfileStudentFields';
import { ProfileGeneralFields } from '../components/ProfileGeneralFields';
import { ProfileProfessorFields } from '../components/ProfileProfessorFields';
import { useForm } from '../../../hooks/useForm';
import { UsersAdminControls } from '../components/UsersAdminControls';
import { UsersAdminFilters } from '../components/UsersAdminFilters';
import { UsersAdminSignatureConfirm } from '../components/UsersAdminSignatureConfirm';
import { UsersAdminPhotoModal } from '../components/UsersAdminPhotoModal';
import { UsersIndividualCard } from '../components/UsersIndividualCard'
import { useHistory } from 'react-router-dom';


//modal styles
const customStyles = {
  overlay: {
    zIndex: '10',
    backgroundColor: '#999b'
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    right: 'auto',
    bottom: 'auto',
  },
};

Modal.setAppElement('#root');


//component
export const PanelUsersScreen = () => {

  const { token, user, isAdmin } = useSelector(state => state.auth);

  const history = useHistory()
  if (!isAdmin) {
    history.push(import.meta.env.BASE_URL + 'panel')
  }

  const [state, setState] = useState({
    users: [],
    showModal: false,
    schools: [],
    departments: [],
    faculty: [],
    loading: false,
    filterValues: {
      'school': 'all',
      'search': '',
    }
  })

  const { formValues,
    handleInputChange,
    handleInputFileChange,
    allUpdateFields } = useForm({
      //General profile
      'id': '',
      'names': '',
      'fathername': '',
      'mothername': '',
      'email': '',
      'typeuser': '',
      'mobilenumber': '',
      'school': '',
      'media': '',

      //Student profile
      'codestudent': '',
      'graduate': '',

      //Professor profile
      'codeprofessor': '',
      'category': '',
      'career': '',
      'grade': '',
      'typeServices': '',
      'dedication': '',
      'supportposition': '',
      'signature': '',
      'photo': '',

      //Permissions data
      'is_active': '',
      'external': '',
      'professor': '',
      'student': '',
      'boss': '',
      'director': '',
    });


  // Trae todas las escuelas y todos los usuarios de la API
  useEffect(() => {

    const schoolsAll = JSON.parse(localStorage.getItem('schools'));

    getAllUser(user.schoolInfo.id, token).then(({ data }) => {

      if (schoolsAll) {

        setState({
          ...state,
          users: data,
          schools: schoolsAll
        });

      } else {

        getAllSchools(token).then((schoolsAll) => {

          setState({
            ...state,
            users: data,
            schools: schoolsAll
          });
          localStorage.setItem('schools', JSON.stringify(schoolsAll));
        });
      }
    })
  }, []);


  const closeModal = () => {
    setState({ ...state, showModal: false })
  }

  const handleUpdateData = () => {
    setState({
      ...state,
      loading: true
    });

    Swal.fire({
      title: 'Actualizando...',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    updateUser({ ...formValues }, formValues.media, user.boss, token)
      .then(() => {

        filterUsersBySchoolAndLastname(state.filterValues.school, state.filterValues.search, token)
          .then((filteredUsers) => {
            setState({
              ...state,
              users: filteredUsers,
              showModal: false,
              loading: false
            });
            Swal.close();
          });
      });
  }

  const handleDeleteUser = (email, id) => {

    Swal.fire({
      title: `Esta seguro de eliminar a ${email}?`,
      text: "No podrá revertir esta acción luego!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserAccount(id, token).then((status) => {

          if (status === 204) {

            const restUsers = state.users.filter((userObj) => {
              return userObj.id !== id
            });

            setState({
              ...state,
              users: restUsers,
              showModal: false
            });

            Swal.fire(
              'Eliminado!',
              'El usuario ha sido eliminado con éxito',
              'success'
            )
          }
        });
      }
    })
  }


  return (
    <>
      <UsersAdminFilters
        token={token}
        schools={state.schools}
        userSchoolId={user.schoolInfo.id}
        setState={setState}
      />

      <section className="admin__contenedor__user__card">
        {
          state.users
          &&
          state.users.map((user) => {
            return <UsersIndividualCard
              key={user.id}
              user={user}
              setState={setState}
              allUpdateFields={allUpdateFields}
              handleDeleteUser={handleDeleteUser}
            />
          })
        }
      </section>

      {/* TODO pasar todo el modal a otro componente */}
      <Modal
        isOpen={state.showModal}
        style={customStyles}
        onRequestClose={() => setState({ ...state, showModal: false })}
        shouldCloseOnOverlayClick={false}
      >
        <h2>Modificar datos de usuario</h2>
        <div className='admin__users__modal'>

          {
            formValues.email !== ''
            &&
            <>
              <div className='admin__users__modal__section'>
                <UsersAdminPhotoModal profile={formValues.media.profile} />

                <UsersAdminSignatureConfirm signature={formValues.media.signature} />

                <UsersAdminControls
                  closeModal={closeModal}
                  handleUpdateData={handleUpdateData}
                  handleDeleteUser={handleDeleteUser}
                  userEmail={formValues.email}
                  userId={formValues.id}
                />

              </div>

              <div className='admin__users__modal__section'>
                <ProfileAdminFields
                  id={formValues.id}
                  is_active={formValues.is_active}
                  external={formValues.external}
                  student={formValues.student}
                  professor={formValues.professor}
                  director={formValues.director}
                  boss={formValues.boss}
                  handleInputChange={handleInputChange}
                />

              </div>

              {/*  */}
              <div className='admin__users__modal__section'>
                <ProfileGeneralFields
                  names={formValues.names}
                  fathername={formValues.fathername}
                  mothername={formValues.mothername}
                  email={formValues.email}
                  typeuser={formValues.typeuser}
                  mobilenumber={formValues.mobilenumber}
                  school={formValues.school}
                  media={formValues.media}
                  handleInputChange={handleInputChange}
                  handleInputFileChange={handleInputFileChange}
                  state={state}
                />

              </div>


              <div className='admin__users__modal__section'>
                <ProfileProfessorFields
                  codeprofessor={formValues.codeprofessor}
                  category={formValues.category}
                  career={formValues.career}
                  grade={formValues.grade}
                  typeServices={formValues.typeServices}
                  dedication={formValues.dedication}
                  supportposition={formValues.supportposition}
                  handleInputChange={handleInputChange}
                />

                <ProfileStudentFields
                  codestudent={formValues.codestudent}
                  graduate={formValues.graduate}
                  handleInputChange={handleInputChange}
                />
              </div>
            </>
          }

        </div>

      </Modal>

    </>
  )
}
