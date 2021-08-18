import React from 'react'
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';


import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import { SyllabeCreateWeek } from './SyllabeCreateWeek';
import { SyllabeCreateRevision } from './SyllabeCreateRevision';
import { useForm } from '../../../hooks/useForm';
import { SyllabeCreateUnitCapacities } from './SyllabeCreateUnitCapacities';
import { SyllabeCreateUnitOutcomes } from './SyllabeCreateUnitOutcomes';
import {
  createCapability,
  createOutcome,
  deleteCapabilityUnit,
  deleteOutcomeUnit,
  getFullCapability,
  updateUnit
} from '../../../helpers/syllabes-helpers';
import { updateActualSyllabe } from '../../../actions/syllabe-actions';

export const SyllabeCreateUnit = ({
  id,
  name,
  unitnumber,
  capabilities,
  outcomes,
  weeks,
  syllabeCapabilities,
  handleDeleteUnit,
  actualSyllabe,
  dispatch,
  token
}) => {


  const classes = useStylesCreateSyllabe();

  const { formValues, handleInputChange, setFormValues } = useForm({
    unitName: name,
    capability: '',
    outcome: ''
  });

  const {
    unitName,
    capability,
    outcome
  } = formValues;

  const handleChangeName = () => {

    Swal.fire({
      title: 'Cambiando nombre',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    updateUnit(id, { name: unitName }, token)
      .then((updatedUnit) => {

        const units = actualSyllabe.units.map((unit) => {
          if (unit.id === updatedUnit.id) {
            unit.name = updatedUnit.name
          }
          return unit;
        })

        dispatch(updateActualSyllabe({ ...actualSyllabe, units: [...units] }));

        Swal.close();
      });
  }


  const addCapacity = () => {

    Swal.fire({
      title: 'Agregando Capacidad...',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    createCapability({ unit: id, capacity: capability }, token)
      .then(({ id: idCapability }) => {
        getFullCapability(idCapability, token)
          .then((cap) => {

            const unitsUpdated = actualSyllabe.units.map((unit) => {

              if (unit.id === id) {
                unit.capabilities = [...unit.capabilities, cap]
              }
              return unit;
            });

            setFormValues(prev => ({ ...prev, capability: '' }));

            dispatch(updateActualSyllabe({
              ...actualSyllabe,
              units: [...unitsUpdated]
            }));

            Swal.close();
          })
      })
  }


  const deleteCapability = (idCapability) => {

    Swal.fire({
      title: 'Eliminando Capacidad...',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    deleteCapabilityUnit(idCapability, token)
      .then(() => {
        const unitsUpdated = actualSyllabe.units.map((unit) => {

          if (unit.id === id) {
            unit.capabilities = unit.capabilities.filter((cap) => cap.id !== idCapability);
          }
          return unit
        });

        dispatch(updateActualSyllabe({
          ...actualSyllabe,
          units: [...unitsUpdated]
        }));

        Swal.close();

      })
  }


  const addOutcome = () => {

    Swal.fire({
      title: 'Agregando Resultado...',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    createOutcome({ unit: id, description: outcome }, token)
      .then((createdOutcome) => {

        const unitsUpdated = actualSyllabe.units.map((unit) => {
          if (unit.id === id) {
            unit.outcomes = [...unit.outcomes, createdOutcome];
          }
          return unit;
        });

        setFormValues(prev => ({ ...prev, outcome: '' }));

        dispatch(updateActualSyllabe({
          ...actualSyllabe,
          units: [...unitsUpdated]
        }));

        Swal.close();
      })
  }


  const deleteOutcome = (idOutcome) => {

    Swal.fire({
      title: 'Eliminando Resultado...',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });


    deleteOutcomeUnit(idOutcome, token)
      .then(() => {
        const unitsUpdated = actualSyllabe.units.map((unit) => {
          if (unit.id === id) {
            unit.outcomes = unit.outcomes.filter(out => out.id !== idOutcome);
          }
          return unit;
        });

        dispatch(updateActualSyllabe({
          ...actualSyllabe,
          units: [...unitsUpdated]
        }));

        Swal.close();
      });
  }


  return (
    <Accordion >

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >

        <Typography className={classes.heading}>
          <b>Unidad {unitnumber}</b>
        </Typography>

        <Typography
          className={classes.secondaryHeading}>
          {name.length > 70 ? name.substring(0, 70) + '...' : name}
        </Typography>

      </AccordionSummary>

      <AccordionDetails>


        <Grid container spacing={3} alignItems='flex-end'>

          {/* delete unit */}
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


          {/* change name  */}
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

          {/* button change name  */}
          <Grid item xs={3} align='center'>
            <Button
              variant="outlined"
              color="primary"
              className={classes.root}
              onClick={handleChangeName}
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
            addCapacity={addCapacity}
            deleteCapability={deleteCapability}
            setFormValues={setFormValues}
          />


          {/* outcomes */}
          <SyllabeCreateUnitOutcomes
            outcomes={outcomes}
            addOutcome={addOutcome}
            deleteOutcome={deleteOutcome}
            outcome={outcome}  //es el control del formulario
            handleInputChange={handleInputChange}
          />

          <Grid item xs={3} align='center'>
          </Grid>

          {/* weeks */}
          {
            weeks.map((wk) => {
              return <SyllabeCreateWeek key={wk.id} {...wk} token={token} />
            })
          }


        </Grid>

      </AccordionDetails>
    </Accordion>
  )
}
