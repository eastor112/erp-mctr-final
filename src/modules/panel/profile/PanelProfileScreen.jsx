import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { capitalizeString } from '../../../helpers/general-helpers';
import { getAllSchools } from '../../../helpers/schools-helpers';
import { updateUser } from '../../../helpers/users-helpers';
import { useForm } from '../../../hooks/useForm'

export const PanelProfileScreen = () => {

  const { user, token } = useSelector(state => state.auth);
  const [formValues, handleInputChange] = useForm({
    'id': user.id,
    'names': user.names,
    'fathername': user.fathername,
    'mothername': user.mothername,
    'email': user.email,
    'accesslevel': user.accesslevel,
    'mobilenumber': user.mobilenumber,
    'school': user.schoolInfo.id
  });

  const [state, setState] = useState({
    schools: {}
  });

  const {
    names,
    fathername,
    mothername,
    email,
    accesslevel,
    mobilenumber,
    school } = formValues;

  useEffect(() => {
    getAllSchools(token).then((schools) => {
      setState({ ...state, schools: schools });
    });
  }, [user.schoolInfo.id])


  const handleSubmit = (e) => {
    e.preventDefault();


    updateUser(formValues, token).then((data) => {
      // TODO crear accion para actualizar información de los usuarios
      console.log(data);
    })
  };

  //TODO Poner sweetalert2 cuando se hace el envío del formulario
  // TODO Agregar formulario condicional para cuando son docentes y estudiantes

  return (
    <>
      <h3 className="perfil__usuario__titulo">{`${names} ${fathername} ${mothername}`.toUpperCase()}</h3>

      <form
        className="perfil__form"
        action=""
        onSubmit={handleSubmit}
      >


        {/*  */}
        <label htmlFor="accesslevel">Nivel de acceso:</label>
        <select
          id='accesslevel'
          name="accesslevel"
          onChange={handleInputChange}
          value={accesslevel}
          disabled
          readOnly
        >
          <option value="estudiante">Estudiante</option>
          <option value="docente">Docente</option>
          <option value="director">Director</option>
        </select>


        {/*  */}
        <label htmlFor="email">Email institucional:</label>
        <input
          id='email'
          type="email"
          placeholder="Escriba..."
          name='email'
          onChange={handleInputChange}
          value={email}
          autoComplete='off'
          readOnly
          disabled
        />


        {/*  */}
        <label htmlFor="names">Nombres:</label>
        <input
          id='names'
          type="text"
          placeholder="Escriba..."
          name='names'
          onChange={handleInputChange}
          value={names}
          autoComplete='off'
        />


        {/*  */}
        <label htmlFor="fathername">Apellido paterno:</label>
        <input
          id='fathername'
          type="text"
          placeholder="Escriba..."
          name='fathername'
          onChange={handleInputChange}
          value={fathername}
          autoComplete='off'
        />


        {/*  */}
        <label htmlFor="mothername">Apellido materno:</label>
        <input
          id='mothername'
          type="text"
          placeholder="Escriba..."
          name='mothername'
          onChange={handleInputChange}
          value={mothername}
          autoComplete='off'
        />



        {/*  */}
        <label htmlFor="photo">Foto perfil: </label>
        <input id='photo' type="file" />


        {/*  */}
        <label htmlFor="">Firma para la exportación de documentos: </label>
        <input type="file" />


        {/*  */}
        <label htmlFor="school">Escuela a la que brinda servicios:</label>
        <select
          name="school"
          id="school"
          value={school}
          onChange={handleInputChange}
        >
          {
            state.schools.length > 0 && (
              state.schools.map((schoolObj) => {
                return <option value={schoolObj.id} key={schoolObj.id}> {schoolObj.name} </option>
              })
            )
          }
        </select>


        {/*  */}
        <label htmlFor="mobilenumber">Numero de celular:</label>
        <input
          id='mobilenumber'
          type="text"
          placeholder="Escriba..."
          name='mobilenumber'
          onChange={handleInputChange}
          value={mobilenumber}
          autoComplete='off'
        />


        {/* <input type="number" placeholder="Código docente  ó matrícula estudiante" value={user.codeprofessor} />
        <input type="text" placeholder="Cargo administrativo (opcional)" value={user.supportposition} />
        <input type="text" placeholder="Facultad a la que pertenece" value={'Facultad de ' + user.schoolInfo.faculty} />
        <input type="text" placeholder="Departamento al que pertenece" value={'Departamento de ' + user.schoolInfo.department} />
        <input type="text" placeholder="Profesión" value={user.career} />

        <select name="select">
          <option value="value0" defaultValue>{user.grade}</option>
          <option value="value1">Estudiante</option>
          <option value="value2">Bachiller</option>
          <option value="value3">Titulado o licenciado</option>
          <option value="value4">Magister</option>
          <option value="value5">Doctor</option>
          <option value="value6">Philosophie Doctor</option>
        </select> */}

        <button type="submit">
          <i className="fa fa-save" aria-hidden="true"></i>
          &nbsp;&nbsp;GUARDAR CAMBIOS
        </button>
      </form>
    </>
  )
}
