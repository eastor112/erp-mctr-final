import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllSyllabeDate } from '../../helpers/syllabes-helpers'
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
  const { token } = useSelector(state => state.auth)
  const [state, setState] = useState({
    data: {}
  })

  useEffect(() => {

    getAllSyllabeDate(pk, token)
      .then((data) => {
        setState({
          ...state,
          data: data
        })
      })

  }, [])

  return (
    <>

      <MenuTopPanel />
      {
        (<div className="silabo__completo" >

          <SyllabeDetailHeader name={state.data} />

          <SyllabeDetailGeneralData />

          <SyllabeDetailSommelier />

          <SyllabeDetailCompetences />

          <SyllabeDetailProgramming />

          <SyllabeDetailEvaluation />

          <SyllabeDetailCounseling />

          <SyllabeDetailBibliography />

          <SyllabeDetailDate />

          <SyllabeDetailSignatures />

        </div>)
      }


      <SyllabeDetailControls />

    </>
  )
}
