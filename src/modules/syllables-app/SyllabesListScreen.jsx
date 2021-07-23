import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllSyllabesSummary } from '../../helpers/syllabes-helpers'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeCard } from './components/SyllabeCard'
import { SyllabeFilters } from './components/SyllabeFilters'

export const SyllabesListScreen = () => {
  const { token } = useSelector(state => state.auth);

  const [state, setState] = useState({
    syllabes: []
  })

  useEffect(() => {
    getAllSyllabesSummary(token)
      .then((syllabesData) => {
        setState({
          ...state,
          syllabes: syllabesData
        })
      })
  }, [])


  return (
    <>

      <MenuTopPanel />

      <SyllabeFilters />

      <section className="contenedor__silabos__cards">
        {
          state.syllabes.map((syllabeObj) => {
            return <SyllabeCard
              key={syllabeObj.syllabe_id}
              {...syllabeObj}
            />
          })
        }
      </section>

    </>
  )
}
