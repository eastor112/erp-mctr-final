import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { SyllabeCreateWeek } from './SyllabeCreateWeek';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import BookIcon from '@material-ui/icons/Book';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { SyllabeCreateRevision } from './SyllabeCreateRevision';
import DeleteIcon from '@material-ui/icons/Delete';

export const SyllabeCreateUnit = ({ id, unitnumber, handleDeleteUnit }) => {

  const classes = useStylesCreateSyllabe();


  return (
    <Accordion>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >

        <h4>
          Unidad {unitnumber}
        </h4>
        <Typography className={classes.secondaryHeading}></Typography>

      </AccordionSummary>

      <AccordionDetails>


        {/* // */}
        <Grid container spacing={3}>
          <Grid item xs={5} >


            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => handleDeleteUnit(id)}
            >
              Eliminar unidad
            </Button>

          </Grid>

          <Grid item xs={7} align='end'>
            <SyllabeCreateRevision />
          </Grid>



          <Grid item xs={12}>
            <TextField
              label="Nombre de la unidad"
              type="text"
              className={classes.textField}

              InputLabelProps={{
                shrink: true,
              }}
              id="name"
              name='name'
            // value={name}
            // onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <h5>
              Capacidades:
            </h5>
            <div className={classes.demo}>
              <List>
                {
                  [1, 2].map((resource) => {

                    return (
                      <ListItem key={resource}>
                        <ListItemAvatar>
                          <Avatar>
                            <BookIcon color='primary' />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={`capacidad ${resource}`}
                        />
                        <ListItemSecondaryAction
                          onClick={() => handDeleteResource(resource)}
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
          </Grid>


          <Grid item xs={12}>
            <FormControl className={classes.formSelects}>
              <InputLabel id="course-label">Capacidad terminal</InputLabel>
              <Select
                labelId="course-label"
                id="course"
                name="course"
              // value={course}
              // onChange={handleInputChange}
              >
                <MenuItem value={'1'}>CT1.1. Conocimientos de ingeniería</MenuItem>
                <MenuItem value={'2'}>CT1.2. Herramientas modernas</MenuItem>
                <MenuItem value={'3'}>CT1.3. Trabajo en equipo</MenuItem>


              </Select>
            </FormControl>
          </Grid>



          <Grid item xs={12} align='center'>
            <Button
              variant="contained"
              color="primary"
              className={classes.formButton}
            // onClick={handleAddProfessor}
            >
              Agregar capacidad
            </Button>
          </Grid>


          <Grid item xs={12}>
            <h5>
              Resultados de aprendizaje:
            </h5>
            <div className={classes.demo}>
              <List>
                {
                  [1, 2].map((resource) => {

                    return (
                      <ListItem key={resource}>
                        <ListItemAvatar>
                          <Avatar>
                            <BookIcon color='primary' />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={`Resultado de aprendizaje ${resource}`}
                        />
                        <ListItemSecondaryAction
                          onClick={() => handDeleteResource(resource)}
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
          </Grid>

          <Grid item xs={12}>
            <h6 style={{ marginTop: '30px' }}>Resultados de aprendizaje:</h6>
            <TextareaAutosize
              aria-label="minimum height"
              className={classes.formSelects}
              minRows={5}
              placeholder="Escriba los principios y procedimientos del curso..."
              id='procedures'
              name='procedures'
            // value={procedures}
            />
          </Grid>

          <Grid item xs={12} align='center'>
            <Button
              variant="contained"
              color="primary"
              className={classes.formButton}
            // onClick={handleAddProfessor}
            >
              Agregar resultado
            </Button>
          </Grid>

          {/* semanas */}

          <SyllabeCreateWeek />

          <Grid item xs={12}>
          </Grid>
        </Grid>

      </AccordionDetails>
    </Accordion>



  )
}
