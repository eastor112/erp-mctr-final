import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export const SyllabeCreateProfessorsTeam = () => {
  const classes = useStylesCreateSyllabe();
  return (
    <>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="demo-simple-select-label">Docente Principal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={'a'}>Emerson Asto</MenuItem>
              <MenuItem value={'b'}>Luis Julca</MenuItem>
              <MenuItem value={'u'}>Javier Lescano</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary">Agregar equipo docente</Button>
        </Grid>

        <Grid item xs={10}>
          <FormControl className={classes.formSelects}>
            <InputLabel id="demo-simple-select-label">Equipo docente</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            // value={age}
            // onChange={handleChange}
            >
              <MenuItem value={'a'}>Emerson Asto</MenuItem>
              <MenuItem value={'b'}>Luis Julca</MenuItem>
              <MenuItem value={'u'}>Javier Lescano</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary">Eliminar</Button>
        </Grid>
      </Grid>
    </>
  )
}
