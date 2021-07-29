import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import { SyllabeCreateGeneralTitle } from './SyllabeCreateGeneralTitle'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'


const actualYear = new Date().getFullYear();

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export const SyllabeCreateGeneralData = ({
  course,
  year,
  semester,
  section,
  totalweeks,
  startdate,
  finishdate,
  principalprofessor,
  assistantprofessors,
  director,
  handleInputChange,
  courses,
  professors }) => {

  const classes = useStylesCreateSyllabe();

  const [addProfesor, setAddProfesor] = useState('')
  const [team, setTeam] = useState([]);

  useEffect(() => {
    if (assistantprofessors.length > 0 && team.length === 0) {
      setTeam([...assistantprofessors]);
    }
  }, [assistantprofessors])


  const handleInputChangeAssistant = (e) => {
    const value = e.target.value;
    setAddProfesor(value)
  }

  const handleAddProfessor = () => {
    if (addProfesor) {
      setTeam([...team, addProfesor]);
      setAddProfesor('')
    }

  }

  const handDeleteProfessor = (id) => {
    setTeam(team.filter((element) => element != id));
  }

  return (
    <>
      <div className="datos__identificacion__titulo">
        <h3>DATOS DE IDENTIFICACIÓN</h3>
        <SyllabeCreateRevision />
      </div>
      <div className="container__datos__generales">

        <SyllabeCreateGeneralTitle />

        <div>
          {
            course
            &&
            <Grid container spacing={3}>

              {/* course */}
              <Grid item xs={12}>
                <FormControl className={classes.formSelects}>
                  <InputLabel id="course-label">Experiencia Curricular</InputLabel>
                  <Select
                    labelId="course-label"
                    id="course"
                    name="course"
                    value={course}
                    onChange={handleInputChange}
                  >
                    {
                      courses?.map((course) => {
                        return (
                          <MenuItem
                            key={course.id}
                            value={course.id}
                          >
                            {`${course.cycle}°  (${course.code}) -  ${course.name}`}
                          </MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>
              </Grid>


              {/*year  */}
              <Grid item xs={4}>
                <FormControl className={classes.formSelects}>
                  <InputLabel id="year.label">Año</InputLabel>
                  <Select
                    labelId="year-label"
                    id="year"
                    name="year"
                    value={year}
                    onChange={handleInputChange}
                  >

                    <MenuItem value={actualYear}>{actualYear}</MenuItem>
                    <MenuItem value={actualYear - 1}>{actualYear - 1}</MenuItem>

                  </Select>
                </FormControl>
              </Grid>


              {/* semester */}
              <Grid item xs={4}>
                <FormControl className={classes.formSelects}>
                  <InputLabel id="semester-label">Semestre</InputLabel>
                  <Select
                    labelId="semester-label"
                    id="semester"
                    name="semester"
                    value={semester}
                    onChange={handleInputChange}
                  >
                    <MenuItem value={'1'}>I (impar)</MenuItem>
                    <MenuItem value={'2'}>II (par)</MenuItem>
                    <MenuItem value={'3'}>Nivelación</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


              {/* section */}
              <Grid item xs={4}>
                <FormControl className={classes.formSelects}>
                  <InputLabel id="section-label">Sección</InputLabel>
                  <Select
                    labelId="section-label"
                    id="section"
                    name="section"
                    value={section}
                    onChange={handleInputChange}
                  >
                    <MenuItem value={'a'}>A</MenuItem>
                    <MenuItem value={'b'}>B</MenuItem>
                    <MenuItem value={'u'}>Única</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


              {/* totalweeks */}
              <Grid item xs={4}>
                <TextField
                  label="Número de semanas del ciclo"
                  type="number"
                  className={classes.textField}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="totalweeks"
                  name='totalweeks'
                  value={totalweeks}
                  onChange={handleInputChange}
                />
              </Grid>


              {/* startdate */}
              <Grid item xs={4}>
                <TextField
                  label="Inicio de ciclo"
                  type="date"
                  className={classes.textField}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="startdate"
                  name='startdate'
                  value={startdate}
                  onChange={handleInputChange}
                />
              </Grid>


              {/* finishdate */}
              <Grid item xs={4}>
                <TextField
                  label="Final de ciclo"
                  type="date"
                  className={classes.textField}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  id="finishdate"
                  name={finishdate}
                  value={finishdate}
                  onChange={handleInputChange}
                />
              </Grid>


              {/* principalprofessor */}
              <Grid item xs={12}>
                {
                  professors.length > 0
                  &&
                  <FormControl className={classes.formSelects}>
                    <InputLabel id="finishdate-label">Docente Principal</InputLabel>
                    <Select
                      labelId="finishdate-label"
                      id="principalprofessor"
                      name='principalprofessor'
                      value={principalprofessor}
                      onChange={handleInputChange}
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
                }
              </Grid>



              <Grid item xs={6}>
                <Typography variant="h6" className={classes.title}>
                  Equipo Docente:
                </Typography>
                {
                  (team.length > 0)
                  &&
                  <div className={classes.demo}>
                    <List>
                      {
                        team.map((profe) => {
                          const ind = professors.find(pro => pro.id === profe)
                          return (
                            <ListItem key={profe}>
                              <ListItemAvatar>
                                <Avatar>
                                  <i className="fas fa-user-tie"></i>
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={`${ind?.fathername} ${ind?.mothername}, ${ind?.names} (${ind?.codeprofessor})`}
                              />
                              <ListItemSecondaryAction
                                onClick={() => handDeleteProfessor(profe)}
                              >
                                <IconButton edge="end" aria-label="delete">
                                  <i className="fas fa-trash"></i>
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>)
                        })
                      }
                    </List>
                  </div>
                }
              </Grid>



              <Grid item xs={9}>
                <FormControl className={classes.formSelects}>
                  <InputLabel id="assistant-label">Equipo docente</InputLabel>
                  <Select
                    labelId="assistant-label"
                    id={`assistant`}
                    name={`assistant`}
                    value={`${addProfesor}`}
                    onChange={handleInputChangeAssistant}
                  >
                    {
                      professors?.map((professor) => {
                        if (professor.id === principalprofessor || team.includes(professor.id)) {
                          return
                        }
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

              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.formSelects}
                  onClick={handleAddProfessor}
                >
                  Agregar docente
                </Button>
              </Grid>



              <Grid item xs={12}>
                {
                  professors.length > 0
                  &&
                  <FormControl className={classes.formSelects}>
                    <InputLabel id="director-label">Director de escuela</InputLabel>
                    <Select
                      labelId="director-label"
                      id="director"
                      name='director'
                      value={director}
                      onChange={handleInputChange}
                    >
                      {
                        professors?.map((professor) => {
                          if (!professor.director) {
                            return
                          }
                          return (
                            <MenuItem key={professor.id} value={professor.id}>
                              {`${professor.fathername} ${professor.mothername}, ${professor.names} (${professor.codeprofessor})`}
                            </MenuItem>
                          )
                        })
                      }
                    </Select>
                  </FormControl>
                }
              </Grid>
            </Grid>
          }

        </div>
      </div>
    </>

  )
}
