import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal';
import { startGetAllCourses, startGetSyllabeDetailData } from '../../actions/syllabe-actions'
import { createSyllabe, getFilteredSyllabesSummary } from '../../helpers/syllabes-helpers'
import { getAllSchools } from '../../helpers/unt-structure-helpers'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeCard } from './components/SyllabeCard'
import { SyllabeFilters } from './components/SyllabeFilters'
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';


const actualYear = new Date().getFullYear();


//modal styles
const customStyles = {
  overlay: {
    zIndex: '10',
    backgroundColor: '#999b'
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    right: 'auto',
    bottom: 'auto',
  },
};

Modal.setAppElement('#root');

//Component
export const SyllabesListScreen = () => {
  const { token } = useSelector(state => state.auth);
  const { courses } = useSelector(state => state.syllabe);
  const dispatch = useDispatch();

  const history = useHistory();

  const { formValues, handleInputChange } = useForm({
    course: ''
  })

  const [state, setState] = useState({
    syllabes: [],
    schools: [],
    loading: false,
    showModal: false
  });


  useEffect(() => {

    if (courses.length === 0) {
      dispatch(startGetAllCourses(token));
    }

    const schools = JSON.parse(localStorage.getItem('schools'));

    if (schools) {
      getFilteredSyllabesSummary('', actualYear, '', '', '', '', token)
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

          getFilteredSyllabesSummary('', actualYear, '', '', '', '', token)
            .then((syllabesData) => {
              setState({
                ...state,
                syllabes: syllabesData,
                schools: schools
              });
            });
        });

    }

  }, [])


  const handleCloseModal = () => {
    setState({
      ...state,
      showModal: false
    })
  }

  const handleCreateSyllabe = () => {
    createSyllabe(formValues.course, token).then((syllabeCreated) => {
      dispatch(startGetSyllabeDetailData(syllabeCreated.id, token));
      handleCloseModal();
      history.push(`${import.meta.env.BASE_URL}panel/syllabes/create/${syllabeCreated.id}/${syllabeCreated.course}`);
    });
  }

  return (
    <>

      <MenuTopPanel />

      <SyllabeFilters
        token={token}
        setState={setState}
        schools={state.schools}
      />

      <section className="contenedor__silabos__cards">
        {
          state.syllabes.map((syllabeObj) => {
            return <SyllabeCard
              key={syllabeObj.syllabe_id}
              token={token}
              {...syllabeObj}
            />
          })
        }
      </section>

      <Modal
        isOpen={state.showModal}
        style={customStyles}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={false}
      >
        <h3>Seleccione el curso</h3>

        <div>
          <label htmlFor="course"></label>
          <select
            name="course"
            id="course"
            value={formValues.course}
            onChange={handleInputChange}
          >
            {
              courses.map((course) => {
                return (
                  <option
                    key={course.id}
                    value={course.id}
                  >
                    {course.cycle} ({course.code}) - {course.name}
                  </option>)
              })
            }
          </select>
        </div>

        <button
          onClick={handleCreateSyllabe}
        >
          Crear
        </button>
        <button
          onClick={handleCloseModal}
        >
          Cancelar
        </button>
      </Modal>
    </>
  )
}
