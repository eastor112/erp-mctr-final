import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from '../../../hooks/useForm';
import { updateWeekUnit } from '../../../helpers/syllabes-helpers';


export const SyllabeCreateWeek = ({
  id,
  weeknumber,
  contents,
  strategies,
  evidences,
  instruments,
  token }) => {

  const classes = useStylesCreateSyllabe();


  const { formValues, handleInputChange } = useForm({
    weeknumber: weeknumber,
    contents: contents,
    strategies: strategies,
    evidences: evidences,
    instruments: instruments,
    startweekdate: '2021-08-07',
    finishweekdate: '2021-08-07',
  })


  const updateWeek = () => {

    Swal.fire({
      title: 'Actualizando semana',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    updateWeekUnit(id, formValues, token)
      .then(() => {
        console.log('semana actualizada');
        Swal.close();
      });
  }

  return (

    <Accordion className={classes.formSelects}>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography className={classes.heading}>Semana {formValues.weeknumber}</Typography>
        <Typography className={classes.secondaryHeading}>
          {contents.substring(0, 70)}...
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={3} spacing={3} >

          <Grid item xs={3}>
            <TextField
              id="weeknumber"
              name='weeknumber'
              label="Número de semana"
              type="number"
              className={classes.textField}
              value={formValues.weeknumber}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              label="Inicio de semana"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              name='startweekdate'
              value={formValues.startweekdate}
              onChange={handleInputChange}

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
              name='finishweekdate'
              value={formValues.finishweekdate}
              onChange={handleInputChange}
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
              placeholder="Escriba los contenidos de la semana"
              id='contents'
              name='contents'
              value={formValues.contents}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3}>
            <h6>Estrategias:</h6>
            <TextareaAutosize
              aria-label="minimum height"
              className={classes.formSelects}
              minRows={8}
              placeholder="Escriba las estrategias que se utilizarán"
              id='strategies'
              name='strategies'
              value={formValues.strategies}
              onChange={handleInputChange}

            />
          </Grid>

          <Grid item xs={3}>
            <h6>Evidencias:</h6>
            <TextareaAutosize
              aria-label="minimum height"
              className={classes.formSelects}
              minRows={8}
              placeholder="Escriba las evidencias que se tendrán"
              id='evidences'
              name='evidences'
              value={formValues.evidences}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3}>
            <h6>Instrumentos:</h6>
            <TextareaAutosize
              aria-label="minimum height"
              className={classes.formSelects}
              minRows={8}
              placeholder="Escriba los instrumentos que se utilizará"
              id='instruments'
              name='instruments'
              value={formValues.instruments}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} align='center'>
            <Button
              variant="contained"
              color="primary"
              className={classes.formButton}
              onClick={updateWeek}
            >
              Actualizar semana
            </Button>
          </Grid>

        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
