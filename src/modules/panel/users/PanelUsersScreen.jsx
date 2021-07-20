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


const customStyles = {
  overlay: {
    zIndex: '10',
    // backgroundColor: 'transparent'
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '60%'
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
      console.log('assdfdf');
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

        <button
          onClick={() => setState({ ...state, showModal: false })}
        >
          X
        </button>

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

      </Modal>

    </>
  )
}
