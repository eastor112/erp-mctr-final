import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { startGetAllCourses, startGetAllProfessors, startGetSyllabeDetailData } from '../../actions/syllabe-actions'
import { getBaseSyllabeData } from '../../helpers/syllabes-helpers'
import { useForm } from '../../hooks/useForm'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeCreateBibliography } from './components/SyllabeCreateBibliography'
import { SyllabeCreateControls } from './components/SyllabeCreateControls'
import { SyllabeCreateCounseling } from './components/SyllabeCreateCounseling'
import { SyllabeCreateEvaluation } from './components/SyllabeCreateEvaluation'
import { SyllabeCreateGeneralData } from './components/SyllabeCreateGeneralData'
import { SyllabeCreateProgramming } from './components/SyllabeCreateProgramming'
//

const actualYear = new Date().getFullYear();

const valores = {
  "course": null,
  "principalprofessor": null,
  "assistantprofessors": [],
  "director": null,
  "year": null,
  "semester": null,
  "section": null,
  "startdate": null,
  "finishdate": null,
  "totalweeks": null,
  "legalbase": "",
  "procedures": "",
  "evaluationdetail": "",
  "criteria": "",
  "achievementlevel": "",
  "counselingpurpose": "",
  "counselingday": "",
  "counselinghour": "",
  "counselingplace": "",
  "completed": false,
  "observed": false,
  "visa": false,
  "visadate": null
}

export const SyllabeCreateScreen = () => {

  const { pk, pk_course, syllabe_action } = useParams();
  const { token } = useSelector(state => state.auth);
  const { actualSyllabe, courses, professors } = useSelector(state => state.syllabe);
  const dispatch = useDispatch();


  useEffect(() => {
    if (Object.keys(actualSyllabe).length === 0) {
      dispatch(startGetSyllabeDetailData(pk, token));
      dispatch(startGetAllCourses(token));

    } else {

      if (professors.length === 0) {
        dispatch(startGetAllProfessors(actualSyllabe.course.curriculum.school, token))
      }

    }
  }, [actualSyllabe]);


  const { formValues, handleInputChange, ignore, allUpdateFields } = useForm({
    "course": null,
    "principalprofessor": null,
    "assistantprofessors": [],
    "director": null,
    "year": null,
    "semester": null,
    "section": null,
    "startdate": null,
    "finishdate": null,
    "totalweeks": null,
    "legalbase": "",
    "procedures": "",
    "evaluationdetail": "",
    "criteria": "",
    "achievementlevel": "",
    "counselingpurpose": "",
    "counselingday": "",
    "counselinghour": "",
    "counselingplace": "",
    "completed": false,
    "observed": false,
    "visa": false,
    "visadate": null
  })

  const {
    course,
    principalprofessor,
    assistantprofessors,
    director,
    year,
    semester,
    section,
    startdate,
    finishdate,
    totalweeks } = formValues;

  useEffect(() => {
    getBaseSyllabeData(pk, token)
      .then((syllabeBase) => {
        allUpdateFields(syllabeBase);
      })
  }, [pk])


  return (
    <>


      <MenuTopPanel />

      <div className="crear__silabo">

        <h2>
          {
            (syllabe_action === 'create')
              ?
              'CREANDO NUEVO SÍLABO'
              :
              'ACTUALIZANDO SÍLABO'
          }
        </h2>
        <section className="crear__datos">

          <SyllabeCreateGeneralData
            course={course}
            year={year}
            semester={semester}
            section={section}
            totalweeks={totalweeks}
            startdate={startdate}
            finishdate={finishdate}
            principalprofessor={principalprofessor}
            assistantprofessors={assistantprofessors}
            director={director}
            handleInputChange={handleInputChange}
            courses={courses}
            professors={professors}
          />

          <SyllabeCreateProgramming />

          <SyllabeCreateEvaluation />

          <SyllabeCreateCounseling />

          <SyllabeCreateBibliography />

          <div className="finalizar__revision">
            <button>SOLICITAR REVISIÓN</button>
            <button className="no-activo">FINALIZAR REVISIÓN</button>
          </div>

        </section>

      </div>

      <SyllabeCreateControls pk={pk} />

    </>
  )
}
