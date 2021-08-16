import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { startGetAllCourses, startGetAllProfessors, startGetSyllabeDetailData } from '../../../actions/syllabe-actions';
import { useParams } from 'react-router-dom';

const year = new Date().getFullYear();

export const SyllabeCreateGeneralForm = () => {


  const classes = useStylesCreateSyllabe();
  const { pk } = useParams()

  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  const { actualSyllabe, courses, professors } = useSelector(state => state.syllabe);


  useEffect(() => {
    if (Object.keys(actualSyllabe).length === 0) {
      dispatch(startGetSyllabeDetailData(pk, token));
      dispatch(startGetAllCourses(token));

    } else {
      dispatch(startGetAllProfessors(actualSyllabe.course.curriculum.school, token))
    }
  }, [actualSyllabe])


  return (
    <>
      <Grid container spacing={3}>

        {/* Curso */}
        <Grid item xs={12}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="course">Experiencia Curricular</InputLabel>
            <Select
              labelId="course-label"
              id="course"
              name="course"
            >
              {
                courses?.map((course) => {
                  return (
                    <MenuItem
                      key={course.id}
                      value={course.id}>
                      {`${course.cycle}°  (${course.code}) -  ${course.name}`}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>


        <Grid item xs={4}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="year">Año</InputLabel>
            <Select
              labelId="year-label"
              id="year"
            // value={age}
            // onChange={handleChange}
            >

              <MenuItem value={year}>{year}</MenuItem>
              <MenuItem value={year - 1}>{year - 1}</MenuItem>

            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="demo-simple-select-label">Semestre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={'1'}>I (impar)</MenuItem>
              <MenuItem value={'2'}>II (par)</MenuItem>
              <MenuItem value={'3'}>Nivelación</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="demo-simple-select-label">Sección</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={'a'}>A</MenuItem>
              <MenuItem value={'b'}>B</MenuItem>
              <MenuItem value={'u'}>Única</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="totalweeks"
            label="Número de semanas del ciclo"
            type="number"
            defaultValue={15}
            className={classes.textField}
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="date"
            label="Inicio de ciclo"
            type="date"
            defaultValue="2021-05-24"
            className={classes.textField}
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            id="date"
            label="Final de ciclo"
            type="date"
            defaultValue="2021-05-24"
            className={classes.textField}
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="demo-simple-select-label">Docente Principal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              {
                professors?.map((professor) => {
                  return (
                    <MenuItem key={professor.id} value={professor.id}>
                      {`${professor.fathername} ${professor.mothername}, ${professor.names} (${professor.codeprofessor})`}
                    </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary">Agregar equipo docente</Button>
        </Grid>

        <Grid item xs={10}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="demo-simple-select-label">Equipo docente</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={'a'}>Emerson Asto</MenuItem>
              <MenuItem value={'b'}>Luis Julca</MenuItem>
              <MenuItem value={'u'}>Javier Lescano</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <Button variant="contained" color="secondary">Eliminar</Button>
        </Grid>

      </Grid>

    </>
  )
}
