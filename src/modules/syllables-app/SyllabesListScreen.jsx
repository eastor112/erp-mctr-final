import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getAllSyllabesSummary } from '../../helpers/syllabes-helpers'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeCard } from './components/SyllabeCard'
import { SyllabeFilters } from './components/SyllabeFilters'

export const SyllabesListScreen = () => {
  const { token } = useSelector(state => state.auth);



  const [state, setState] = useState({
    syllabes: [],
    schools: [],
    loading: false
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



  useEffect(() => {

    const schools = JSON.parse(localStorage.getItem('schools'));

    if (schools) {
      getAllSyllabesSummary(token)
        .then((syllabesData) => {
          setState({
            ...state,
            syllabes: syllabesData,
            schools: schools
          })
        })

    } else {
      getAllSchools(token)
        .then((schools) => {
          localStorage.setItem('schools', JSON.stringify(schools));

          getAllSyllabesSummary(token)
            .then((syllabesData) => {
              setState({
                ...state,
                syllabes: syllabesData,
                schools: schools
              })
            })
        });

    }

  }, [])

  return (
    <>

      <MenuTopPanel />

      <SyllabeFilters token={token} setState={setState} schools={state.schools} />

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
