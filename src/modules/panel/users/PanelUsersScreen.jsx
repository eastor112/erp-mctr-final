import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllUser } from '../../../helpers/users-helpers'
import { UsersIndividualCard } from '../components/UsersIndividualCard'
import Modal from 'react-modal';
import { UsersAdminFilters } from '../components/UsersAdminFilters';
import { ProfileStudentFields } from '../components/ProfileStudentFields';
import { ProfileGeneralFields } from '../components/ProfileGeneralFields';
import { ProfileProfessorFields } from '../components/ProfileProfessorFields';
import { useForm } from '../../../hooks/useForm';
import { getAllSchools } from '../../../helpers/schools-helpers';
import { onlyNameImage } from '../../../helpers/general-helpers';
import { ProfileAdminFields } from '../components/ProfileAdminFields';


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


export const PanelUsersScreen = () => {
  const [state, setState] = useState({
    users: [],
    showModal: false,
    selectedUser: {},
    schools: []
  })

  const [formValues, handleInputChange, handleInputFileChange,] = useForm()

  const { token } = useSelector(state => state.auth)


  // 
  useEffect(() => {
    const schoolsAll = JSON.parse(localStorage.getItem('schools'))

    getAllUser(token).then(({ data }) => {
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
  }, [])

  return (
    <>
      <UsersAdminFilters />

      <section className="admin__contenedor__user__card">
        {
          state.users
          &&
          state.users.map((user) => {
            return <UsersIndividualCard
              key={user.id}
              user={user}
              setState={setState}

            />
          })
        }
      </section>




      <Modal
        isOpen={state.showModal}
        style={customStyles}
        onRequestClose={() => setState({ ...state, showModal: false })}
        shouldCloseOnOverlayClick={false}
      >
        <h2>Modificar datos de usuario</h2>
        <div className='admin__users__modal'>

          {
            state.selectedUser.media
            &&
            <div className='admin__users__modal__section'>
              <figure>
                <img
                  src={
                    (state.selectedUser.media.profile === '')
                      ?
                      '/assets/profile.jpg'
                      :
                      import.meta.env.VITE_MEDIA_URL + state.selectedUser.media.profile
                  }
                  alt=""
                />
              </figure>
              <p>
                {
                  (state.selectedUser.media.signature === '')
                    ?
                    <small className='highlight_not_ok'>
                      <i className="fas fa-times-circle"></i>
                      'El usuario aun no ha guardado una firma'
                    </small>

                    :
                    <small className='highlight_ok'>
                      <i className="fas fa-check-circle"> </i>
                      Firma: {onlyNameImage(state.selectedUser.media.signature)}
                    </small>
                }
              </p>

              <div>
                <button className='warning'>
                  <p>Guardar</p>
                  <i class="fas fa-save"> </i>
                </button>

                <button className='danger'>
                  <p>Eliminar</p>
                  <i class="fas fa-trash-alt"></i>
                </button>

                <button
                  className='safe'
                  onClick={() => setState({ ...state, showModal: false })}
                >
                  <p>Salir</p>
                  <i class="fas fa-backspace"></i>
                </button>
              </div>
            </div>
          }

          <div className='admin__users__modal__section'>
            <ProfileAdminFields />

          </div>


          <div className='admin__users__modal__section'>
            <ProfileGeneralFields
              names={state.selectedUser.names}
              fathername={state.selectedUser.fathername}
              mothername={state.selectedUser.mothername}
              email={state.selectedUser.email}
              typeuser={state.selectedUser.typeuser}
              mobilenumber={state.selectedUser.mobilenumber}
              school={state.selectedUser.school}
              media={state.selectedUser.media}
              handleInputChange={handleInputChange}
              handleInputFileChange={handleInputFileChange}
              state={state}
            />

          </div>


          <div className='admin__users__modal__section'>
            <ProfileProfessorFields
              codeprofessor={state.selectedUser.codeprofessor}
              category={state.selectedUser.category}
              career={state.selectedUser.career}
              grade={state.selectedUser.grade}
              typeServices={state.selectedUser.typeServices}
              dedication={state.selectedUser.dedication}
              supportposition={state.selectedUser.supportposition}
              handleInputChange={handleInputChange}
            />

            <ProfileStudentFields
              codestudent={state.selectedUser.codestudent}
              graduate={state.selectedUser.graduate}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>



      </Modal>

    </>
  )
}
