import React from 'react'

export const ProfileAdminFields = () => {
  return (
    <>
      <h4>Permisos de la cuenta</h4>

      <div className='perfil__form__admin'>

        <div className='admin__user__modal__field'>
          <p class='alert_warning'>
            <i class="fas fa-exclamation-triangle"> Advertencia</i>
            Tenga cuidado al modificar la información de esta sección. Podría dejar
            al usuario sin poder ingresar a su cuenta o permitirle el acceso a donde no debería.
          </p>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="id">ID Usuario:</label>
          <input
            type="text"
            id='id'
            name='id'
            readOnly
            disabled
            value={'id'}
          />
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="is_active">Cuenta activa:</label>
          <select name="is_active" id="is_active">
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="external">Es externo: </label>
          <select name="external" id="external">
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="student">Es estudiante: </label>
          <select name="student" id="student">
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="professor">Es docente: </label>
          <select name="professor" id="professor">
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="director">Es director de escuela: </label>
          <select name="director" id="director">
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="boss">Es director de departamento: </label>
          <select name="boss" id="boss">
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

      </div>

    </>
  )
}
