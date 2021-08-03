import React, { useState } from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'
import { SyllabeCreateUnit } from './SyllabeCreateUnit'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';


export const SyllabeCreateProgramming = () => {


  const classes = useStylesCreateSyllabe();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>

      <div className="container__datos__generales">

        <Grid container spacing={3} alignItems='flex-end'>

          <Grid item xs={6} >
            <h3>PROGRAMACIÓN SEMANAL</h3>
          </Grid>

          <Grid item xs={6} align='end'>
            <SyllabeCreateRevision />
          </Grid>


          <Grid item xs={6}>
            <FormControl className={classes.formSelects}>
              <InputLabel id="course-label">Unidad</InputLabel>
              <Select
                labelId="course-label"
                id="course"
                name="course"
              // value={course}
              // onChange={handleInputChange}
              >
                <MenuItem value={'1'}>1ra unidad</MenuItem>
                <MenuItem value={'2'}>2da unidad</MenuItem>
                <MenuItem value={'3'}>3ra unidad</MenuItem>
                <MenuItem value={'4'}>4ta unidad</MenuItem>
                <MenuItem value={'5'}>5ta unidad</MenuItem>
                <MenuItem value={'6'}>6ta unidad</MenuItem>
              </Select>
            </FormControl>
          </Grid>



          <Grid item xs={6}>
            <FormControl className={classes.formSelects}>
              <InputLabel id="course-label">Numero de semanas</InputLabel>
              <Select
                labelId="course-label"
                id="course"
                name="course"
              // value={course}
              // onChange={handleInputChange}
              >
                <MenuItem value={'2'}>2 semanas</MenuItem>
                <MenuItem value={'3'}>3 semanas</MenuItem>
                <MenuItem value={'4'}>4 semanas</MenuItem>
                <MenuItem value={'5'}>5 semanas</MenuItem>
                <MenuItem value={'6'}>6 semanas</MenuItem>
                <MenuItem value={'7'}>7 semanas</MenuItem>
                <MenuItem value={'8'}>8 semanas</MenuItem>
                <MenuItem value={'9'}>9 semanas</MenuItem>
                <MenuItem value={'10'}>10 semanas</MenuItem>

              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12}>
            <TextField
              label="Nombre de la unidad"
              type="text"
              className={classes.textField}

              InputLabelProps={{
                shrink: true,
              }}
              id="totalweeks"
              name='totalweeks'
            // value={totalweeks}
            // onChange={handleInputChange}
            />
          </Grid>


          <Grid item xs={4}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.addButton}
            // onClick={handleAddProfessor}
            >
              Agregar Unidad
            </Button>
          </Grid>

          {/* <SyllabeCreateUnit /> */}
        </Grid>
      </div>


      <div className="container__datos__generales">

        <Grid container spacing={3} alignItems='flex-end'>

          <Grid item xs={6} >
            <h4>UNIDAD 1</h4>
          </Grid>

          <Grid item xs={12} >
            <Typography variant="h3" className={classes.title}>
              Titulo largo de la unidad en cuestion
            </Typography>
          </Grid>
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


        <Grid item xs={4} >
          <Button
            variant="outlined"
            color="primary"
            className={classes.addButton}
          // onClick={handleAddProfessor}
          >
            Agregar resultado
          </Button>
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

        <Grid item xs={4}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.addButton}
          // onClick={handleAddProfessor}
          >
            Agregar resultado
          </Button>
        </Grid>







        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Semana 1</Typography>
            <Typography className={classes.secondaryHeading}>Resumen breve de los contenidos</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <Grid container spacing={3} alignItems='flex-end' spacing={1} >

              <Grid item xs={3} >
                <h6>Contenidos:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
              <Grid item xs={3}>
                <h6>Estrategias:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
              <Grid item xs={3}>
                <h6>Evidencias:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
              <Grid item xs={3}>
                <h6>Instrumentos:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Semana 2</Typography>
            <Typography className={classes.secondaryHeading}>
              Resumen breve de los contenidos
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={3} alignItems='flex-end' spacing={1} >

              <Grid item xs={3} >
                <h6>Contenidos:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
              <Grid item xs={3}>
                <h6>Estrategias:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
              <Grid item xs={3}>
                <h6>Evidencias:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
              <Grid item xs={3}>
                <h6>Instrumentos:</h6>
                <TextareaAutosize
                  aria-label="minimum height"
                  className={classes.formSelects}
                  minRows={8}
                  placeholder="Escriba los principios y procedimientos del curso..."
                  id='procedures'
                  name='procedures'
                // value={procedures}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

      </div>
    </>

  )
}
