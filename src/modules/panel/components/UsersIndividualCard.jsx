import React from 'react'

export const UsersIndividualCard = ({ user, setState }) => {

  const handleClick = () => {
    setState(prev => ({
      ...prev,
      showModal: true,
      selectedUser: user
    }));

  }

  return (
    <>
      {
        <div className="card__user">
          <figure>
            <img
              src={(user.media.profile !== '') ? import.meta.env.VITE_MEDIA_URL + user.media.profile : '/assets/profile.jpg'}
              alt=""
              width="200"
            />
          </figure>
          <div className="user__datos">
            <div className="datos__docente">
              <h3><i className="fas fa-user-tie"></i>{user.names.split(' ').slice(-2, -1) + " " + user.fathername}</h3>
              <p><i className="fas fa-layer-group"></i>{user.typeuser}<span>({user.codeprofessor})</span></p>
              <p><i className="fas fa-university"></i>{user.schoolInfo.faculty}</p>
              <p><i className="fas fa-graduation-cap"></i>{user.schoolInfo.department}</p>
              <p><i className="fas fa-envelope-square"></i>{user.email}</p>
              <p><i className="fas fa-phone-square-alt"></i>{user.mobilenumber}</p>
              <div className="datos__actions">
                <button
                  className="editar"
                  onClick={handleClick}
                >
                  <i className="fa fa-edit" aria-hidden="true"></i>
                </button>

                <button className="eliminar"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}