import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InfoIcon from '@material-ui/icons/Info';
import ScheduleIcon from '@material-ui/icons/Schedule';
import GavelIcon from '@material-ui/icons/Gavel';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {
  startGetAllCourses,
  startGetAllProfessors,
  startGetSyllabeDetailData
} from '../../actions/syllabe-actions';
import { getBaseSyllabeData, updateGeneralData } from '../../helpers/syllabes-helpers';
import { useForm } from '../../hooks/useForm';
import { MenuTopPanel } from '../panel/components/MenuTopPanel';
import { SyllabeCreateBibliography } from './components/SyllabeCreateBibliography';
import { SyllabeCreateControls } from './components/SyllabeCreateControls';
import { SyllabeCreateCounseling } from './components/SyllabeCreateCounseling';
import { SyllabeCreateEvaluation } from './components/SyllabeCreateEvaluation';
import { SyllabeCreateGeneralData } from './components/SyllabeCreateGeneralData';
import { SyllabeCreateProgramming } from './components/SyllabeCreateProgramming';
import { useStylesCreateSyllabe } from '../../materialStyles/createSyllabeStyles';
//

export const SyllabeCreateScreen = () => {

  const { pk, syllabe_action } = useParams();
  const { token } = useSelector(state => state.auth);
  const { actualSyllabe, courses, professors } = useSelector(state => state.syllabe);
  const dispatch = useDispatch();
  const classes = useStylesCreateSyllabe();

  const [state, setState] = useState({
    navValue: +localStorage.getItem('syllabe_location') || 0,
    isLoading: false
  })

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

  const { formValues, handleInputChange, allUpdateFields, setFormValues } = useForm({
    'id': null,
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
    id,
    course,
    principalprofessor,
    assistantprofessors,
    director,
    year,
    semester,
    section,
    startdate,
    finishdate,
    totalweeks,
    legalbase,
    procedures,
    evaluationdetail,
    criteria,
    achievementlevel,
    counselingpurpose,
    counselingday,
    counselinghour,
    counselingplace } = formValues;

  useEffect(() => {
    getBaseSyllabeData(pk, token)
      .then((syllabeBase) => {
        allUpdateFields(syllabeBase);
      })
  }, [pk])


  useEffect(() => {
    localStorage.setItem('syllabe_location', state.navValue);
  }, [state.navValue]);


  const handleUdpadeGeneralData = () => {
    setState({ ...state, isLoading: true });

    Swal.fire({
      title: 'Actualizando...',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    updateGeneralData(pk, formValues, token).then((data) => {
      if (data.id) {
        setState({ ...state, isLoading: false })
        Swal.close();
        document.location = "#";
      }
    });
  }

  return (
    <>
      <MenuTopPanel />

      <div className="crear__silabo">

        <BottomNavigation
          value={state.navValue}
          onChange={(event, newValue) => {
            setState({
              ...state,
              navValue: newValue
            });
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Datos generales" icon={<InfoIcon />} />
          <BottomNavigationAction label="Programación " icon={<ScheduleIcon />} />
          <BottomNavigationAction label="Reglas de Evaluación" icon={<GavelIcon />} />
          <BottomNavigationAction label="Consejería académica" icon={<SupervisorAccountIcon />} />
          <BottomNavigationAction label="Bibliografía" icon={<MenuBookIcon />} />
        </BottomNavigation>


        <section className="crear__datos">

          {
            state.navValue === 0
            &&
            <SyllabeCreateGeneralData
              id={id}
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
              setFormValues={setFormValues}
              handleUdpadeGeneralData={handleUdpadeGeneralData}
            />
          }

          {
            state.navValue === 1
            &&

            (
              actualSyllabe.units
              &&
              <SyllabeCreateProgramming
                actualSyllabe={actualSyllabe}
                setFormValues={setFormValues}
                token={token}
              />
            )
          }

          {
            state.navValue === 2
            &&
            <SyllabeCreateEvaluation
              legalbase={legalbase}
              procedures={procedures}
              evaluationdetail={evaluationdetail}
              criteria={criteria}
              achievementlevel={achievementlevel}
              handleInputChange={handleInputChange}
              handleUdpadeGeneralData={handleUdpadeGeneralData}
            />
          }


          {
            state.navValue === 3
            &&
            <SyllabeCreateCounseling
              counselingpurpose={counselingpurpose}
              counselingday={counselingday}
              counselinghour={counselinghour}
              counselingplace={counselingplace}
              handleInputChange={handleInputChange}
              handleUdpadeGeneralData={handleUdpadeGeneralData}
            />
          }

          {
            state.navValue === 4
            &&
            (
              actualSyllabe.bibliography
              &&
              <SyllabeCreateBibliography
                actualSyllabe={actualSyllabe}
                token={token}
              />
            )
          }

          {/* TODO, PARA CUANDO EL SILABO ESTÉ COMPLETO */}
          {/* <div className="finalizar__revision">
            <button>SOLICITAR REVISIÓN</button>
            <button className="no-activo">FINALIZAR REVISIÓN</button>
          </div> */}

        </section>

      </div>

      <SyllabeCreateControls pk={pk} token={token} />


    </>
  )
}
