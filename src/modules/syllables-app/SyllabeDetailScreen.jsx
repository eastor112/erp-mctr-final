import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { startGetSyllabeDetailData } from '../../actions/syllabe-actions'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeDetailBibliography } from './components/SyllabeDetailBibliography'
import { SyllabeDetailCompetences } from './components/SyllabeDetailCompetences'
import { SyllabeDetailControls } from './components/SyllabeDetailControls'
import { SyllabeDetailCounseling } from './components/SyllabeDetailCounseling'
import { SyllabeDetailDate } from './components/SyllabeDetailDate'
import { SyllabeDetailEvaluation } from './components/SyllabeDetailEvaluation'
import { SyllabeDetailGeneralData } from './components/SyllabeDetailGeneralData'
import { SyllabeDetailHeader } from './components/SyllabeDetailHeader'
import { SyllabeDetailProgramming } from './components/SyllabeDetailProgramming'
import { SyllabeDetailSignatures } from './components/SyllabeDetailSignatures'
import { SyllabeDetailSommelier } from './components/SyllabeDetailSommelier'

export const SyllabeDetailScreen = () => {

  const { pk } = useParams()
  const dispatch = useDispatch()

  const {
    actualSyllabeSummary,
    actualSyllabe,
    professorMedia,
    directorMedia } = useSelector(state => state.syllabe)

  const { token } = useSelector(state => state.auth)


  useEffect(() => {
    dispatch(startGetSyllabeDetailData(pk, token));
  }, [])


  return (
    <>

      <MenuTopPanel />
      {
        Object.keys(actualSyllabeSummary).length !== 0
        &&
        (<div className="silabo__completo" >


          <SyllabeDetailHeader
            program={actualSyllabeSummary.school}
            courseName={actualSyllabeSummary.course_name}
          />


          <SyllabeDetailGeneralData
            area={actualSyllabeSummary.course_category}
            faculty={actualSyllabeSummary.faculty}
            department={actualSyllabeSummary.department}
            school={actualSyllabeSummary.school}
            campus={actualSyllabeSummary.campus}
            year={actualSyllabeSummary.syllabe_year}
            semester={actualSyllabeSummary.syllabe_semester}
            cycle={actualSyllabeSummary.course_cycle}
            code={actualSyllabeSummary.course_code}
            section={actualSyllabeSummary.syllabe_section}
            credits={actualSyllabeSummary.course_credits}
            prerequisite={actualSyllabe.course.prerequisite}
            startdate={actualSyllabe.startdate}
            finishdate={actualSyllabe.finishdate}
            totalweeks={actualSyllabe.totalweeks}
            type={actualSyllabe.course.type}
            regime={actualSyllabe.course.regime}
            units={actualSyllabe.units}
            theoryhours={actualSyllabe.course.theoryhours}
            practicehours={actualSyllabe.course.practicehours}
            laboratoryhours={actualSyllabe.course.laboratoryhours}
            principalprofessor={actualSyllabe.principalprofessor}
            assistantprofessors={actualSyllabe.assistantprofessors}
          />

          <SyllabeDetailSommelier
            sommelier={actualSyllabe.course.sommelier}
          />

          <SyllabeDetailCompetences
            generalcompetence={actualSyllabe.course.generalcompetence}
            specificcompetence={actualSyllabe.course.specificcompetence}
            unitcompetence={actualSyllabe.course.unitcompetence}
          />

          <SyllabeDetailProgramming
            units={actualSyllabe.units}
          />

          <SyllabeDetailEvaluation
            legalbase={actualSyllabe.legalbase}
            procedures={actualSyllabe.procedures}
            evaluationdetail={actualSyllabe.evaluationdetail}
            criteria={actualSyllabe.criteria}
            achievementlevel={actualSyllabe.achievementlevel}
          />

          <SyllabeDetailCounseling
            counselingpurpose={actualSyllabe.counselingpurpose}
            counselingday={actualSyllabe.counselingday}
            counselinghour={actualSyllabe.counselinghour}
            counselingplace={actualSyllabe.counselingplace}
          />

          <SyllabeDetailBibliography
            resources={actualSyllabe.bibliography.resources}
          />

          <SyllabeDetailDate
            visadate={actualSyllabe.visadate}
          />

          <SyllabeDetailSignatures
            professorSignature={professorMedia.signature}
            directorSignature={directorMedia.signature}
          />

        </div>)
      }


      <SyllabeDetailControls />

    </>
  )
}
