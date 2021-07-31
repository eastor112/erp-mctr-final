import React from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';





export const SyllabeCreateCounseling = ({
  counselingpurpose,
  counselingday,
  counselinghour,
  counselingplace,
  handleInputChange,
  handleUdpadeGeneralData
}) => {

  const classes = useStylesCreateSyllabe();


  return (

    <div className="container__datos__generales">
      <Grid container spacing={3} alignItems='flex-end'>

        <Grid item xs={6} >
          <h4>CONSEJERÍA ACADÉMICA</h4>
        </Grid>

        <Grid item xs={6} align='end'>
          <SyllabeCreateRevision />
        </Grid>

        <Grid item xs={12}>
          <h6>Propósito:</h6>
          <TextareaAutosize
            aria-label="minimum height"
            className={classes.formSelects}
            minRows={2}
            placeholder="Escriba el propósito de la consejería...."
            id='counselingpurpose'
            name='counselingpurpose'
            value={counselingpurpose}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={3}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="counselingday-label">Día</InputLabel>
            <Select
              labelId="counselingday-label"
              id="counselingday"
              name="counselingday"
              value={counselingday}
              onChange={handleInputChange}
            >
              <MenuItem value='lunes'>Lunes</MenuItem>
              <MenuItem value='martes'>Martes</MenuItem>
              <MenuItem value='miercoles'>Miercoles</MenuItem>
              <MenuItem value='jueves'>Jueves</MenuItem>
              <MenuItem value='viernes'>Viernes</MenuItem>
              <MenuItem value='sabado'>Sabado</MenuItem>
              <MenuItem value='domingo'>Domingo</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="standard-basic"
            label="Hora"
            className={classes.formSelects}
            id='counselinghour'
            name='counselinghour'
            value={counselinghour}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="standard-basic"
            label="Lugar"
            className={classes.formSelects}
            id='counselingplace'
            name='counselingplace'
            value={counselingplace}
            onChange={handleInputChange}
          />
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

    </div>
  )
}
