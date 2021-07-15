import React from 'react'

export const ProfileProfessorFields = () => {
  return (
    <>
      <h4>Datos de Docente:</h4>
      <div className="perfil__form__docente">

        <div>
          <label htmlFor="category">Categoría docente:</label>
          <select id='category' name="category">
            <option value="ayudante catedra">Ayudante de cátedra</option>
            <option value="jefe practica">Jefe de práctica</option>
            <option value="auxiliar">Auxiliar</option>
            <option value="asociado">Asociado</option>
            <option value="principal">Principal</option>
            <option value="emerito">Emérito</option>
            <option value="invitado">Invitado</option>
          </select>
        </div>


        <div>
          <label htmlFor="career">Profesión:</label>
          <input id='career' type="text" placeholder="Escriba..." name='career' />
        </div>

        <div>
          <label htmlFor="grade">Grado académico:</label>
          <select id='grade' name="grade">
            <option value="estudiante">Estudiante</option>
            <option value="bachiller">Bachiller</option>
            <option value="maestro">Maestro</option>
            <option value="doctor">Doctor</option>
            <option value="phd">Philosophie doctor</option>
          </select>
        </div>


        <div>
          <label htmlFor="type">Tipo de contrato:</label>
          <select name="type" id="type">
            <option value="recibos">Recibos por honorarios</option>
            <option value="contratado">Contratado</option>
            <option value="nombrado">Nombrado</option>
          </select>
        </div>


        <div>
          <label htmlFor="dedication">Dedicación:</label>
          <select name="dedication" id="dedication">
            <option value="tc40h">Tiempo completo 40 horas</option>
            <option value="tp20h">Tiempo parcial 20 horas</option>
            <option value="tp12h">Tiempo parcias 12 horas</option>
            <option value="tp10h">Tiempo parcial 10 horas</option>
            <option value="a132h">Tipo A1 - 32 horas</option>
            <option value="a216h">Tipo A2 - 16 horas</option>
            <option value="a38h">Tipo A3 - 8 horas</option>
            <option value="b132h">Tipo B1 - 32 horas</option>
            <option value="b216h">Tipo B2  - 16 horas</option>
            <option value="b38h">Tipo B3 - 8 horas</option>
          </select>
        </div>



        {/* Agregar ninguno a opciones back y establecer como default */}
        <div>
          <label htmlFor="supportposition">Cargo de apoyo:</label>
          <select name="supportposition" id="supportposition">
            <option value="ninguno">Ninguno</option>
            <option value="presidente calidad">Presidente comité de Calidad</option>
            <option value="miembro calidad">Miembro comité calidad</option>
            <option value="presidente coteccu">Presidente de COTECCU</option>
            <option value="miembro coteccu">Miembro de COTECCU</option>
            <option value="otro">Otro</option>
          </select>
        </div>

      </div>
    </>
  )
}
