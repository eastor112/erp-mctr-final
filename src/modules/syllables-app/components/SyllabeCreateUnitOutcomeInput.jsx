import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';




export const SyllabeCreateUnitOutcomeInput = ({
  addOutcome,
  outcome,
  handleInputChange
}) => {

  const classes = useStylesCreateSyllabe();



  return (
    <>
      <Grid item xs={12}>
        <h6 style={{ marginTop: '30px' }}>Resultado de aprendizaje:</h6>
        <TextareaAutosize
          aria-label="minimum height"
          className={classes.formSelects}
          minRows={3}
          placeholder="Escriba los principios y procedimientos del curso..."
          id='outcome'
          name='outcome'
          value={outcome}
          onChange={handleInputChange}
        />
      </Grid>

      <Grid item xs={12} align='center'>
        <Button
          variant="contained"
          color="primary"
          className={classes.formButton}
          onClick={addOutcome}
        >
          Agregar resultado
        </Button>
      </Grid>
    </>
  )
}
