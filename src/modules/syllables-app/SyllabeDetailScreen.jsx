import React from 'react'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'

export const SyllabeDetailScreen = () => {
  return (
    <>
      <MenuTopPanel />
      <div className="silabo__completo">
        <section className="silabo__encabezado">

          <div className="silabo__detalle__logos">
            <div className="header__derecha">
              <figure>
                <img src="./../../assets/logo_unt.png" alt="" width="200" />
              </figure>
              <h6>Universidad Nacional de Trujillo</h6>
            </div>

            <div className="header__izquierda">
              <h6>Programa de Ingeniería Mecatrónica</h6>
              <figure>
                <img src="./../../assets/logo_mecatronica.png" alt="" width="200" />
              </figure>
            </div>
          </div>

          <h2 className="silabo__detalle__titulo">SILABO DE TEORIA DE MÁQUINAS Y MECANÍSMOS</h2>
        </section>

        <section className="silabo__datos">
          <h3>1. DATOS DE IDENTIFICACIÓN</h3>
          <div className="datos__contenido">
            <p><span className="datos__subtitulo">1.1. Area:</span> Ciencias básicas y tecnológicas</p>
            <p><span className="datos__subtitulo">1.2. Facultad:</span> Ingeniería</p>
            <p><span className="datos__subtitulo">1.3. Departamento académico:</span> Mecánica y energía</p>
            <p><span className="datos__subtitulo">1.4. Programa de estudios:</span> Ingeniería Mecatrónica</p>
            <p><span className="datos__subtitulo">1.5. Sede:</span> Trujillo </p>
            <p><span className="datos__subtitulo">1.6. Año - Semestre académico:</span> 2021-I</p>
            <p><span className="datos__subtitulo">1.7. Ciclo:</span> VI</p>
            <p><span className="datos__subtitulo">1.8. Código de la experiencia curricular:</span> ECM-VI5</p>
            <p><span className="datos__subtitulo">1.9. Sección/grupo:</span> A</p>
            <p><span className="datos__subtitulo">1.10. Créditos:</span> 4</p>
            <div>
              <p><span className="datos__subtitulo">1.11. Requisito(s):</span></p>
              <ul className="requisitos">
                <li>Análisis matemático IV</li>
                <li>Resistencia de materiales</li>
              </ul>
            </div>
            <p><span className="datos__subtitulo">1.12. Inicio - Término:</span> 15/05/21 - 15/09/21</p>
            <p><span className="datos__subtitulo">1.13. Tipo:</span> Específico</p>
            <p><span className="datos__subtitulo">1.14. Régimen:</span> Obligatorio</p>
            <p><span className="datos__subtitulo">1.15. Organización semestral del tiempo (semanas):</span> 15 semanas</p>

            <table className="datos__tabla__horas">
              <thead>
                <tr >
                  <th className="actividades" rowSpan="2">Actividades</th>
                  <th className="horas" rowSpan="2">Total de horas</th>
                  <th className="unidades" colSpan="3">Unidades</th>
                </tr>
                <tr>
                  <th>I</th>
                  <th>II</th>
                  <th>III</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Teóricas</td>
                  <td>32</td>
                  <td>12</td>
                  <td>10</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Prácticas</td>
                  <td>61</td>
                  <td>23</td>
                  <td>19</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Retroalimentación</td>
                  <td>3</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Total horas</td>
                  <td colSpan="4">96</td>
                </tr>
              </tbody>
            </table>

            <p><span className="datos__subtitulo">1.16. Docente / equipo docente(s):</span>
            </p>

            <table className="datos__tabla__docente">
              <thead>
                <tr>
                  <th>CONDICIÓN: </th>
                  <th>APELLIDOS Y NOMBRES: </th>
                  <th>PROFESIÓN: </th>
                  <th>EMAIL INSTITUCIONAL: </th>
                </tr>

              </thead>
              <tbody className="">
                <tr>
                  <td>Coordinador(a):</td>
                  <td>Asto Rodriguez Emerson Maximo</td>
                  <td>Ingeniero Mecatrónico</td>
                  <td>easto@unitru.edu.pe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="silabo__sumilla">
          <h3>2. SUMILLA</h3>
          <p>
            La experiencia curricular Teoría de las Máquinas y Mecanismos es de naturaleza teórico-práctica y de
            carácter
            obligatorio. Tiene como propósito ayudar a potenciar las habilidades de los estudiantes en el análisis del
            comportamiento cinemático y dinámico de mecanismos,
            contribuye directamente al logro de las capacidades terminales CT5.2 y CT5.3 del perfil de
            egreso.
            Esta experiencia curricular será útil para que el estudiante comprenda el enlace entre la
            conceptualización básica adquirida en la mecánica teórica y la aplicación real pretendida en
            el diseño mecatrónico, ya que desde esta experiencia curricular se efectúa la síntesis de las
            máquinas, así como también se desarrolla su cinemática y dinámica.
          </p>
        </section>

        <section className="silabo__competencias">
          <h3>3. COMPETENCIAS GENERALES</h3>
          <div className="competencias__generales">
            <div className="competencia">
              <p><span>Competencia general 1(CG1): </span>Demuestra compromiso e iniciativa para promover el desarrollo
                ético, social, cultural y ambiental mediante la práctica de actividades artísticas, culturales, sociales
                y deportivas.
              </p>
            </div>
            <div className="competencia">
              <p><span>Competencia general 2 (CG2): </span> Desarrolla su pensamiento crítico, aplicado en la solución
                de problemas en un contexto globalizado, haciendo uso de la tecnología de la información.</p>
            </div>
          </div>

          <div className="competencias__unidades">
            <div className="competencia__unidad">
              <p><span>Unidad competencia (UC1): </span>Se desenvuelve eficazmente como miembro o líder de equipos
                diversos.</p>
            </div>
            <div className="competencia__unidad">
              <p><span>Unidad competencia (UC2): </span>Crea, selecciona y utiliza técnicas, recursos y herramientas
                modernas de la ingeniería, incluyendo la predicción y el modelamiento, con la comprensión de sus
                limitaciones para aplicarlas en la solución de problemas.</p>
            </div>
          </div>
        </section>

        <section className="silabo__programacion">
          <h3>4. PROGRAMACIÓN ACADÉMICA</h3>
          <table className="programacion__tabla">
            <thead>
              <tr>
                <th className="capacidades__head">Capacidades</th>
                <th className="resultados__head">Resultados de aprendizaje</th>
                <th className="contenidos__head">Contenidos</th>
                <th className="estrategias__head">Estrategias didácticas</th>
                <th className="evidencias__head">Evidencias de desempeño</th>
                <th className="instrumentos__head">Instrumentos de evaluación</th>
                <th className="semana__head">N° Semana</th>
              </tr>
            </thead>
            <tbody>

              <tr className="numero__unidad">
                <td colSpan="7">UNIDAD 1</td>
              </tr>
              <tr className="semana">
                <td className="capacidades" rowSpan="4">
                  <ul>
                    <li>
                      <span>[CT 11.1]</span> Selecciona y utiliza técnicas, recursos y herramientas modernas de la
                      ingeniería para aplicarlas en la solución de problemas.
                    </li>
                    <li>
                      <span>[CT 11.2]</span> Selecciona y utiliza técnicas, recursos y herramientas modernas de la
                      ingeniería para aplicarlas en la solución de problemas.
                    </li>
                  </ul>
                </td>
                <td className="resultados" rowSpan="4">

                  <ul>
                    <li>
                      Elabora la solución de un problema mediante el planteamiento de un algoritmo.(Portafolio)
                    </li>
                    <li>
                      Formula soluciones optimas utilizando lo aprendido a situaciones de su entorno.(Examen)
                    </li>
                  </ul>
                </td>
                <td className="contenidos">
                  <ul>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Documental ¿De qué es capaz la inteligencia artificial?</li>
                  </ul>
                </td>
                <td className="estrategias">
                  <ul>
                    <li>Socialización de silabo (Conferencia)</li>
                    <li>
                      Lenguajes de programación y alcances de la programación en ingeniería Mecatrónica (Conferencia)
                    </li>
                    <li>
                      Realización y envió de un ensayo “Alcances de la programación en la ingeniería mecatrónica”.
                    </li>
                  </ul>
                </td>
                <td className="evidencias">
                  <ul>
                    <li>Informe de Ensayo (IE1)</li>
                    <li>Informe de Práctica (IP1)</li>
                  </ul>
                </td>
                <td className="instrumentos">
                  <ul>
                    <li>Rubrica [1] (para trabajos)</li>
                    <li>Rubrica [2] (para informes)</li>
                  </ul>
                </td>
                <td className="semana__fecha">
                  <h4>Sem. 1</h4>
                  <p>Del 03/05/21 al 09/05/21</p>
                </td>
              </tr>
              <tr className="semana">
                <td className="contenidos">
                  <ul>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Documental ¿De qué es capaz la inteligencia artificial?</li>
                  </ul>
                </td>
                <td className="estrategias">
                  <ul>
                    <li>Socialización de silabo (Conferencia)</li>
                    <li>
                      Lenguajes de programación y alcances de la programación en ingeniería Mecatrónica (Conferencia)
                    </li>
                    <li>
                      Realización y envió de un ensayo “Alcances de la programación en la ingeniería mecatrónica”.
                    </li>
                  </ul>
                </td>
                <td className="evidencias">
                  <ul>
                    <li>Informe de Ensayo (IE1)</li>
                    <li>Informe de Práctica (IP1)</li>
                  </ul>
                </td>
                <td className="instrumentos">
                  <ul>
                    <li>Rubrica [1] (para trabajos)</li>
                    <li>Rubrica [2] (para informes)</li>
                  </ul>
                </td>
                <td className="semana__fecha">
                  <h4>Sem. 2</h4>
                  <p>Del 03/05/21 al 09/05/21</p>
                </td>
              </tr>
              <tr className="semana">
                <td className="contenidos">
                  <ul>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Documental ¿De qué es capaz la inteligencia artificial?</li>
                  </ul>
                </td>
                <td className="estrategias">
                  <ul>
                    <li>Socialización de silabo (Conferencia)</li>
                    <li>
                      Lenguajes de programación y alcances de la programación en ingeniería Mecatrónica (Conferencia)
                    </li>
                    <li>
                      Realización y envió de un ensayo “Alcances de la programación en la ingeniería mecatrónica”.
                    </li>
                  </ul>
                </td>
                <td className="evidencias">
                  <ul>
                    <li>Informe de Ensayo (IE1)</li>
                    <li>Informe de Práctica (IP1)</li>
                  </ul>
                </td>
                <td className="instrumentos">
                  <ul>
                    <li>Rubrica [1] (para trabajos)</li>
                    <li>Rubrica [2] (para informes)</li>
                  </ul>
                </td>
                <td className="semana__fecha">
                  <h4>Sem. 3</h4>
                  <p>Del 03/05/21 al 09/05/21</p>
                </td>
              </tr>
              <tr className="semana">
                <td className="contenidos">
                  <ul>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Presentación de la experiencia curricular</li>
                    <li>Documental ¿De qué es capaz la inteligencia artificial?</li>
                  </ul>
                </td>
                <td className="estrategias">
                  <ul>
                    <li>Socialización de silabo (Conferencia)</li>
                    <li>
                      Lenguajes de programación y alcances de la programación en ingeniería Mecatrónica (Conferencia)
                    </li>
                    <li>
                      Realización y envió de un ensayo “Alcances de la programación en la ingeniería mecatrónica”.
                    </li>
                  </ul>
                </td>
                <td className="evidencias">
                  <ul>
                    <li>Informe de Ensayo (IE1)</li>
                    <li>Informe de Práctica (IP1)</li>
                  </ul>
                </td>
                <td className="instrumentos">
                  <ul>
                    <li>Rubrica [1] (para trabajos)</li>
                    <li>Rubrica [2] (para informes)</li>
                  </ul>
                </td>
                <td className="semana__fecha">
                  <h4>Sem. 4</h4>
                  <p>Del 03/05/21 al 09/05/21</p>
                </td>
              </tr>

            </tbody>
          </table>
        </section>

        <section className="silabo__evaluacion">
          <h3>5. SISTEMA DE EVALUACIÓN</h3>

          <div className="evaluacion__legal">
            <h5>Base legal:</h5>
            <ul>
              <li>Reglamento de normas generales de evaluación y aprendizaje con el enfoque en competencias, de los
                estudiantes de pregrado UNT.
              </li>
            </ul>
          </div>

          <div className="evaluacion__principios">
            <h5>Pricipios y procedimientos:</h5>
            <ul>
              <li>
                La evaluación por competencias se caracteriza por ser progresiva, formativa y auténtica por lo que es de
                procesos e integral, y se orienta a asegurar el logro de los aprendizajes esperados, capacidades y
                competencias respectivas.
              </li>
              <li>
                Se evalúan las evidencias concretas a través de las cuales los estudiantes demuestran haber logrado
                aprendizajes (exposiciones orales, presentación de trabajos escritos, ensayos, exposiciones, mapas
                conceptuales, infografías, maquetas, etc.) y sirven para recoger información, tomar decisiones oportunas
                e
                informar a los propios estudiantes y autoridades respectivas de las acciones de mejora.
              </li>
              <li>
                Las pruebas de evaluación se rendirán en las fechas señaladas por el docente y no podrán ser
                reprogramadas
                fuera de la fecha determinada.
              </li>
            </ul>
          </div>
          <div className="evaluacion__detalle">
            <h5>Detalle:</h5>
            <pre>
              {
                `
                La evaluación de las unidades [1] y [2] se realizará con la siguiente ecuación:
                PU=0.15*PI + 0.20*PP + 0.65*EE
                Donde:
                PI: Promedio informes o trabajos (Inx), evaluados con la rúbrica [1]
                PP: Promedio de prácticas realizadas (Px), evaluados con la rúbrica [2]
                EE: Examen escrito (Ex)
                  `
              }
            </pre>
          </div>

          <div className="evaluacion__criterios">
            <h5>Criterios para la promoción:</h5>
            <ul>
              <li>El sistema de calificación es vigesimal (0-20). La nota aprobatoria es 11, en el promedio promocional
                el medio punto (0.5) favorece al estudiante. La asistencia es obligatoria, tener más del 30% de
                inasistencia injustificada es causal de inhabilitación</li>
            </ul>
          </div>

          <div className="evaluacion__reportes">
            <h5>Nivel de logros:</h5>
            <ul>
              <li><span className="nivel__logro">Nivel de inicio: </span> Necesita reforzar las capacidades terminales
                previstas en coordinación con Dirección de Escuela y/o Estudios Generales, según corresponda. (0-10).
              </li>
              <li><span className="nivel__logro">Nivel en proceso: </span> Requiere fortalecer la mayoría de las capacidades
                terminales. (11-13)
              </li>
              <li><span className="nivel__logro">Nivel intermedio: </span> Muestra un nivel de dominio adecuado en las
                capacidades terminales en la experiencia curricular. (14-17)
              </li>
              <li><span className="nivel__logro">Nivel avanzado: </span> Posee un alto nivel de dominio de las capacidades
                terminales de la experiencia curricular (18-20)
              </li>
            </ul>
          </div>
        </section>

        <section className="silabo__consejeria">
          <h3>6. CONSEJERÍA ACADÉMICA</h3>

          <div className="proposito">
            <h4>6.1. Propósito:</h4>
            <ul className="proposito__lista">
              <li>
                Acompañamiento y monitoreo académico oportuno al estudiante que no logra las capacidades programadas en
                el proceso del desarrollo de la experiencia curricular como parte del plan de mejora (Ver anexo 4).
              </li>
            </ul>
          </div>

          <div className="desarrollo">
            <h4>6.2. Desarrollo de la tutoría:</h4>
            <ul className="desarrollo__lista">
              <li><span className="subtitulo">Día:</span> Jueves</li>
              <li><span className="subtitulo">Horario:</span> 5pm - 7pm</li>
              <li><span className="subtitulo">Lugar</span> Aula virtual mediante chat y foros/ videoconferencia (solo de
                ser necesario)</li>
            </ul>
          </div>

        </section>

        <section className="silabo__bibliografia">
          <h3>7. BIBLIOGRAFÍA</h3>
          <table>
            <thead>
              <tr>
                <th>REFERENCIA</th>
                <th>ENLACE VIRTUAL O LUGAR</th>
              </tr>
            </thead>
            <tbody>
              <tr className="referencia">
                <td>
                  Reinholtz, M. (2004). MECANISMOS Y DINAMICA DE MAQUINARIA. Edit. LIMUSA
                </td>
                <td className="lugar">
                  Biblioteca de ingeniería
                </td>
              </tr>
              <tr className="referencia">
                <td>
                  Reinholtz, M. (2004). MECANISMOS Y DINAMICA DE MAQUINARIA. Edit. LIMUSA
                </td>
                <td className="lugar">
                  Biblioteca de ingeniería
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="silabo__fecha">
          <h4>Trujillo, 11 de noviembre de 2020</h4>
        </section>

        <section className="silabo__firmas">
          <div className="izquierda">
            <figure className="firma__docente">
              <img src="./../../assets/firma__docente.jpg" alt="docente" />
            </figure>
            <p>___________________________________</p>
            <h5>Firma docente</h5>
          </div>
          <div className="derecha">
            <figure className="firma__director">
              <img src="./../../assets/firma__director.jpeg" alt="director" />
            </figure>
            <p>___________________________________</p>
            <h5>Visado director de escuela</h5>
          </div>

        </section>
      </div>

      <div className="silabo__acciones">
        <button className="retornar" onClick={() => hist.goBack()}>
          <i className="fas fa-undo-alt"></i>
        </button>
        <button className="descargar" onClick={() => hist.push('/panel/silabos/detalle')}>
          <i className="fa fa-download" aria-hidden="true"></i>
        </button>
        <button className="editar" onClick={() => hist.push('/panel/silabos/crear')}>
          <i className="far fa-edit"></i>
        </button>
        <button class="revisar" onClick={() => hist.push('/panel/silabos/crear')}>
          <i class="far fa-check-square"></i>
        </button>
        <button className="eliminar" onClick={() => hist.push('/panel/silabos')}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>

    </>
  )
}
