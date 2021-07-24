import React from 'react'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'

export const SyllabeCreateScreen = () => {
  return (
    <>


      <MenuTopPanel />

      <div className="crear__silabo">

        <h2>CREANDO NUEVO SILABO</h2>
        <section className="crear__datos">


          <div className="datos__identificacion__titulo">
            <h3>DATOS DE IDENTIFICACIÓN</h3>
            <div>
              <a href="!#"><button className="revisar__btn__"><i className="fa fa-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button className="revisar__btn__"><i className="fa fa-check-circle"
                aria-hidden="true"></i></button></a>
              <a href="!#"><button className="revisar__btn__"><i className="fas fa-exclamation-circle"></i></button></a>
            </div>

          </div>

          <div className="container__datos__generales">
            <div className="titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h4>DATOS GENERALES</h4>
            </div>
            <div>
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


              <div className="boton__agregar">
                <button>Agregar docente</button>
              </div>

              <div className="docente__agregado">

                <div className="docente__agregado__titulo">
                  <h5>Equipo docente 1:</h5>
                  <button><i className="far fa-trash-alt"></i></button>
                </div>

                <div className="apellidos">
                  <input type="text" placeholder="Apellido Paterno" />
                  <input type="text" placeholder="Apellido Materno" />
                </div>
                <div className="nombre">
                  <input type="text" placeholder="Nombres" />
                </div>
                <div className="profesion">
                  <input type="text" placeholder="Profesion" />
                </div>
                <div className="email">
                  <input type="email" placeholder="email" />
                </div>

                <div className="condicion__docente__agregado">
                  <select name="condicion__docente__agregado" id="">
                    <option value="">Condicion docente</option>
                    <option value="">Equipo docente</option>
                    <option value="">Coordinador</option>
                  </select>
                </div>
              </div>
              <div className="docente__agregado">

                <div className="docente__agregado__titulo">
                  <h5>Equipo docente 2:</h5>
                  <button><i className="far fa-trash-alt"></i></button>
                </div>

                <div className="apellidos">
                  <input type="text" placeholder="Apellido Paterno" />
                  <input type="text" placeholder="Apellido Materno" />
                </div>
                <div className="nombre">
                  <input type="text" placeholder="Nombres" />
                </div>
                <div className="profesion">
                  <input type="text" placeholder="Profesion" />
                </div>
                <div className="email">
                  <input type="email" placeholder="email" />
                </div>

                <div className="condicion__docente__agregado">
                  <select name="condicion__docente__agregado" id="">
                    <option value="">Condicion docente</option>
                    <option value="">Equipo docente</option>
                    <option value="">Coordinador</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          <div className="programacion__academica__titulo">
            <h3>PROGRAMACIÓN ACADÉMICA</h3>
            <div>
              <a href="!#"><button><i className="fa fa-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fa fa-check-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fas fa-exclamation-circle"></i></button></a>
            </div>
          </div>


          <div className="container__unidad">

            <div className="unidad__titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h4>UNIDAD 1</h4>
            </div>

            <div>
              <input type="text" placeholder="Nombre o tema de la unidad" />
            </div>

            <div className="agregar__capacidad">
              <button>
                Agregar capacidad
              </button>
            </div>

            <div className="capacidad__agregada">
              <select name="" id="">
                <option value="">[CT11.1] Selecciona y utiliza técnicas, recursos y herramientas modernas de la
                  ingeniería...</option>
                <option value="">[CT 11.2] Selecciona y utiliza técnicas, recursos y herramientas modernas de la...
                </option>
              </select>
              <button>
                <i className="far fa-trash-alt"></i>
              </button>
            </div>

            <div className="capacidad__agregada">
              <select name="" id="">
                <option value="">[CT11.1] Selecciona y utiliza técnicas, recursos y herramientas modernas de la
                  ingeniería...</option>
                <option value="">[CT 11.2] Selecciona y utiliza técnicas, recursos y herramientas modernas de la...
                </option>
              </select>
              <button>
                <i className="far fa-trash-alt"></i>
              </button>
            </div>

            <div className="agregar__resultado">
              <button>
                Agregar resultado
              </button>
            </div>

            <div className="resultado__agregado">
              <h6>Resultado de aprendizaje</h6>
              <textarea name="" id="" cols="90" rows="5"></textarea>
              <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
            </div>
            <div className="resultado__agregado">
              <h6>Resultado de aprendizaje</h6>
              <textarea name="" id="" cols="90" rows="5"></textarea>
              <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
            </div>


            <div className="semana__titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h5>SEMANA 1</h5>
            </div>

            <div className="container__semana">
              <div>
                <h6>Contenidos:</h6>
                <textarea name="contenidos" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Estrategias didácticas:</h6>
                <textarea name="estrategias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Evidencias de desempeño:</h6>
                <textarea name="evidencias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Instrumentos de evaluación:</h6>
                <textarea name="instrumentos" id="" cols="90" rows="5"></textarea>
              </div>
            </div>

            <div className="semana__titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h5>SEMANA 2</h5>
            </div>
            <div className="container__semana">
              <div>
                <h6>Contenidos:</h6>
                <textarea name="contenidos" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Estrategias didácticas:</h6>
                <textarea name="estrategias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Evidencias de desempeño:</h6>
                <textarea name="evidencias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Instrumentos de evaluación:</h6>
                <textarea name="instrumentos" id="" cols="90" rows="5"></textarea>
              </div>
            </div>

          </div>
          <div className="container__unidad">

            <div className="unidad__titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h4>UNIDAD 2</h4>
            </div>

            <div>
              <input type="text" placeholder="Nombre o tema de la unidad" />
            </div>

            <div className="agregar__capacidad">
              <button>
                Agregar capacidad
              </button>
            </div>

            <div className="capacidad__agregada">
              <select name="" id="">
                <option value="">[CT11.1] Selecciona y utiliza técnicas, recursos y herramientas modernas de la
                  ingeniería...</option>
                <option value="">[CT 11.2] Selecciona y utiliza técnicas, recursos y herramientas modernas de la...
                </option>
              </select>
              <button>
                <i className="far fa-trash-alt"></i>
              </button>
            </div>

            <div className="capacidad__agregada">
              <select name="" id="">
                <option value="">[CT11.1] Selecciona y utiliza técnicas, recursos y herramientas modernas de la
                  ingeniería...</option>
                <option value="">[CT 11.2] Selecciona y utiliza técnicas, recursos y herramientas modernas de la...
                </option>
              </select>
              <button>
                <i className="far fa-trash-alt"></i>
              </button>
            </div>

            <div className="agregar__resultado">
              <button>
                Agregar resultado
              </button>
            </div>

            <div className="resultado__agregado">
              <h6>Resultado de aprendizaje</h6>
              <textarea name="" id="" cols="90" rows="5"></textarea>
              <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
            </div>
            <div className="resultado__agregado">
              <h6>Resultado de aprendizaje</h6>
              <textarea name="" id="" cols="90" rows="5"></textarea>
              <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
            </div>

            <div className="semana__titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h5>SEMANA 1</h5>
            </div>

            <div className="container__semana">
              <div>
                <h6>Contenidos:</h6>
                <textarea name="contenidos" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Estrategias didácticas:</h6>
                <textarea name="estrategias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Evidencias de desempeño:</h6>
                <textarea name="evidencias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Instrumentos de evaluación:</h6>
                <textarea name="instrumentos" id="" cols="90" rows="5"></textarea>
              </div>
            </div>

            <div className="semana__titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h5>SEMANA 2</h5>
            </div>
            <div className="container__semana">
              <div>
                <h6>Contenidos:</h6>
                <textarea name="contenidos" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Estrategias didácticas:</h6>
                <textarea name="estrategias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Evidencias de desempeño:</h6>
                <textarea name="evidencias" id="" cols="90" rows="5"></textarea>
              </div>
              <div>
                <h6>Instrumentos de evaluación:</h6>
                <textarea name="instrumentos" id="" cols="90" rows="5"></textarea>
              </div>
            </div>

          </div>


          <div className="evaluacion__titulo">
            <h3>EVALUACIÓN</h3>
            <div>
              <a href="!#"><button><i className="fa fa-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fa fa-check-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fas fa-exclamation-circle"></i></button></a>
            </div>
          </div>
          <div className="container__evaluacion">
            <div className="descripcion__titulo">
              <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
              <h4>DESCRIPCIÓN</h4>
            </div>
            <div className="principios">
              <h5>Principios y procedimientos</h5>
              <textarea name="principios" id="" cols="90" rows="5">
                -La evaluación por competencias se caracteriza por ser progresiva, formativa y auténtica por lo que es de procesos e integral, y se orienta a asegurar el logro de los aprendizajes esperados, capacidades y competencias respectivas.
                -Se evalúan las evidencias concretas a través de las cuales los estudiantes demuestran haber logrado aprendizajes (exposiciones orales, presentación de trabajos escritos, ensayos, exposiciones, mapas conceptuales, infografías, maquetas, etc.) y sirven para recoger información, tomar decisiones oportunas e informar a los propios estudiantes y autoridades respectivas de las acciones de mejora.
                -Las pruebas de evaluación se rendirán en las fechas señaladas por el docente y no podrán ser reprogramadas fuera de la fecha determinada.
              </textarea>
            </div>
            <div className="detalle">
              <h5>Detalle: </h5>
              <textarea name="principios" id="" cols="90" rows="5">
                PF = (PU1 + PU2 + PU3)/3
              </textarea>
            </div>
            <div className="criterios">
              <h5>Criterios para la promoción: </h5>
              <textarea name="criterios" id="" cols="90" rows="5">
                El sistema de calificación es vigesimal (0-20). La nota aprobatoria es 11, en el promedio promocional el medio punto (0.5) favorece al estudiante. La asistencia es obligatoria, tener más del 30% de inasistencia injustificada es causal de inhabilitación
              </textarea>
            </div>
          </div>

          <div className="consejeria__titulo">
            <h3>CONSEJERIA ACADÉMICA</h3>
            <div className="">
              <a href="!#"><button><i className="fa fa-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fa fa-check-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fas fa-exclamation-circle"></i></button></a>
            </div>
          </div>
          <div className="container__consejeria">

            <div className="lugar_titulo">
              <div>
                <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </div>
              <h4>LUGAR Y HORA</h4>
            </div>

            <div className="consejeria__dia">
              <select name="dia" id="">
                <option value="">Dia</option>
                <option value="">Lunes</option>
                <option value="">Martes</option>
                <option value="">Miércoles</option>
                <option value="">Jueves</option>
                <option value="">Viernes</option>
              </select>
            </div>
            <div className="consejeria__hora">
              <input type="time" name="inicio" id="" />
              <input type="time" name="termino" id="" />
            </div>
            <div>
              <input type="text" placeholder="Lugar" />
            </div>
          </div>

          <div className="bibliografia__titulo">
            <h3>BIBLIOGRAFÍA</h3>
            <div>
              <a href="!#"><button><i className="fa fa-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fa fa-check-circle" aria-hidden="true"></i></button></a>
              <a href="!#"><button><i className="fas fa-exclamation-circle"></i></button></a>
            </div>
          </div>
          <div className="container__bibliografia">
            <div className="material__titulo">
              <i className="fa fa-caret-right no-activo" aria-hidden="true"></i>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
              <h4>LIBROS Y MATERIAL ACADEMICO</h4>
            </div>
            <div className="agregar__referencia">
              <button>Agregar referencia</button>
            </div>
            <div className="referencia__agregada">
              <input type="text" placeholder="Referencia" />
              <input type="text" placeholder="Lugar donde se encuentra" />
              <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
            </div>
            <div className="referencia__agregada">
              <input type="text" placeholder="Referencia" />
              <input type="text" placeholder="Lugar donde se encuentra" />
              <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
            </div>
            <div className="referencia__agregada">
              <input type="text" placeholder="Referencia" />
              <input type="text" placeholder="Lugar donde se encuentra" />
              <button><i className="far fa-trash-alt" aria-hidden="true"></i></button>
            </div>
          </div>

          <div className="finalizar__revision">
            <button>SOLICITAR REVISIÓN</button>
            <button className="no-activo">FINALIZAR REVISIÓN</button>
          </div>

        </section>

      </div>

      <div className="silabo__acciones">
        <button className="retornar" onClick={() => hist.goBack()}>
          <i className="fas fa-undo-alt"></i>
        </button>
        <button className="guardar" onClick={() => hist.push('/panel/silabos/crear')}>
          <i className="fas fa-save"></i>
        </button>
        <button className="descargar" onClick={() => hist.push('/panel/silabos')}>
          <i className="fa fa-download" aria-hidden="true"></i>
        </button>
        <button className="visualizar" onClick={() => hist.push('/panel/silabos/detalle')}>
          <i className="fas fa-play"></i>
        </button>
        <button className="eliminar">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>

    </>
  )
}
