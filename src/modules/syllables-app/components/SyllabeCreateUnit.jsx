import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import Button from '@material-ui/core/Button';
import { SyllabeCreateWeek } from './SyllabeCreateWeek';
import TextField from '@material-ui/core/TextField';
import { SyllabeCreateRevision } from './SyllabeCreateRevision';
import DeleteIcon from '@material-ui/icons/Delete';
import { useForm } from '../../../hooks/useForm';
import { SyllabeCreateUnitCapacities } from './SyllabeCreateUnitCapacities';
import { SyllabeCreateUnitOutcomes } from './SyllabeCreateUnitOutcomes';

export const SyllabeCreateUnit = ({
  id,
  name,
  unitnumber,
  capabilities,
  outcomes,
  weeks,
  syllabeCapabilities,
  handleDeleteUnit
}) => {


  const classes = useStylesCreateSyllabe();

  const { formValues, handleInputChange } = useForm({
    unitName: name,
    capability: '',
    outcome: ''
  });

  const {
    unitName,
    capability,
    outcome
  } = formValues;

  return (
    <Accordion >

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >

        <Typography className={classes.heading}><b>Unidad {unitnumber}</b></Typography>

        <Typography
          className={classes.secondaryHeading}>
          {name.length > 70 ? name.substring(0, 70) + '...' : name}
        </Typography>

      </AccordionSummary>

      <AccordionDetails>


        <Grid container spacing={3} alignItems='flex-end'>
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



          <Grid item xs={9}>
            <TextField
              label="Nombre de la unidad"
              type="text"
              className={classes.textField}

              InputLabelProps={{
                shrink: true,
              }}
              name='unitName'
              value={unitName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={3} align='center'>
            <Button
              variant="outlined"
              color="primary"
              className={classes.root}
            // onClick={handleAddProfessor}
            >
              Cambiar nombre
            </Button>
          </Grid>


          {/* capabilities */}
          <SyllabeCreateUnitCapacities
            capabilities={capabilities}
            syllabeCapabilities={syllabeCapabilities}
            handleInputChange={handleInputChange}
            capability={capability}
          />


          {/* outcomes */}
          <SyllabeCreateUnitOutcomes
            outcomes={outcomes}
            outcome={outcome}
            handleInputChange={handleInputChange}
          />


          {/* weeks */}
          {
            weeks.map((wk) => {
              return <SyllabeCreateWeek key={wk.id} {...wk} />
            })
          }


        </Grid>

      </AccordionDetails>
    </Accordion>



  )
}
