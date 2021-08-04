import React, { useState } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';





export const SyllabeCreateWeek = () => {

  const classes = useStylesCreateSyllabe();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.formSelects}>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography className={classes.heading}>Semana 1</Typography>
        <Typography className={classes.secondaryHeading}>
          Resumen breve de los contenidos
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={3} spacing={1} >

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
  )
}
