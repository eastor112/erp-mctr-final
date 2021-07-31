import React, { useState } from 'react'
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import { SyllabeCreateRevision } from './SyllabeCreateRevision'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import MenuItem from '@material-ui/core/MenuItem';
import PersonIcon from '@material-ui/icons/Person';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';


const actualYear = new Date().getFullYear();


export const SyllabeCreateGeneralData = ({
  id,
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
  professors,
  setFormValues,
  handleUdpadeGeneralData }) => {

  const classes = useStylesCreateSyllabe();
  const [assistant, setAddAssistant] = useState('')


  const handleInputChangeAssistant = (e) => {
    const value = e.target.value;
    setAddAssistant(value);
  }

  const handleAddProfessor = () => {
    if (assistant) {
      setFormValues(prev => ({
        ...prev,
        assistantprofessors: [...assistantprofessors, assistant]
      }));
      setAddAssistant('')
    }
  }

  const handDeleteProfessor = (id) => {
    setFormValues(prev => ({
      ...prev,
      assistantprofessors: assistantprofessors.filter((element) => element != id)
    }));
  }


  return (
    <>
      <div className="container__datos__generales">

        {
          course
          &&
          <Grid container spacing={3} alignItems='flex-end'>

            <Grid item xs={6} >
              <h4>INFORMACIÓN GENERAL</h4>
            </Grid>


            <Grid item xs={6} align='end'>
              <SyllabeCreateRevision />
            </Grid>

            {/* course */}
            {
              courses
              &&
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
                      courses.map((course) => {
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
            }


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
                InputLabelProps={{
                  shrink: true,
                }}
                id="finishdate"
                name="finishdate"
                value={finishdate}
                onChange={handleInputChange}
              />
            </Grid>


            {/* Director de escuela */}
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
                    value={director ? director : ''}
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
                    value={principalprofessor ? principalprofessor : ''}
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


            {/* assistantprofessors labels */}
            <Grid item xs={7}>
              <Typography variant="h3" className={classes.title}>
                Equipo Docente:
              </Typography>
              {
                (assistantprofessors.length > 0)
                  ?
                  <div className={classes.demo}>
                    <List>
                      {
                        assistantprofessors.map((profe) => {
                          const ind = professors.find(pro => pro.id === profe)
                          return (
                            <ListItem key={profe}>
                              <ListItemAvatar>
                                <Avatar>
                                  <PersonIcon color='primary' />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={`${ind?.fathername} ${ind?.mothername}, ${ind?.names} (${ind?.codeprofessor})`}
                              />
                              <ListItemSecondaryAction
                                onClick={() => handDeleteProfessor(profe)}
                              >
                                <IconButton edge="end" aria-label="delete">
                                  <HighlightOffIcon color='secondary' />
                                </IconButton>
                              </ListItemSecondaryAction>
                            </ListItem>)
                        })
                      }
                    </List>
                  </div>
                  :
                  <Typography variant="h4" className={classes.title}>
                    **Aun no se ha agregado equipo docente a este curso
                  </Typography>
              }
            </Grid>


            {/* assistantprofessors select professor */}
            <Grid item xs={9}>
              <FormControl className={classes.formSelects}>
                <InputLabel id="assistant-label">Seleccione equipo docente</InputLabel>
                <Select
                  labelId="assistant-label"
                  id={`assistant`}
                  name={`assistant`}
                  value={`${assistant}`}
                  onChange={handleInputChangeAssistant}
                >
                  {
                    professors?.map((professor) => {
                      if (professor.id === principalprofessor || assistantprofessors.includes(professor.id)) {
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


            {/* assistantprofessors add Button */}
            <Grid item xs={3}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.addButton}
                onClick={handleAddProfessor}
              >
                Agregar docente
              </Button>
            </Grid>


            <Grid item xs={12} align='center'>
              <Button
                variant="contained"
                color="primary"
                className={classes.formButton}
                onClick={handleUdpadeGeneralData}
              >
                Guardar datos
              </Button>
            </Grid>

          </Grid>
        }


      </div>
    </>

  )
}
