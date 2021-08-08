import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { useForm } from '../../../hooks/useForm';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import { createUnit, deleteUnit, getFullUnitInfo } from '../../../helpers/syllabes-helpers';
import { useDispatch } from 'react-redux';
import { updateActualSyllabe } from '../../../actions/syllabe-actions';



export const SyllabeCreateAddNewUnit = ({ actualSyllabe, token }) => {

  const classes = useStylesCreateSyllabe();
  const dispatch = useDispatch();

  const { formValues, handleInputChange } = useForm({
    unitnumber: '',
    name: '',
    durationweeks: '',
    syllabe: actualSyllabe.id
  });

  const {
    unitnumber,
    name,
    durationweeks,
    syllabe } = formValues;

  const handleAddUnit = () => {
    createUnit(formValues, token)
      .then(({ id }) => {

        getFullUnitInfo(id, token).then((unitFull) => {
          dispatch(updateActualSyllabe({ ...actualSyllabe, units: [...actualSyllabe.units, unitFull] }));
        });
      });
  }


  return (
    <div className="container__datos__generales">

      <Grid container spacing={3} alignItems='flex-end'>

        <Grid item xs={12} mt={2}>
          <h3>AGREGAR UNIDADES</h3>
        </Grid>


        <Grid item xs={6}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="unitnumber-label">Unidad</InputLabel>
            <Select
              labelId="unitnumber-label"
              id="unitnumber"
              name="unitnumber"
              value={unitnumber}
              onChange={handleInputChange}
            >
              <MenuItem value={'1'}>1ra unidad</MenuItem>
              <MenuItem value={'2'}>2da unidad</MenuItem>
              <MenuItem value={'3'}>3ra unidad</MenuItem>
              <MenuItem value={'4'}>4ta unidad</MenuItem>
              <MenuItem value={'5'}>5ta unidad</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="durationweeks-label">Numero de semanas</InputLabel>
            <Select
              labelId="durationweeks-label"
              id="durationweeks"
              name="durationweeks"
              value={durationweeks}
              onChange={handleInputChange}
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
            id="name"
            name='name'
            value={name}
            onChange={handleInputChange}
          />
        </Grid>


        <Grid item xs={12} align='center'>
          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
            onClick={handleAddUnit}
          >
            Agregar Unidad
          </Button>
        </Grid>

      </Grid>
    </div>
  )
}
