import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





export const SyllabeCreateWeek = ({ weeknumber, contents, strategies, evidences, instruments }) => {

  const classes = useStylesCreateSyllabe();

  return (

    <Accordion className={classes.formSelects}>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography className={classes.heading}>Semana {weeknumber}</Typography>
        <Typography className={classes.secondaryHeading}>
          {contents.substring(0, 70)}...
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={3} spacing={1} >

          <Grid item xs={3}>
            <FormControl className={classes.formSelects}>
              <InputLabel id="course-label">Numero de semana</InputLabel>
              <Select
                labelId="course-label"
                // id="capability"
                name="capability"
              // value={capability}
              // onChange={handleInputChange}
              >

                <MenuItem
                >
                  hola
                </MenuItem>)


              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Inicio de semana"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name='startdate'
            // value={startdate}
            // onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="fin de semana"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name='startdate'
            // value={startdate}
            // onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3}>
          </Grid>




          <Grid item xs={3} >
            <h6>Contenidos:</h6>
            <TextareaAutosize
              aria-label="minimum height"
              className={classes.formSelects}
              minRows={8}
              placeholder="Escriba los principios y procedimientos del curso..."
              id='procedures'
              name='procedures'
              value={contents}
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
              value={strategies}
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
              value={evidences}
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
              value={instruments}
            />
          </Grid>

          <Grid item xs={12} align='center'>
            <Button
              variant="contained"
              color="primary"
              className={classes.formButton}
            // onClick={handleAddProfessor}
            >
              Actualizar semana
            </Button>
          </Grid>

        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
