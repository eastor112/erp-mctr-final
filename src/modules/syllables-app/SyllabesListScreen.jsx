import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetAllCourses, startGetSyllabeDetailData } from '../../actions/syllabe-actions'
import { createSyllabe, getFilteredSyllabesSummary } from '../../helpers/syllabes-helpers'
import { getAllSchools } from '../../helpers/unt-structure-helpers'
import { MenuTopPanel } from '../panel/components/MenuTopPanel'
import { SyllabeCard } from './components/SyllabeCard'
import { SyllabeFilters } from './components/SyllabeFilters'
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useStylesCreateSyllabe } from '../../materialStyles/createSyllabeStyles'



const actualYear = new Date().getFullYear();


//Component
export const SyllabesListScreen = () => {
  const { token } = useSelector(state => state.auth);
  const { courses } = useSelector(state => state.syllabe);
  const dispatch = useDispatch();

  const history = useHistory();

  const classes = useStylesCreateSyllabe();


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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={state.showModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={state.showModal}>
          <div className={classes.paper}>
            <h3 style={{ textAlign: 'center' }}>CREAR SÍLABO</h3>

            <Grid container spacing={3} alignItems='flex-end'>
              <Grid item xs={12}>
                <FormControl className={classes.formSelects}>
                  <InputLabel id="course-label">Seleccione el curso</InputLabel>
                  <Select
                    labelId="course-label"
                    id="course"
                    name="course"
                    value={formValues.course}
                    onChange={handleInputChange}
                  >

                    {
                      courses.map((course) => {
                        return <MenuItem key={course.id} value={course.id}>{course.cycle} ({course.code}) - {course.name}</MenuItem>
                      })
                    }

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} align='center'>

                <Button variant="contained" color="primary" onClick={handleCreateSyllabe} className={classes.formButton}>
                  Crear
                </Button>
                <Button variant="contained" color="secondary" onClick={handleCloseModal} className={classes.formButton}>
                  Cancelar
                </Button>
              </Grid>

            </Grid>
          </div>
        </Fade>
      </Modal>
    </>
  )
}
