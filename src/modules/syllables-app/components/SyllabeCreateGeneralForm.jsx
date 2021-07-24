import React from 'react'

export const SyllabeCreateGeneralForm = () => {
  return (
    <>

      <div className="curso__select">
        <select name="curso" id="">
          <option value="">Seleccione el curso</option>
          <option value="">Programación I</option>
          <option value="">Programación II</option>
          <option value="">Procesamiento de Imágenes</option>
          <option value="">Electrónica Analógica</option>
        </select>
      </div>


      <div className="area__select">
        <select name="area__curso" id="">
          <option value="">Seleccione el area del curso</option>
          <option value="">Ciencias básicas y matemáticas</option>
          <option value="">Estudios generales</option>
        </select>
      </div>


      <div className="sede__sem__sec">

        <select name="sede" id="">
          <option value="">Trujillo</option>
          <option value="">Huamachuco</option>
          <option value="">Valle Jequetepeque</option>
        </select>

        <select name="semestre" id="">
          <option value="">Semestre académico</option>
          <option value="">Nivelación</option>
          <option value="">I</option>
          <option value="">II</option>
        </select>

        <select name="seccion" id="">
          <option value="">Sección/grupo</option>
          <option value="">A</option>
          <option value="">B</option>
        </select>
      </div>


      <div className="inicio__final">
        <input type="date" name="inicio" id="" />
        <input type="date" name="final" id="" />
      </div>


      <div className="tipo__unidades">
        <select name="tipo" id="">
          <option value="">Estudios generales</option>
          <option value="">Específico</option>
          <option value="">Especialidad</option>
        </select>

        <select name="unidades" id="">
          <option value="">Numero unidades</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>


      <div className="semanas__unidad">
        <input type="text" placeholder="N° Semanas unidad 1" />
        <input type="text" placeholder="N° Semanas unidad 2" />
        <input type="text" placeholder="N° Semanas unidad 3" />
        <input type="text" placeholder="N° Semanas unidad 4" />
      </div>

      <div className="condicion__docente">
        <input type="text" placeholder="Horas de retroalimentacion" />
        <select name="condicion" id="">
          <option value="">Seleccione su condicion docente</option>
          <option value="">Coordinador</option>
          <option value="">Equipo docente</option>
        </select>
      </div>

    </>
  )
}
