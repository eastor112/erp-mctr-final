import React from 'react'

export const UsersAdminControls = ({
  closeModal,
  handleUpdateData,
  handleDeleteUser,
  userEmail,
  userId }) => {

  const handleDelete = () => {
    handleDeleteUser(userEmail, userId)
  }


  return (
    <div>
      <button
        type='submit'
        className='warning'
        onClick={handleUpdateData}
      >
        <p>Guardar</p>
        <i className="fas fa-save"> </i>
      </button>

      <button
        className='danger'
        onClick={handleDelete}
      >
        <p>Eliminar</p>
        <i className="fas fa-trash-alt"></i>
      </button>

      <button
        className='safe'
        onClick={closeModal}
      >
        <p>Salir</p>
        <i className="fas fa-backspace"></i>
      </button>
    </div>
  )
}
