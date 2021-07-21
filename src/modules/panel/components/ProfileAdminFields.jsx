import React from 'react'
import { useBooleanFields } from '../../../hooks/useBooleanField'

export const ProfileAdminFields = ({
  id,
  is_active,
  external,
  student,
  professor,
  director,
  boss,
  handleInputChange }) => {

  const [state_is_active, handleChange_is_active] = useBooleanFields(is_active, handleInputChange);
  const [state_external, handleChange_external] = useBooleanFields(external, handleInputChange);
  const [state_student, handleChange_student] = useBooleanFields(student, handleInputChange);
  const [state_professor, handleChange_professor] = useBooleanFields(professor, handleInputChange);
  const [state_director, handleChange_director] = useBooleanFields(director, handleInputChange);
  const [state_boss, handleChange_boss] = useBooleanFields(boss, handleInputChange);

  return (
    <>
      <h4>Permisos de la cuenta</h4>

      <div className='perfil__form__admin'>

        <div className='admin__user__modal__field'>
          <p className='alert_warning'>
            <i className="fas fa-exclamation-triangle"> Advertencia</i>
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
            value={id}
          />
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="is_active">Cuenta activa:</label>
          <select
            name="is_active"
            id="is_active"
            value={state_is_active}
            onChange={handleChange_is_active}
          >
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="external">Es externo: </label>
          <select
            name="external"
            id="external"
            value={state_external}
            onChange={handleChange_external}
          >
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="student">Es estudiante: </label>
          <select
            name="student"
            id="student"
            value={state_student}
            onChange={handleChange_student}
          >
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="professor">Es docente: </label>
          <select
            name="professor"
            id="professor"
            value={state_professor}
            onChange={handleChange_professor}
          >
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="director">Es director de escuela: </label>
          <select
            name="director"
            id="director"
            value={state_director}
            onChange={handleChange_director}
          >
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

        <div className='admin__user__modal__field'>
          <label htmlFor="boss">Es director de departamento: </label>
          <select
            name="boss"
            id="boss"
            value={state_boss}
            onChange={handleChange_boss}
            readOnly
            disabled
          >
            <option value="0">No</option>
            <option value="1">Si</option>
          </select>
        </div>

      </div>

    </>
  )
}
